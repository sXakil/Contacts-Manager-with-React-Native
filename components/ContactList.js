import React from 'react';
import { TouchableHighlight, View, Text, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const renderSectionHeader = ({ section }) => <Text style={{fontWeight: 'bold', margin: 5}}>{section.title}</Text>;
const SectionListContacts = props => {
	const renderItem = ({ item }) => (
		<ListItem 
			{...item} 
			onContactSelected={contact => props.onContactSelected(contact)}
		/>)
	const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map(letter => ({
      data: contactsByLetter[letter],
      title: letter,
    }));

  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
	  renderSectionHeader={renderSectionHeader}
    />
  );
};

SectionListContacts.propTypes = {
  contacts: PropTypes.array,
};

export default SectionListContacts;
