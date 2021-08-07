import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { itemsBoughtSagas } from './items_bought/items_bought.saga';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas), call(itemsBoughtSagas)]);
}
