import { createSelector } from 'reselect';

const selectUser = state => state.itemsBought;

export const selectItemsBought = createSelector(
  [selectUser],
  (itemsBought) => itemsBought
);
