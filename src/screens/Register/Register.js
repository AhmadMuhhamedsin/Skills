import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native';

const Register = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}> REGISTER </Text>
      <View>
        <TextInput placeholder="Username" style={styles.inputStyle} />
        <TextInput placeholder="Email" style={styles.inputStyle} />
        <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputStyle} />
        <TextInput secureTextEntry={true} placeholder="Confirm Password" style={styles.inputStyle} />
        <Button title="Register" color="#DB9483" onPress={() => handlePress()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8f1',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  formLabel: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#F4F3EC',
  },
});

export default Register;
