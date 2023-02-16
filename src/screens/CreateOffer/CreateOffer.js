
import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import GlobalHeader from '../../Headers/GlobalHeader';
import GlobalFooter from '../../Footers/GlobalFooter';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import BigButton from '../components/Buttons/BigButton';

const baseUrl = ''; // Jordan pls share

export default function CreateOffer({ navigation, AppState }) {
  const [offerTitle, setOfferTitle] = useState('');
  const [offerText, setOfferText] = useState('');
  const [fileName, setFileName] = useState('no file attached');
  const [file, setFile] = useState(''); // [
  const formData = new FormData();

  let offerData = {
    title: offerTitle,
    description: offerText,
    userId: 1, // Edit this to be dynamic
    createdAt: 'today', // Edit this to be dynamic
    type: 1, // Edit this to be dynamic
    categoryId: 1, // Edit this to be dynamic
  };
  const PublishPost = () => {
    if (offerTitle === '' || offerText === '') {
      alert('Please fill all fields');
      return;
    }
    formData.append('data', JSON.stringify(offerData));
    formData.append('File', file);
    console.log('KOGU FORMDATA MIS SENDI LÄHEB ON: ', formData);
    axios({
      url: baseUrl,
      method: 'POST',
      data: formData,
    });
    alert('Post published!');
    navigation.navigate('Home');
  };

  _pickDocument = async () => {
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
          //formData.append('File', result);
          setFile(result);
          alert('Uploaded file: ' + result.name);
          setFileName(result.name);
        } else {
          alert('File is too big');
        }
      } else {
        alert('File type is not supported');
      }
    }
  };

  return (
    <View style={styles.screen}>
      <GlobalHeader navigation={navigation} />

      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollViewCont}>
          <Text style={styles.welcomeCont}>Here you can make a new post</Text>

          <View style={styles.itemCont}>
            <TouchableOpacity>
              <View style={styles.item}>
                <Text>Choose Subject</Text>
                <Image style={styles.logo} source={require('../../assets/images/arrowdown.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.item}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#565656',
                  }}
                >
                  Choose Type
                </Text>
                <Image style={styles.logo} source={require('../../assets/images/arrowdown.png')} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.createCont}>
            <TextInput
              style={{ fontSize: 32 }}
              value={offerTitle}
              placeholder={'Postituse pealkiri'}
              onChangeText={setOfferTitle}
            ></TextInput>
            <TextInput
              style={{ fontSize: 24, marginTop: 16 }}
              value={offerText}
              placeholder={'Postituse sisu'}
              onChangeText={setOfferText}
              multiline={true}
            ></TextInput>
          </View>
          <View>
            <Pressable style={styles.button} onPress={this._pickDocument}>
              <Text style={styles.buttonText}>Add file (optional)</Text>
            </Pressable>
            <Text>Attached file: {fileName}</Text>
          </View>
        </ScrollView>
      </View>
      <BigButton text="PUBLISH" bigBfunc={PublishPost}/>
      <GlobalFooter AppState={AppState} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF8F1',
  },
  body: {
    flex: 7,
    width: '100%',
    paddingLeft: '6%',
    paddingRight: '6%',
  },
  button: {
    margin: 20,
    padding: 20,
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
    fontFamily: 'Mulish_800ExtraBold',
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
    marginTop: 5,
    backgroundColor: '#CF6F5A',
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 8,
  },
  itemCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: '3%',
    paddingRight: '3%',
    gap: 10,
  },
});
