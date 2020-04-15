import { createSelector } from 'reselect';

const selectTransactions = state => state.transactions;

export const selectAllTransactions = createSelector(
    [selectTransactions],
    transaction => transaction.transactions
)

export const selectTransactionPerAccount = createSelector(
    [selectAllTransactions],
    transactions => transactions.reduce((accumulatedValue, transaction) => {
        if(accumulatedValue[transaction.toAccount]){
            accumulatedValue[transaction.toAccount.toString()] += transaction.amount.value;
        }
        else{
            accumulatedValue[transaction.toAccount.toString()] = transaction.amount.value;
        }
        return accumulatedValue;
    },{})
)