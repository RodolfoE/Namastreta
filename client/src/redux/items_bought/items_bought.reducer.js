import ItemsBoughtTypes from './items_bought.types'

const INITIAL_STATE = {
    items: null,
    isFetching: false,
    errorMessage: undefined
};

const ItemsBoughtReducer = (state = INITIAL_STATE, action) => {
    switch(action){
        case ItemsBoughtTypes.SET_CURRENT_BUYINGS:
            break;
        default: return state;
    }
}

export default ItemsBoughtReducer;
