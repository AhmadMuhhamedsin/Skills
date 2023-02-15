import React from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MediumButton from '../components/Buttons/MediumButton';

export default function Welcome({ navigation }) {

  const navigateHome = () => {
    navigation.navigate('Home');
  };
  
  const navigateRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.titleText}>Sign in or make an account below </Text>
      <TextInput style={styles.box} placeholder="Email" />
      <TextInput style={styles.box} placeholder="Password" />
      <TouchableOpacity style={styles.registerOpt}>
        <Text onPress={() => navigateRegister()}>Register</Text>
      </TouchableOpacity>
      <MediumButton text="Go" medBfunc={navigateHome}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F1',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginLeft: 24,
    marginTop: 58,
  },
  titleText: {
    marginLeft: 24,
    marginBottom: 71,
  },
  box: {
    width: 250,
    height: 40,
    backgroundColor: '#F4F3EC',
    marginLeft: 70,
    marginTop: 16,
    borderRadius: 10,
  },
  registerOpt: {
    marginTop: 16,
    marginLeft: 70,
    marginBottom: 20,
    color: '#7C7C7C',
  },
});
