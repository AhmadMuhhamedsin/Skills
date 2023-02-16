import { View, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function BigButton({ text, bigBfunc}) {
  return (
    <View style={styles.saveButtonCont}>
      <Pressable style={styles.saveButton} onPress={() => bigBfunc()}>
        <Text style={styles.saveButtonText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  saveButtonCont: {
    flex: 1,
    width: '100%',
    paddingLeft: '6%',
    paddingRight: '6%',
    marginBottom: 32,
    alignItems: 'center',
  },
  saveButton: {
    position: 'absolute',
    backgroundColor: '#CF6F5A',
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#171717',
    shadowOpacity: 0.05,
    shadowRadius: 1,
    width: '100%',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
