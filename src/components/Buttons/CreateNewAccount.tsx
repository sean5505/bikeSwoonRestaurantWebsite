import { useState } from "react";

import Modal from "../utils/Modal/Modal";
import CreateAccount from "../Forms/CreateAccount/CreateAccount";

function SignOut() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button style={{ backgroundColor: "blue" }} onClick={openModal}>
        Create New Account
      </button>
      <Modal
        title="Create Account"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      >
        <CreateAccount />
      </Modal>
    </>
  );
}

export default SignOut;
