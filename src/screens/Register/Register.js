import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert, Pressable, Image, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import validator from 'validator';
import { registerUser } from '../../services/authService';
import mime from 'mime';
import { SpinnerOverlay } from '../../AppState/AppState'
const Register = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [yearBorn, setYearBorn] = useState('1990');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  let formData = new FormData();


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
    formData.append('File', result);
  }

  const handleRegister = async () => {
    try{
      setIsLoading(true);
      const response = await fetch(process.env.REACT_APP_API_IP + "/api/post/get/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      console.log(await response.json());
      setTimeout(() => {
        setIsLoading(false);
        
      }, 5000);
      
    } catch (error){
      setIsLoading(false);
      console.log(error)
      // alert("Failed to register. Please try again later.");
    }
    navigation.navigate('Home'); 
  }

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
      {isLoading ? <SpinnerOverlay visible={true} /> : <Button title="Register" color="#DB9483" onPress={handleRegister} />}
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
