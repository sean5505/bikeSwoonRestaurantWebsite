import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

function VerifyEmail() {
  function verify() {
    if (auth.currentUser) {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          toast.success("Verification Email Sent");
        })
        .catch((error) => {
          console.log(error);
          toast.error("An error has occured ");
        });
    }
  }

  return <button style={{backgroundColor: 'blue'}} onClick={() => verify()}>Verify Email</button>;
}

export default VerifyEmail;
