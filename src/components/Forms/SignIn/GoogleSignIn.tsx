import { Google } from "@mui/icons-material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import style from "./SignInForm.module.css";
import { useContext } from "react";
import { UserAuth } from "../../../context/AppContext";
import { toast } from "react-toastify";
import { auth, fireStoreDB } from "../../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

export default function GoogleSignIn() {
  const provider = new GoogleAuthProvider();

  const { setIsUserLoggedIn } = useContext(UserAuth);

  const googleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then(async () => {
        setIsUserLoggedIn(true);
        const user = auth.currentUser;
        if (user) {
          await addDoc(collection(fireStoreDB, "allUsers"), {
            Name: user.displayName,
            Email: user.email,
            CreationDate: serverTimestamp(),
            userID: user.uid,
          });

          await setDoc(doc(fireStoreDB, "users", user.uid), {
            Name: user.displayName,
            Email: user.email,
            img: user.photoURL,
            CreationDate: serverTimestamp(),
            userID: user.uid,
          });
        }
      })

      .catch((error) => {
        toast.error(error.code);
        console.log(error);
      });
  };
  return (
    <>
      <button
        className={style.googleSignInButton}
        onClick={() => googleSignIn()}
      >
        {" "}
        <Google color="primary" /> <span> Sign In with Google</span>
      </button>
    </>
  );
}
