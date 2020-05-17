import { combineReducers } from 'redux';
import rootReducer from './slices/transferMoney'

export default combineReducers({
sendMoneyReducer:rootReducer,
});


