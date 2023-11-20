import style from "./UpdateProfileForm.module.css";
import { UploadFile } from "@mui/icons-material";
import { auth, fireStoreDB } from "../../../firebase";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { DocumentData, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState } from "react";
import Modal from "../../utils/Modal/Modal";

type Props = {
  setFile: React.Dispatch<React.SetStateAction<File | null | undefined>>;
  userData: DocumentData;
  setUserData: React.Dispatch<React.SetStateAction<DocumentData>>;
  file: any;
};

function UpdateProfileForm(props: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userProvidedPassword, setUserProvidedPassword] = useState<string>("");

  const credential = EmailAuthProvider.credential(
    auth.currentUser?.email ?? "",
    userProvidedPassword
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUserProvidedPassword("");
  };

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const id = e.target.id;
    props.setUserData({ ...props.userData, [id]: value });
  }
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      props.setFile(e.target.files[0]);
    } else {
      props.setFile(null);
    }
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    openModal();
  }

  async function submitForm() {
    const user = auth.currentUser;
    if (user) {
      try {
        reauthenticateWithCredential(user, credential).then(async () => {
          await updateEmail(user, props.userData.Email);
          await updatePassword(user, props.userData.Password);
          await updateProfile(user, {
            displayName: props.userData.Name,
            photoURL: props.userData.img,
          }).then(() => {
            setDoc(doc(fireStoreDB, "users", user.uid), {
              ...props.userData,
              LastUpdate: serverTimestamp(),
            }).then(() => {
              closeModal();
              toast.success("Profile Successfully Updated");
            });
          });
        });
      } catch (error) {
        console.error(error);
        toast.error("An error has occured while updating profile" + error);
      }
    }
  }
  return (
    <>
      <h2 className={style.header}>Update Profile</h2>
      <form className={style.userInfoForm} onSubmit={handleFormSubmit}>
        <div className={style.formInput}>
          <label>Name</label>
          <input
            type="text"
            id="Name"
            value={props.userData.Name || ""}
            onChange={handleInput}
            minLength={6}
            required
          />
        </div>
        <div className={style.formInput}>
          <label>Email</label>
          <input
            type="email"
            id="Email"
            value={props.userData.Email || ""}
            onChange={handleInput}
          />
        </div>
        <div className={style.formInput}>
          <label>Password</label>
          <input
            type="text"
            id="Password"
            minLength={8}
            value={props.userData.Password || ""}
            onChange={handleInput}
          />
        </div>
        <div className={style.formInput}>
          <label htmlFor="file">
            Image: <UploadFile className={style.icon} />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            value={""}
            onChange={(e) => handleFileChange(e)}
          />
        </div>
        <button type="submit" title="Update Profile">
          Update
        </button>
      </form>
      <Modal
        title="Confirm Update"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        performFunction={submitForm}
      >
        <p>Are you sure you want to update your profile?</p>
        <p>This action will overwrite your current data</p>
        <div className={style.formInput}>
          <label> Current Password</label>
          <input
            type="password"
            value={userProvidedPassword}
            onChange={(e) => setUserProvidedPassword(e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
}

export default UpdateProfileForm;
