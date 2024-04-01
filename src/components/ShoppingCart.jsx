import { Button, Modal } from "flowbite-react";
import { useState } from "react";

function ShoppingCart({ openModal, setOpenModal, cart }) {
  const productInCartCard = () => {
    const selectDropdown = () => {
      return (
        <div className="max-w-sm">
          <select className="select select-bordered select-xs w-full max-w-xs">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
      );
    };

    let newCartQty = [];
    cart.forEach((item) => {
      let foundItem = newCartQty.find(
        (cartItem) =>
          cartItem.name === item.name && cartItem.color === item.color
      );

      if (foundItem) {
        foundItem.qty += 1;
      } else {
        newCartQty.push({
          imgSrc: item.imgSrc,
          name: item.name,
          price: item.price,
          color: item.color,
          qty: 1,
        });
      }
    });

    return (
      <>
        {newCartQty.length === 0 ? (
          <p>Oppss No product in cart, continue shopping</p>
        ) : (
          newCartQty.map((val, index) => {
            return (
              <div key={index} className="flex justify-between">
                <div className="flex gap-5">
                  <img
                    src={val.imgSrc}
                    className="h-20 w-20 sm:h-40 sm:w-40 object-cover object-center"
                  />
                  <div className="flex flex-col gap-2 sm:gap-3 justify-between">
                    <div>
                      <p className="text-sm">{val.name}</p>
                      <p className="text-sm text-first mt-0 sm:mt-3">
                        {val.color}
                      </p>
                    </div>
                    <div className="flex gap-5 items-center sm:hidden">
                      {selectDropdown()}
                      <p className="text-first text-sm hover:underline cursor-pointer">
                        remove
                      </p>
                    </div>
                    <div>
                      <p className="text-first text-sm mb-2">Qty: {val.qty}</p>
                      <p className="text-first text-sm">Ships in 3-4 weeks</p>
                    </div>
                  </div>
                </div>
                <div className="sm:flex hidden flex-col gap-2 items-center">
                  {selectDropdown()}
                  <p className="text-first text-sm hover:underline cursor-pointer">
                    remove
                  </p>
                </div>
                <div>
                  <p className="text-sm">{val.price}$</p>
                </div>
              </div>
            );
          })
        )}
      </>
    );
  };
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-custom">Shopping Carts</Modal.Header>
        <Modal.Body className="bg-custom">
          <div className="space-y-6">{productInCartCard()}</div>
        </Modal.Body>
        <Modal.Footer className="bg-custom">
          {cart.length === 0 ? (
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Continue Shopping
            </Button>
          ) : (
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Continue to payment
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ShoppingCart;
