import { Button, Modal } from "flowbite-react";

function productInCartCard() {
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
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <img
            src="https://cdn.shopify.com/s/files/1/0845/0257/7474/files/04-stands-color-01.jpg?v=1699433745&width=940"
            className="h-20 w-20 sm:h-40 sm:w-40 object-cover object-center"
          />

          <div className="flex flex-col gap-2 sm:gap-3 justify-between">
            <div>
              <p className="text-sm">Adjustable Stand</p>
              <p className="text-sm text-first mt-0 sm:mt-3">White and black</p>
            </div>
            <div className="flex gap-5 items-center sm:hidden">
              {selectDropdown()}
              <p className="text-first text-sm hover:underline cursor-pointer">
                remove
              </p>
            </div>
            <div>
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
          <p className="text-sm">23.00$</p>
        </div>
      </div>
    </>
  );
}

function ShoppingCart({ openModal, setOpenModal, cart }) {
  console.log(cart);
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-custom">Shopping Carts</Modal.Header>
        <Modal.Body className="bg-custom">
          <div className="space-y-6">{productInCartCard()}</div>
        </Modal.Body>
        <Modal.Footer className="bg-custom">
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Continue to payment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ShoppingCart;
