import TransactionTypes from  './transactions.types'
import {createTransaction} from './transactions.utils'

const INITIAL_STATE = {
    transactions : [
        {
            fromAccount : 12345678,
            toAccount : 19283746,
            amount : {
                currency : "€",
                value : 876.88
            },
            sentAt : "2012-04-23T18:25:43.511Z"
        },
        {
            fromAccount : 12345678,
            toAccount : 19283746,
            amount : {
                currency : "€",
                value : 654.88
            },
            sentAt : "2012-04-23T18:25:43.511Z"
        },
        {
            fromAccount : 98765432,
            toAccount : 54321678,
            amount : {
                currency : "$",
                value : 543
            },
            sentAt : "2012-04-23T18:25:43.511Z"
        },
        {
            fromAccount : 98765432,
            toAccount : 54321678,
            amount : {
                currency : "$",
                value : 987.54
            },
            sentAt : "2012-04-23T18:25:43.511Z"
        }
    ]
}

const transactionsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TransactionTypes.CREATE_TRANSACTION:
            return{
                ...state,
                transactions : createTransaction(state.transactions, action.payload)
            }
        default:
            return state;
    }
}

export default transactionsReducer;