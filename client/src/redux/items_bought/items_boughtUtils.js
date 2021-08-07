import { firestore, addCollectionAndDocuments } from '../../firebase/firebase.utils';

export const fetchBoughtItemsAsync = async (userId) => {
    try {
        const ItemsBoughtRef = firestore.collection("items_bought");
        var resposta = await ItemsBoughtRef.where("UserId", "==", userId + '').get();
        resposta.docs.map((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
      } catch (error) {
          console.log(error);
        //yield put(fetchCollectionsFailure(error.message));
      }
}

export const addNewBoughtAsync = async(payload) => {
    try{
        payload = payload;
        //addCollectionAndDocuments('items_bought', obj);
    } catch (error){

    }
}