import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default class NewContact extends Component {
    static navigationOptions = {
        headerTitle: 'Add Contact',
        headerTintColor: 'teal',
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
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.button}>
                <Button onPress={this.increment} title={"" + this.state.count}/>
                <Button title={"Edit Contact"} onPress={() => this.props.navigation.navigate('EditContact')} />
                <Button title={"Contact Details"} onPress={() => this.props.navigation.navigate('ViewDetails')} />
            </View>
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