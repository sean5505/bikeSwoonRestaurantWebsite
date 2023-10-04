import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { ModalContext, UserAuth } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AuthDetails() {
  const auth = getAuth()
  const currentUser = auth.currentUser;
  const { setIsUserLoggedIn } = useContext(UserAuth);
  const { closeModal } = useContext(ModalContext);
  const navigate = useNavigate()

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        closeModal();
        setIsUserLoggedIn(false);
        toast("Sign Out sucessful");
        navigate('/')
        
      })
      .catch((error) => console.log(error));
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
