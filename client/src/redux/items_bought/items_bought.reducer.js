import ItemsBoughtTypes from './items_bought.types'

const INITIAL_STATE = [];

const ItemsBoughtReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ItemsBoughtTypes.SET_CURRENT_BUYINGS:
            break;
        case ItemsBoughtTypes.FINISHED_FETCH_BOUGHT:  
            return action.payload;
        default: return state;
    }
}

export default ItemsBoughtReducer;
