import { collection, getDocs, query, where } from "firebase/firestore";
import { fireStoreDB } from "../../firebase";

async function FetchAndFilterFromDB(
  collectionName: string,
  id: string,
  value: string
) {
  try {
    const querySnapshot = await getDocs(
      query(collection(fireStoreDB, collectionName), where(id, "==", value))
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

export default FetchAndFilterFromDB;
