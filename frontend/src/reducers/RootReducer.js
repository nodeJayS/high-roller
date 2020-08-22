import { combineReducers } from 'redux';

import betReducer from './BetReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
    bet: betReducer,
    user: userReducer,
});

export default rootReducer;