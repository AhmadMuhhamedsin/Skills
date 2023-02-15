import { View, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function BigButton({AppState, text, bigBfunc}) {
    const {setChosenOfferId, setOfferId, offerId} = AppState

    const newOfferId = offerId + 1;

    const handleCreateOffer = async () => {
    const newOffer = { offerId: newOfferId, offerTitle: '', offerText: '' };

    await AsyncStorage.setItem('@offerId', `${newOfferId}`);
    await setChosenOfferId(newOfferId);
    await setAllOffers((currentOffers) => [newOffer, ...currentOffers]);
    await setOfferId(newOfferId);

    let localOffers = JSON.stringify(allOffers);
    await AsyncStorage.setItem('@offers', localOffers);
  };
  console.log("error")
  return (
    <View style={styles.saveButtonCont}>
    <Pressable style={styles.saveButton} onPress={() => {bigBfunc}}>
      <Text style={styles.saveButtonText}>{text}</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  saveButtonCont: {
    flex: 1,
    width: '100%',
    paddingLeft: '6%',
    paddingRight: '6%',
    marginBottom: 32,
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
