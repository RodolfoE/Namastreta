import { takeLatest, call, put, all } from 'redux-saga/effects';
import ItemsBought  from './items_bought.types'
import { addCollectionAndDocuments } from '../../firebase/firebase.utils'
import { fireDatabase } from '../../firebase/firebase.utils';
import { fetchBoughtItemsAsync, addNewBoughtAsync } from './items_bought.utils';

import { finishedBoughtItems } from './items_bought.actions';

export function* fetchBoughtItems({ payload }) {
    const fetchedItems = yield call(fetchBoughtItemsAsync, payload)
    yield put(finishedBoughtItems(fetchedItems))
}

export function* getBoughtItems(){
    yield takeLatest(ItemsBought.GET_BOUGHT, fetchBoughtItems)
}

export function* addBoughtItem() {
    yield takeLatest(ItemsBought.ADD_NEW_BOUGHT, addNewBoughtAsync)
}

export function* itemsBoughtSagas(){
    yield all([
        call(getBoughtItems),
        call(addBoughtItem)
    ]);
}