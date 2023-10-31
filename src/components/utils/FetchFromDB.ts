import { collection, getDocs } from "firebase/firestore";
import { fireStoreDB } from "../../firebase";

async function FetchFromDB(collectionName: string) {
  try {
    const querySnapshot = await getDocs(
      collection(fireStoreDB, collectionName)
    );
    const dataFromSnapshot = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
    return dataFromSnapshot;
  } catch (error) {
    console.log(error);
    throw error
  }
}

export default FetchFromDB;
