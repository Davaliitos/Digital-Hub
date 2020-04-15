import { createSelector } from 'reselect';
import moment from 'moment'

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

export const selectTransactionHistoryPerAccount = createSelector(
    [selectAllTransactions],
    transactions => transactions.reduce((accumulatedValue, transaction) => {
        const { toAccount, sentAt, amount} = transaction;
        if(accumulatedValue[transaction.fromAccount]){
            const transfer = {toAccount, amount, sentAt}
            accumulatedValue[transaction.fromAccount].push(transfer)
        }
        else{
            const transactionArray= [{toAccount, amount, sentAt}]
            accumulatedValue[transaction.fromAccount] = transactionArray
        }
        return accumulatedValue
    },{})
)

export const selectLatestTranfer = createSelector(
    [selectAllTransactions],
    transactions => transactions.reduce((accumulatedValue,transaction) => {
        const { fromAccount, sentAt} = transaction;
        if(accumulatedValue[fromAccount]){
            var currentTime = moment(accumulatedValue[fromAccount]);
            var newTime = moment(sentAt);
            var diff = moment.duration(currentTime.diff(newTime));
            if(diff < 0){
                accumulatedValue[fromAccount] = sentAt
            }
        }
        else{
            accumulatedValue[fromAccount] = sentAt
        }
        return accumulatedValue;
    },{})
)