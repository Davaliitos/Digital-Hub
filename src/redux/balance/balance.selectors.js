import { createSelector } from 'reselect';

const selectBalance = state => state.balance;

export const selectAccountBalance = createSelector(
    [selectBalance],
    balance => balance
)