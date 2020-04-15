import TransactionTypes from './transactions.types';

export const createTransaction = transfer => ({
    type : TransactionTypes.CREATE_TRANSACTION,
    payload : transfer
})