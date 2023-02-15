import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import GlobalHeader from '../../Headers/GlobalHeader';
import GlobalFooter from '../../Footers/GlobalFooter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BigButton from '../components/Buttons/BigButton';
//import BigButton from '../components/Buttons/BigButton';

export default function CreateOffer({ navigation, AppState, selectedOffer, authorAge, authorBio }) {
  const { allOffers, setAllOffers, chosenOfferId } = AppState;
  const [offerTitle, setOfferTitle] = useState('');
  const [offerText, setOfferText] = useState('');

  let allOffersCopy = allOffers;
  let objIndex = allOffers.findIndex((obj) => obj.offerId == chosenOfferId);
  //Log object to Console.
  console.log('Chosen offer object: ', allOffers[objIndex]);
  useEffect(() => {
    handleUpdate();
  },[]);

  const handleUpdate = async () => {
    console.log('Before update: ', allOffers[objIndex]);
    allOffersCopy[objIndex].offerTitle = offerTitle;
    allOffersCopy[objIndex].offerText = offerText;
    //Log object to console again.
    console.log('After update: ', allOffersCopy[objIndex]);
    await setAllOffers(allOffersCopy);

    let localOffers = JSON.stringify(allOffers);
    await AsyncStorage.setItem('@offers', localOffers);
  };
  const handleOfferTextUpdate = async (text) => {
    //Log object to Console.

    await setAllOffers(allOffersCopy);

    let localOffers = JSON.stringify(allOffers);
    await AsyncStorage.setItem('@offers', localOffers);
  };
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
        <BigButton AppState={AppState} text="SAVE"/>
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
  }
});
