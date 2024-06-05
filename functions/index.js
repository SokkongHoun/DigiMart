const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  // prohib request from someone who isnt admin to add themselves as admin
  if (context.auth.token.admin !== true) {
    return { error: "Admin Privilege Only" };
  }
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin`,
      };
    })
    .catch((error) => {
      return error;
    });
});

exports.removeAdminRole = functions.https.onCall(async (data, context) => {
  // Check if request is made by an admin
  if (context.auth.token.admin !== true) {
    return { error: "Admin Privilege Only" };
  }
  // Remove admin claim
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: null,
      });
    })
    .then(() => {
      return {
        message: `Success! Admin claim has been removed from ${data.email}`,
      };
    })
    .catch((error) => {
      return error;
    });
});

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  try {
    const stripe = require("stripe")(functions.config().stripe.secret_key);
    const { stripeData } = data;

    const sessionData = {
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "https://digi-mart.vercel.app/",
      cancel_url: "https://digi-mart.vercel.app/",
      shipping_address_collection: {
        allowed_countries: ["US", "KH"],
      },
      line_items: stripeData,
    };

    const session = await stripe.checkout.sessions.create(sessionData);

    const sessionStatus = await stripe.checkout.sessions.retrieve(session.id);

    return {
      id: session.id,
      status: sessionStatus.payment_status,
    };
  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);
    throw new functions.https.HttpsError(
      "internal",
      "Error creating Stripe Checkout session"
    );
  }
});

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);

  let event;

  try {
    const whSec = functions.config().stripe.payments_webhook_secret;

    event = stripe.webhooks.constructEvent(
      req.rawBody,
      req.headers["stripe-signature"],
      whSec
    );
  } catch (error) {
    console.error("Webhook signature verification failed.");
    return res.sendStatus(400);
  }

  const dataObject = event.data.object;

  await admin.firestore().collection("orders").doc().set({
    paymentStatus: dataObject.payment_status,
    checkoutSessionId: dataObject.id,
  });
});
