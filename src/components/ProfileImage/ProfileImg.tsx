import { auth } from "../../firebase";
import style from "./ProfileImage.module.css";
import { Link } from "react-router-dom";

function ProfileImage() {
  return (
    <>
      {auth.currentUser ? (
        <Link to={"/profile"}>
          <img
            className={style.profileImg}
            src={`${auth.currentUser.photoURL}`}
            title=" Your Profile"
            aria-label="Your Profile"
          />
        </Link>
      ) : null}
    </>
  );
}

export default ProfileImage;
