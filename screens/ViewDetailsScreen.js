import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class ViewDetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.getParam('name'),
        headerTintColor: 'grey',
    })
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
        }
    }
    multiply = () => {
        this.setState({count: this.state.count * 2,})
    }
    render() {
        return (
            <View>
                <Text>{this.props.navigation.getParam('phone')}</Text>
                <View style={styles.button}>
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