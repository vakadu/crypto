import { combineReducers } from 'redux';
import CoinsReducer from './reducer_coins';

const rootReducer = combineReducers({
    coins: CoinsReducer
});

export default rootReducer;
