import ItemsBought from './items_bought.types'

export const addBoughtItem = (userId, cartItem) => ({
    type: ItemsBought.ADD_NEW_BOUGHT,
    payload: {userId, cartItem}
});

export const boughtItem = () => ({
    type: ItemsBought.GET_BOUGHT
});

export const finishedBoughtItems = (boughtItems) => ({
    type: ItemsBought.FINISHED_FETCH_BOUGHT,
    payload: boughtItems
});