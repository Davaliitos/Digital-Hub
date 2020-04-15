import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import balanceReducer from './balance/balance.reducer';
import transactionsReducer from './transactions/transactions.reducer';

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    balance : balanceReducer,
    transactions : transactionsReducer
})

export default persistReducer(persistConfig,rootReducer);