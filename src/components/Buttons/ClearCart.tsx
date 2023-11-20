import { useState } from "react";
import Modal from "../utils/Modal/Modal";
import { useAppDispatch } from "../../app/hooks";
import { clearCart } from "../../features/cart/cartSlice";

function ClearCart() {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}> Clear Cart</button>
      <Modal
        title="Clear Cart"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        performFunction={() => dispatch(clearCart())}
      >
        <p>Are you sure?</p>
        <p>This action will delete all items from the cart</p>
      </Modal>
    </>
  );
}

export default ClearCart;
