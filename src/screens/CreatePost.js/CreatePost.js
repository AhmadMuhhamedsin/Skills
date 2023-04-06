import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import GlobalHeader from '../../Headers/GlobalHeader';
import GlobalFooter from '../../Footers/GlobalFooter';
import * as DocumentPicker from 'expo-document-picker';
import Dropdown from '../components/Dropdown';
import axios from 'axios';
import BigButton from '../components/Buttons/BigButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseUrl = ''; // Jordan pls share

export default function CreatePost({ navigation, AppState }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [fileName, setFileName] = useState(false);
  const [file, setFile] = useState('');
  const formData = new FormData();
  const [link, setLink] = useState('');
  const [type, setType] = useState(0);
  const [categoryName, setCategoryName] = useState('');

  const types = ['Type', 'Offer', 'Request'];
  const subjects = ['Subject', 'Math', 'Science', 'English'];

  const PublishPost = async () => {
    try {
      formData.append('title', title);
      formData.append('details', details);
      formData.append('type', type);
      formData.append('categoryName', categoryName);
      console.log('file' + formData.file);
      formData.append('file', {
        uri: file.uri,
        type: file.mimeType,
        name: file.name,
      });
      formData.append('link', link);
      console.log(formData);

      const response =
        title && details && type
          ? await fetch('http://172.20.10.10:3001/api/post/create', {
              method: 'post',
              headers: {
                'Content-Type': 'multipart/form-data',
                session_token: `${await AsyncStorage.getItem('session_token')}`,
              },
              body: formData,
            })
          : alert('Please fill the title, details, and type.');
      (await response.status) === 200 && (await navigation.navigate('Home'));
      response.status === 403 && navigation.navigate('Login');
    } catch (error) {
      navigation.navigate('Home');
    }
  };

  async function _pickDocument() {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      if (
        result.mimeType === 'application/vnd.ms-powerpoint' ||
        result.mimeType === 'application/pdf' ||
        result.mimeType === 'application/msword' ||
        result.mimeType === 'image/png' ||
        result.mimeType === 'image/jpeg' ||
        result.mimeType === 'image/jpg'
      ) {
        if (result.size < 10000000) {
          setFile(result);
          console.log('Category ID: ', categoryId);
          console.log('Type: ', type);
          setFileName(result.name);
        } else {
          alert('File is too big');
        }
      } else {
        alert('File type is not supported');
      }
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollViewCont}>
          <Text style={styles.title}>Here you can create a new post. </Text>
          <View style={styles.itemCont}>
            <Dropdown
              defaultText={'Subject'}
              listItems={subjects}
              onSelectAction={(index) => setCategoryName(subjects[index])}
            />
            <View
              style={{
                flexDirection: 'row',
                left: -8,
              }}
            >
              <Pressable
                style={{
                  marginTop: 8,
                  backgroundColor: type === 1 ? '#CF6F5A' : 'dimgray',
                  borderRadius: 12,
                  paddingHorizontal: 4,
                }}
                onPress={() => {
                  setType(1);
                }}
              >
                <Text style={styles.buttonText}>Offer</Text>
              </Pressable>
              <Pressable
                style={{
                  marginTop: 8,
                  backgroundColor: type === 2 ? '#CF6F5A' : 'dimgray',
                  borderRadius: 12,
                  paddingHorizontal: 4,
                  left: 8,
                }}
                onPress={() => {
                  setType(2);
                }}
              >
                <Text style={styles.buttonText}>Request</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.createCont}>
            <TextInput
              style={{ fontSize: 24 }}
              value={title}
              placeholder={'Title'}
              onChangeText={(e) => {
                setTitle(e);
              }}
            ></TextInput>
            <TextInput
              style={{ fontSize: 18, marginTop: 16 }}
              value={details}
              placeholder={'Details'}
              onChangeText={(e) => {
                setDetails(e);
              }}
              multiline={true}
            ></TextInput>
          </View>
        </ScrollView>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
          }}
        >
          <Pressable style={styles.button} onPress={_pickDocument}>
            <Text style={styles.buttonText}>Attach File</Text>
          </Pressable>
          <TextInput
            style={{ fontSize: 16, marginTop: 8, marginLeft: 8 }}
            value={link}
            placeholder={'Insert link'}
            multiline={true}
            onChangeText={(e) => {
              setLink(e);
            }}
          ></TextInput>
        </View>
        <Text style={styles.attachedFile}>{fileName ? fileName : ''}</Text>
      </View>
      <BigButton text="Publish" bigBfunc={PublishPost} />

      <GlobalFooter AppState={AppState} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  attachedFile: {
    marginTop: 4,
    fontSize: 14,
    marginLeft: 4,
    color: 'grey',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF8F1',
  },
  body: {
    top: '7%',
    flex: 7,
    width: '100%',
    paddingLeft: '6%',
    paddingRight: '6%',
  },
  button: {
    padding: 10,
    borderWidth: 2,
  },
  scrollViewCont: {
    height: '100%',
    marginTop: 24,
    marginBottom: 24,
  },
  welcomeCont: {
    paddingLeft: '6%',
    padding: 20,
  },
  createCont: {
    paddingLeft: '6%',
    padding: 20,
  },
  saveButtonCont: {
    flex: 1,
    width: '100%',
    paddingLeft: '6%',
    paddingRight: '6%',
    marginTop: 6,
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'darkblue',
    paddingLeft: 12,
    paddingRight: 16,
    paddingTop: 11,
    paddingBottom: 8,
    width: 130,
    height: 42,
    color: '#696767',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#CF6F5A',
    borderRadius: 12,
    width: '40%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 8,
    marginTop: -2,
  },
  itemCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: '3%',
    paddingRight: '3%',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'semibold',
    marginVertical: 16,
    width: '75%',
    color: 'grey',
    marginLeft: '4%',
    color: 'dimgray',
  },
  typeButton: {
    marginTop: 8,
    backgroundColor: '#CF6F5A',
    borderRadius: 12,
    paddingHorizontal: 4,
  },
});
