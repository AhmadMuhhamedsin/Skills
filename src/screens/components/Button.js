import { View, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

export const BigButton = () => 
  <View>
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Go</Text>
    </Pressable>
  </View>


export default BigButton;

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 8,
  },
  button: {
    width: 200,
    height: 40,
    marginLeft: 95,
    marginTop: 16,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#CF6F5A',
  },
});
