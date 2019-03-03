import {combineReducers} from 'redux'
import userReducer from './user'
import contactReducer from './contact'

const reducer = combineReducers({
    userReducer,
    contactReducer,
  })
  
  export default reducer