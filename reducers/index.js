import {combineReducers} from 'redux'
import user from './user'
import contacts from './contact'

const reducer = combineReducers({
    user,
    contacts,
  })
  
  export default reducer