import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert, Pressable, Image, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import validateRegister from './validateRegister';
import validator from 'validator';
import { registerUser } from '../../services/authService';
import mime from 'mime';

import MediumButton from '../components/Buttons/MediumButton';
const Register = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [yearBorn, setYearBorn] = useState('1990');
  const [image, setImage] = useState('');

  async function _pickImage() {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.size < 10000000) {
      switch (result.mimeType) {
        case 'image/jpeg':
        case 'image/png':
        case 'image/jpg':
          setImage(result);
          break;
        default: {
          Alert.alert(
            'Please select an image file (.jpg, .png, jpeg), you tried to attach a ' + result.mimeType + ' file'
          );
        }
      }
    } else {
      Alert.alert('Please select an image file less than 10MB, your file is ' + result.size / 1000000 + 'MB');
    }
  }


  async function register() {
    const formData = new FormData();
    console.log(image.mimeType);
    formData.append('email', email.toString());
    formData.append('password', password === confirmPassword ? password.toString() : null);
    formData.append('bio', bio.toString());
    formData.append('yearBorn', yearBorn);
    formData.append('name', fullName.toString());
    formData.append('file', {
      uri: image.uri,
      type: image.mimeType,
      name: image.name,
    });
    console.log(formData);
    try {
      const response = await fetch('http://172.20.10.99:3001/api/auth/register', {
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: formData,
      });
      response && alert('User registered successfully');
    } catch (err) {
      console.log(err);
      alert('Error registering, please try again');
    }
    navigation.navigate('Home')
  }

  const handleRegister = async (e) => {
    console.log('register');
    try {
      const validate = await validateRegister(email, password, confirmPassword, bio, fullName, yearBorn, image);
      validate ? Alert.alert(validate) : register();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.formLabel}> REGISTER </Text>
      <Text style={{ fontSize: 12 }}> All fields are required. </Text>
      <View style={{ margin: 10 }}>
        <TextInput value={email} name="email" placeholder="Email" style={styles.inputStyle} onChangeText={setEmail} />
        <TextInput
          value={fullName}
          name="fullName"
          placeholder="Full Name"
          style={styles.inputStyle}
          onChangeText={setFullName}
        />
        <TextInput
          value={yearBorn}
          name="yearBorn"
          placeholder="Year of birth"
          style={styles.inputStyle}
          onChangeText={setYearBorn}
        />
        <TextInput value={bio} name="bio" placeholder="Bio" style={styles.inputStyle} onChangeText={setBio} />
        <TextInput
          value={password}
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
          onChangeText={setPassword}
        />
        <TextInput
          value={confirmPassword}
          name="confirmPassword"
          secureTextEntry={true}
          placeholder="Confirm Password"
          style={styles.inputStyle}
          onChangeText={setConfirmPassword}
        />
        {image && <Image source={image} style={styles.imageStyle} resizeMode="contain" />}
        <Pressable onPress={_pickImage} title="Choose a picture">
          <Text style={styles.pictureInputStyle}>Choose a picture</Text>
        </Pressable>
      </View>

      <MediumButton text="Register" medBfunc={() => handleRegister()} />

    </ScrollView>
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
    fontSize: 32,
    fontWeight: 'bold',
  },
  inputStyle: {
    margin: 10,
    width: 300,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#F4F3EC',
    textAlign: 'center',
    justifyContent: 'center',
  },
  pictureInputStyle: {
    color: '#DB9483',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
  },
  imageStyle: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});

export default Register;
