import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { ModalContext, UserAuth } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { clearCart } from "../features/cart/cartSlice";

export default function AuthDetails() {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const { setIsUserLoggedIn } = useContext(UserAuth);
  const { closeModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        closeModal();
        setIsUserLoggedIn(false);
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
      {currentUser ? (
        <>
          <p>{`You Are Signed In As ${currentUser.email}`}</p>
          <button onClick={signOutUser}>Sign Out</button>
        </>
      ) : null}
    </>
  );
}
