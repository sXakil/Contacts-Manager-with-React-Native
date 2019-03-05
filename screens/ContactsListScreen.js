import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import SectionListContacts from '../components/ContactList'
import {connect} from 'react-redux'
class ContactListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Contact List',
            headerTintColor: 'teal',
            headerRight: (
                <View style={{paddingEnd: 10}}>
                    <Button
                    onPress={() => navigation.navigate('AddContactScreen')}
                    title="+Add"
                    color="teal"
                    />
                </View>
            ),
            headerStyle: { backgroundColor: '#fdfdfd' },
        }
    }
    render() {
        return (
            <View>
                <SectionListContacts 
                    contacts={this.props.contacts}
                    onContactSelected={contact => this.props.navigation.navigate('ViewDetailsScreen', {
                        phone: contact.phone,
                        name: contact.name,
                    })}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        alignItems: 'stretch',
    }
})

const mapStateToProps = state => ({
    contacts: state.contacts,
  })
  
export default connect(mapStateToProps)(ContactListScreen)