import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MediumButton from '../components/Buttons/MediumButton';
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePressRegister = () => {
    navigation.navigate('Register');
  };

  //const checkToken = async () => {
  //  const token = await AsyncStorage.getItem('session_token');
  //  token && navigation.navigate('Home');
  //};
  //checkToken();

  const handleLogin = async (email, password) => {
    try {
      console.log('registering');
      const response = await fetch('http://172.20.10.10:3001/api/auth/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      console.log(response);
      console.log(response.headers.get('session_token'));

      response.status === 200 && (await AsyncStorage.setItem('session_token', response.headers.get('session_token')));
      response.status === 200 && (await navigation.navigate('Home'));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.titleText}>Log in or make an account below </Text>
      <TextInput placeholder="Email" style={styles.box} onChangeText={(text) => setEmail(text)} value={email} />
      <TextInput
        placeholder="Password"
        style={styles.box}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.registerOpt}>
        <Text style={{ fontSize: 12, textAlign: 'center', color: 'dimgray' }} onPress={() => handlePressRegister()}>
          Don't have an account?
        </Text>
      </TouchableOpacity>

      <MediumButton text="Log in" medBfunc={() => handleLogin(email, password)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F1',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginLeft: 24,
    marginTop: '20%',
  },
  titleText: {
    marginLeft: 24,
    marginBottom: '25%',
  },
  box: {
    width: 250,
    height: 40,
    backgroundColor: '#F4F3EC',
    marginLeft: 70,
    marginTop: 16,
    borderRadius: 10,
    textAlign: 'center',
  },
  registerOpt: {
    marginVertical: 12,
  },
});
export default Login;
