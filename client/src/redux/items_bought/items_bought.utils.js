import { firestore, addCollectionAndDocuments } from '../../firebase/firebase.utils';

export const fetchBoughtItemsAsync = async () => {
    try {
        const ItemsBoughtRef = await firestore
            .collection("items_bought")
            .get();

        return ItemsBoughtRef.docs.map((doc) => doc.data());
      } catch (error) {
          console.log(error);
        //yield put(fetchCollectionsFailure(error.message));
      }
}

export const addNewBoughtAsync = async ({ payload: { userId, cartItem } }) => {
    try{
        const collectionRef = firestore.collection('items_bought');
  
        const batch = firestore.batch();
        
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, { userId, cartItem });
      
        return await batch.commit();
    } catch (err){
        console.log(err);
    }
  };