import {combineReducers} from 'redux'
import loginReducer from './login'

const rootReducer = combineReducers({
  loginStatus:loginReducer
});

export default rootReducer;