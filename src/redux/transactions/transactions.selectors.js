import { createSelector } from 'reselect';

const selectTransactions = state => state.transactions;

export const selectAllTransactions = createSelector(
    [selectTransactions],
    transaction => transaction.transactions
)