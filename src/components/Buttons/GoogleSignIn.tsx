import { Google } from "@mui/icons-material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, fireStoreDB } from "../../firebase";
import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function GoogleSignIn() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate()
  const googleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then(async () => {
        const user = auth.currentUser;
        if (user) {
          await setDoc(doc(fireStoreDB, "users", user.uid), {
            Name: user.displayName,
            Email: user.email,
            img: user.photoURL,
            CreationDate: serverTimestamp(),
            userID: user.uid,
          });
          navigate("/");
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
        className="googleSignInButton"
        onClick={() => googleSignIn()}
      >
        {" "}
        <Google color="primary" /> <span> Sign In with Google</span>
      </button>
    </>
  );
}
