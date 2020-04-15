import BalanceTypes from './balance.types';
import { addMoney, removeMoney } from './balance.utils';

const INITIAL_STATE = {
    balance : [
        {
            account : 12345678,
            balance : {
                currency : "€",
                value : 765095.54
            },
            owner : 7612333392,
            createdAt : "2012-04-23T18:25:43.511Z"
        },
        {
            account : 98765432,
            balance : {
                currency : "$",
                value: 524323.54
            },
            owner: 7612333392,
            createdAt : "2012-04-23T18:25:43.511Z"
        }
    ]
}

const balanceReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case BalanceTypes.ADD_MONEY:
            return {
                ...state,
                balance : addMoney(state.balance,action.payload)
            }
        case BalanceTypes.REMOVE_MONEY:
            return {
                ...state,
                balance : removeMoney(state.balance, action.payload)
            }
        default:
            return state;
    }
}

export default balanceReducer;