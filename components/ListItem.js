import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    row: { padding: 20 },
  });

const ListItem = props => (
    <View style={styles.row}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View>
);

ListItem.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
};

export default ListItem;