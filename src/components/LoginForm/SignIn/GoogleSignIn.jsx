import { Google } from '@mui/icons-material';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import style from "./SignInForm.module.css";
import { useContext} from 'react'
import { UserAuth } from '../../../context/AppContext';
import { toast } from 'react-toastify';

export default function GoogleSignIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth()
    const {setIsUserLoggedIn} = useContext(UserAuth)


    const googleSignIn = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result);
            setIsUserLoggedIn(true);
          })
          .catch((error) => {
            toast(error.code)
            console.log(error);
          });
      };
  return (
    <>
    <button className={style.googleSignInButton} onClick={googleSignIn}>
              {" "}
              <Google color="primary" /> <span> Sign In with Google</span>
            </button>
        
        </>
  )
}
