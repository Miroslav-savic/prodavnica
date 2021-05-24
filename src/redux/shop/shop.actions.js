import ShopActionTypes from './shop.types.js'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util'; 

export const fetchCollectionsStart = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fecthCollctionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        console.log('NEMA SAGE');
        dispatch(fetchCollectionsStart());
        console.log(collectionRef);

        collectionRef.get().then(snapshot => {
           const collectionMap =  convertCollectionsSnapshotToMap(snapshot);
           dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(error => dispatch(fecthCollctionsFailure(error.message)))
    }
}