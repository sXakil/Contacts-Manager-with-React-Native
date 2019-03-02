import React, {
	Component
} from 'react'
import {
	createAppContainer,
	createStackNavigator
} from 'react-navigation'
import ShowContacts from './screens/ShowContacts'
import AddContact from './screens/AddNewContact'
import EditContact from './screens/EditContact'
import ViewDetails from './screens/ViewDetails'
import contacts from './ContactsGenerator'

const MainStack = createStackNavigator({
	ShowContacts,
	AddContact,
	EditContact,
	ViewDetails,
}, {
	initialRouteName: 'ShowContacts'
})
const AppContainer = createAppContainer(MainStack);

export default class App extends Component {
	state = {
		contacts
	};

	addContact = newContact => {
		this.setState(prevState => ({
			contacts: [...prevState.contacts, newContact]
		}));
	};
	render() {
		return ( <
			AppContainer screenProps = {
				{
					contacts: this.state.contacts,
					addContact: this.addContact,
				}
			}
			/>
		)
	}
}