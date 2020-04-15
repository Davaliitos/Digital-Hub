const INITIAL_STATE = {
    balance : [
        {
            account : 123456789,
            balance : {
                currency : "€",
                value : 765095.54
            },
            owner : 7612333392,
            createdAt : "2012-04-23T18:25:43.511Z"
        },
        {
            account : 987654321,
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
        default:
            return state;
    }
}

export default balanceReducer;