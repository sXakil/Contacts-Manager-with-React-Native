import {createStore} from 'redux'
import {addContact} from './actions'
import reducers from './reducers'

const store = createStore(reducers)

/* seed initial data */
store.dispatch(addContact({name: 'Shakil Ahmed', phone: '5446521956'}))
store.dispatch(addContact({name: 'Jordan Hayashi', phone: '5328315496'}))
store.dispatch(addContact({name: 'David Cameroon', phone: '5050505050'}))
console.log(store.getState())

export default store
