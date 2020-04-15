export const addMoney = (balance, newTransaction) => {
    const {toAccount, amount} = newTransaction;

    const existingBalance = balance.find(account => account.account === parseInt(toAccount))


    if(existingBalance){
        balance.forEach(account => {
            if(account.account === parseInt(toAccount)){
                account.balance.value = account.balance.value + parseFloat(amount)
            }
        })
        console.log(balance)
    }

    return [...balance]
}

export const removeMoney = (balance, newTransaction) => {
    const {fromAccount, amount} = newTransaction;

    const existingBalance = balance.find(account => account.account === parseInt(fromAccount))


    if(existingBalance){
        balance.forEach(account => {
            if(account.account === parseInt(fromAccount)){
                account.balance.value = account.balance.value - parseFloat(amount)
            }
        })
        console.log(balance)
    }

    return [...balance]

}