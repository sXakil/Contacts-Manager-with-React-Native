import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux'
import {addContact} from '../actions'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
});

class AddContactScreen extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.phone !== prevState.phone
    ) {
      this.validateForm();
    }
  }

  getHandler = key => val => {
    this.setState({ [key]: val });
  };

  handleNameChange = this.getHandler('name'); // val => { this.setState({name: val}) }
  handlePhoneChange = this.getHandler('phone');

  handlePhoneChange = phone => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({ phone });
    }
  };

  validateForm = () => {
    console.log(this.state);
    const names = this.state.name.split(' ');
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      names.length >= 2 &&
      names[0] &&
      names[1]
    ) {
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isFormValid: false });
    }
  };

  handleSubmit = () => {
    this.props.addContact({
        name: this.state.name, 
        phone: this.state.phone,
    })
    this.props.navigation.navigate('ShowContacts');
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.getHandler('name')}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.getHandler('phone')}
          placeholder="Phone"
        />
        <Button
          title="Submit"
          onPress={this.handleSubmit}
          disabled={!this.state.isFormValid}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default connect(null, {addContact: addContact})(AddContactScreen)