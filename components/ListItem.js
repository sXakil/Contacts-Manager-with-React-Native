import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    row: { padding: 20 },
  });

const ListItem = props => (
    <TouchableOpacity 
        style={styles.row}
        onPress={() => props.onContactSelected(props)}
    >
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </TouchableOpacity>
);

ListItem.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
};

export default ListItem;