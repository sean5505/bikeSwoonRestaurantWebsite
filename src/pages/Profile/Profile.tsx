import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { fireStoreDB, auth, storage } from "../../firebase";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import style from "./Profile.module.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ThemeContext } from "../../context/AppContext";
import DeleteAccount from "../../components/Buttons/DeleteAccount";
import UpdateProfileForm from "../../components/Forms/UpdateProfileForm/UpdateProfileForm";
import SignOut from "../../components/Buttons/SignOut";
import VerifyEmail from "../../components/Buttons/VerifyEmail";

function Profile() {
  const [userData, setUserData] = useState<DocumentData>([]);
  const { theme } = useContext(ThemeContext);
  const [file, setFile] = useState<File | null>();

  useEffect(() => {
    async function getData() {
      try {
        const docRef = doc(fireStoreDB, "users", `${auth.currentUser?.uid}`);
        const querySnapshot = await getDoc(docRef);
        if (querySnapshot.exists()) {
          setUserData(querySnapshot.data());
        } else {
          console.log("User Data does not exist");
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    const uploadFile = () => {
      if (file) {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, file.name);
        console.log(name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUserData({ ...userData, img: downloadURL });
            });
          }
        );
      } else return;
    };
    file && uploadFile();
  }, [file]);

  return (
    <Layout>
      <section
        className={style.profileContainer}
        style={{
          backgroundColor: theme.primaryColor,
          color: theme.secondaryColor,
        }}
      >
        {auth && (
          <>
            <div className={style.left}>
              <img
                className={style.profileImg}
                src={file ? URL.createObjectURL(file) : userData.img}
              />
              <div> {auth.currentUser?.displayName}</div>
              {auth.currentUser?.emailVerified && <div style={{color:'blue', marginTop: '1rem'}}> Your Email Is Verified</div>}
              <div className={style.buttons}>
                {!auth.currentUser?.emailVerified && <VerifyEmail />}
                <SignOut />
                <DeleteAccount />
              </div>
            </div>
            <div className={style.right}>
              <UpdateProfileForm
                file={file}
                setFile={setFile}
                userData={userData}
                setUserData={setUserData}
              />
            </div>
          </>
        )}
      </section>
    </Layout>
  );
}

export default Profile;
