import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import GlobalHeader from '../../Headers/GlobalHeader';
import GlobalFooter from '../../Footers/GlobalFooter';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateOffer({ navigation, AppState, selectedOffer, authorAge, authorBio }) {

  return (
    <View style={styles.screen}>
      <GlobalHeader navigation={navigation} />

      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollViewCont}>
          <View style={styles.welcomeCont}>
            <Text
              style={{
                fontFamily: 'Mulish_800ExtraBold',
                fontSize: 24,
              }}
            >
              Tere, saabusid Create lehele.
            </Text>
            <Text
              style={{
                marginTop: 8,
                fontFamily: 'Mulish_400Regular',
                fontSize: 16,
                color: '#000',
              }}
            >
              Siin saad koostada oma enda postituse
            </Text>
          </View>
          <View style={styles.createCont}>
            <TextInput
              style={{ fontFamily: 'Mulish_800ExtraBold', fontSize: 32 }}
              value={offerTitle}
              placeholder={'Postituse pealkiri'}
              onChangeText={setOfferTitle}
            ></TextInput>
            <TextInput
              style={{ fontFamily: 'Mulish_400Regular', fontSize: 24, marginTop: 16 }}
              value={offerText}
              placeholder={'Postituse sisu'}
              onChangeText={setOfferText}
              multiline={true}
            ></TextInput>
          </View>
        </ScrollView>
      </View>
      <View style={styles.saveButtonCont}>
        <TouchableOpacity style={styles.saveButton} onPress={() => handleCreateOffer()}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
      <GlobalFooter AppState={AppState} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7DDEC',
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
});
