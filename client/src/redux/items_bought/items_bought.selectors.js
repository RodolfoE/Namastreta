import { createSelector } from 'reselect';

const selectUser = state => state.itemsBought.items_bought;

export const selectItemsBought = createSelector(
  [selectUser],
  items_bought => items_bought
);
