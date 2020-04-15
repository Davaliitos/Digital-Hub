import moment from 'moment'

export const createTransaction = (transactions, newTransaction) => {
    const {fromAccount, toAccount, amount} = newTransaction;
    const correcTransaction = {
        fromAccount : fromAccount,
        amount : {
            currency : '$',
            value : amount
        },
        sentAt : moment().format(),
        toAccount: toAccount
    }

    return [...transactions, correcTransaction]
}