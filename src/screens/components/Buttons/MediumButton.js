import { View, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

export const MediumButton = ({ text, medBfunc }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={() => medBfunc()}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default MediumButton;

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    backgroundColor: '#CF6F5A',
    padding: 4,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#171717',
    shadowOpacity: 0.05,
    shadowRadius: 1,
    width: '30%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
