import React, {
	Component
} from 'react'
import {
	createAppContainer,
	createStackNavigator,
	createBottomTabNavigator,
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Provider} from 'react-redux'
import store from './store'
import ContactsListScreen from './screens/ContactsListScreen'
import AddContactScreen from './screens/AddContactScreen'
import EditContactScreen from './screens/EditContactScreen'
import ViewDetailsScreen from './screens/ViewDetailsScreen'
import SettingsScreen from'./screens/SettingsScreen'
import contacts from './ContactsGenerator'

const MainStack = createStackNavigator({
	ContactsListScreen,
	AddContactScreen,
	EditContactScreen,
	ViewDetailsScreen,
}, {
	initialRouteName: 'ContactsListScreen'
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
	  	SettingsScreen,
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