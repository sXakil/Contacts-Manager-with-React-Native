import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import FlatListContacts from '../components/ContactList'

export default class NewContact extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Contact List',
            headerTintColor: 'teal',
            headerRight: (
                <View style={{paddingEnd: 10}}>
                    <Button
                    onPress={() => navigation.navigate('AddContact')}
                    title="+Add"
                    color="teal"
                    />
                </View>
            ),
            headerStyle: { backgroundColor: '#fdfdfd' },
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    increment = () => {
        this.setState({count: this.state.count + 1,})
    }
    render() {
        return (
            <View>
                <FlatListContacts contacts={this.props.screenProps.contacts}/>
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