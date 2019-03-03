import React, {
	Component
} from 'react'
import {Button} from 'react-native'
import {
	createAppContainer,
	createStackNavigator,
	createBottomTabNavigator,
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Provider} from 'react-redux'
import store from './store'
import ShowContacts from './screens/ShowContacts'
import AddContact from './screens/AddNewContact'
import EditContact from './screens/EditContact'
import ViewDetails from './screens/ViewDetails'
import Settings from'./screens/Settings'
import contacts from './ContactsGenerator'

const MainStack = createStackNavigator({
	ShowContacts,
	AddContact,
	EditContact,
	ViewDetails,
}, {
	initialRouteName: 'ShowContacts'
})

MainStack.navigationOptions = {
	tabBarIcon: ({focused, tintColor}) => (
        <Ionicons 
            name={`ios-radio-button${focused ? '-on' : '-off'}`} 
            size={25} color={tintColor} 
        />
    ),
  }
const MainTabs = createBottomTabNavigator({
	  	Contacts: MainStack,
	  	Settings,
	}, 
	{
		tabBarOptions: {
		activeTintColor: '#a41034',
	  },
	}
  )
const AppContainer = createAppContainer(MainTabs);

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			contacts
		}
		this.addContact = this.addContact.bind(this)
	}

	addContact(newContact) {
		this.setState(prevState => ({
			contacts: [...prevState.contacts, newContact]
		}));
	};
	render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		)
	}
}