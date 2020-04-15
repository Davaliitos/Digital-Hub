import BalanceTypes from './balance.types';

export const addMoney = transfer => ({
    type: BalanceTypes.ADD_MONEY,
    payload: transfer
})

export const removeMoney = transfer => ({
    type: BalanceTypes.REMOVE_MONEY,
    payload: transfer
})
