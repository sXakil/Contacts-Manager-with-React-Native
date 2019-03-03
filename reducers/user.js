import {UPDATE_USER, UPDATE_CONTACT} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return merge(state, action.payload)
    case UPDATE_CONTACT:
      return merge(state, {prevContact: action.payload})
    default:
      return state
  }
}

export default userReducer
