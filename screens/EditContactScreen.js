import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default class EditContactScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Edit Contact',
        headerTintColor: 'grey',
    }
    constructor(props) {
        super(props)
        this.state = {
            count: 100,
        }
    }
    decrement = () => {
        this.setState({count: this.state.count - 1,})
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.button}>
                    <Button onPress={this.decrement} title={"" + this.state.count}/>
                    <Button title={"Go back"} onPress={() => this.props.navigation.goBack()} />
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