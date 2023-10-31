import { EmailAuthProvider, deleteUser, reauthenticateWithCredential } from "firebase/auth";

import { auth, fireStoreDB } from "../../firebase";
import { toast } from "react-toastify";

import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import Modal from "../utils/Modal/Modal";

function DeleteAccount() {
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
  };

  async function deleteAccount() {
    const user = auth.currentUser
    if (user) {
      try {
        reauthenticateWithCredential(user, credential).then(async () => {
        await deleteDoc(doc(fireStoreDB, "users", user.uid));
        await deleteUser(user).then(() => {
          toast.success("Account Successfully Deleted");
          closeModal()
        });
      });
      } catch (error) {
        console.error("Error deleting account:", error);
        toast.error("An error occurred while deleting the account");
      }
    } else {
      return;
    }
  }

  return (
    <>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => openModal()}
        title="Delete Account"
      >
        Delete Account
      </button>
      <Modal
        title="Delete Account"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        performFunction={deleteAccount}
      >
        <p>Are you sure?</p>
        <p>
          This Action will permanetly delete all data associated with 
          <span> {auth.currentUser?.email}</span>
        </p>
       <div style={{textAlign:'center'}} >
        <label> Current Password</label>
        <input type="password"
        value={userProvidedPassword}
        onChange={(e) => setUserProvidedPassword(e.target.value)}/>
        </div>
      </Modal>{" "}
    </>
  );
}

export default DeleteAccount;
