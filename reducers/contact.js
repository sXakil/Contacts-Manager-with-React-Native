import {UPDATE_CONTACT} from '../actions'


const contactReducer = (state = [], action) => {
    if (action.type === UPDATE_CONTACT) return [...state, action.payload]
    return state
}

export default contactReducer
