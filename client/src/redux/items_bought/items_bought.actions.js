import ItemsBought from './items_bought.types'

export const addBoughtItem = (userId, items) => ({
    type: ItemsBought.ADD_NEW_BOUGHT,
    payload: {userId, items}
});

export const boughtItem = (userId) => ({
    type: ItemsBought.GET_BOUGHT,
    payload: userId
});