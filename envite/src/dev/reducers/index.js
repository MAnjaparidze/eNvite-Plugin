import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import GroupReducer from './reducer-groups';

const allReducers = combineReducers({
    users: UserReducer,
    groups: GroupReducer
})

export default allReducers;