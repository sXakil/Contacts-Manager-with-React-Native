import shortid from 'shortid'
// action types
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'

// action creators
export const updateUser = payload => {
  payload.key = shortid.generate()
  return {
    type: UPDATE_CONTACT,
    payload,
  }
}

export const addContact = payload => {
  payload.key = shortid.generate()
  return {
    type: UPDATE_CONTACT,
    payload,
  }
}

export const deleteContact = payload => ({
  type: UPDATE_CONTACT,
  payload,
})