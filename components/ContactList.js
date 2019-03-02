import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const FlatListContacts = props => (
  <FlatList 
        renderItem={
            ({ item }) => <ListItem {...item} />
        } 
        data={props.contacts}
        keyExtractor = { (item, index) => {
            let i = item.name.charAt(0) + index.toString()
            return i;
        }}
    />
);

FlatListContacts.propTypes = {
  contacts: PropTypes.array,
};

export default FlatListContacts;
