import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import {reducer as formReducer} from 'redux-form';
import AddUserReducer from './reducer_add_user';

const rootReducer = combineReducers({
  users: UsersReducer,
  form: formReducer,
  addUser: AddUserReducer
});

export default rootReducer;
