import { takeLatest, call, put, all } from 'redux-saga/effects';
import ItemsBought  from './items_bought.types'
import { addCollectionAndDocuments } from '../../firebase/firebase.utils'
import { fireDatabase } from '../../firebase/firebase.utils';
import { fetchBoughtItemsAsync } from './items_boughtUtils'

export function* fetchBoughtItems({ payload }) {
    yield fetchBoughtItemsAsync(payload);
}

export function* getBoughtItems(){
    yield takeLatest(ItemsBought.GET_BOUGHT, fetchBoughtItems)
}

export function* itemsBoughtSagas(){
    yield all([ call(getBoughtItems) ]);
}