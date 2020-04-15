import moment from 'moment'

export const createTransaction = (transactions, newTransaction) => {
    const {fromAccount, toAccount, amount} = newTransaction;
    const correcTransaction = {
        fromAccount : parseInt(fromAccount),
        amount : {
            currency : '$',
            value : parseFloat(amount)
        },
        sentAt : moment().format(),
        toAccount: parseInt(toAccount)
    }

    return [...transactions, correcTransaction]
}