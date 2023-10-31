import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clearCart } from "../../features/cart/cartSlice";
import { UserAuth } from "../../context/AppContext";
import ProfileImage from "../ProfileImage/ProfileImg";
import Modal from "../utils/Modal/Modal";

function SignOut() {
  const { setIsUserLoggedIn } = useContext(UserAuth);
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setIsUserLoggedIn(false);
        closeModal();
        if (cart.length >= 1) {
          dispatch(clearCart());
        }
        toast.success("Sign Out successful");
        navigate("/");
      })
      .catch((error) => toast.error(`Sign Out failed: ${error.message}`));
  };

  return (
    <>
      <button title="Sign Out" onClick={() => openModal()}>
        Sign Out
      </button>
      <Modal
        title="Sign Out"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        performFunction={signOutUser}
      >
        <ProfileImage />
        <p>You are currently Signed In as {auth.currentUser?.email}</p>
        <p>Click the button below to sign out</p>
      </Modal>{" "}
    </>
  );
}

export default SignOut;
