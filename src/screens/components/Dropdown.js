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
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'lightgray',
    paddingHorizontal: 16,
    backgroundColor: '#FAF8F1',
    width: '40%',
    height: 40,
    top: 2,
    left: 4,
  },
  dropdownBtnTxtStyle: { color: 'dimgray', fontWeight: 'semibold', textAlign: 'left', fontSize: 14 },
});
