import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert, TouchableOpacity, AsyncStorage } from 'react-native';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
      navigation.navigate("Welcome");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.inputStyle}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputStyle}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
       <TextInput
        placeholder="Confirm Password"
        style={styles.inputStyle}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity
        style={{ backgroundColor: "lightgray", padding: 10, marginTop: 10 }}
        onPress={handleRegister}
      >
        <Text>Register</Text>
      </TouchableOpacity>
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
