import React from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';

export default function Dropdown({ defaultText, listItems, onSelectAction, index }) {
  return (
    <SelectDropdown
      buttonStyle={styles.item}
      buttonTextStyle={styles.dropdownBtnTxtStyle}
      defaultButtonText={defaultText}
      renderDropdownIcon={(isOpened) => {
        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'gray'} size={18} />;
      }}
      data={listItems}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
        {
          onSelectAction(index);
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#DEDEDE',
    paddingLeft: 12,
    paddingRight: 16,
    paddingTop: 11,
    paddingBottom: 8,
    width: '50%',
    height: 42,
    color: '#696767',
  },
  dropdownBtnTxtStyle: { color: 'gray', fontWeight: 'bold', textAlign: 'left', fontSize: 14 },
});
