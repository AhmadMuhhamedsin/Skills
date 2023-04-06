import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import OfferModal from '../Modals/OfferModal';

export default function Offer({ offer, AppState }) {
  const { setAllOffers } = AppState;
  const [selectedOffer, setSelectedOffer] = useState(null);
  const updateSelectedOffer = (offer) => {
    setSelectedOffer(offer);
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        updateSelectedOffer(offer);
        setModalVisible(!modalVisible);
      }}
      style={[styles.noteCont, styles.shadowProp]}
    >
      <Text
        style={{
          fontFamily: 'Mulish_800ExtraBold',
          fontSize: 24,
          color: '#1E1D1D',
        }}
      >
        {offer.author.offerAuthor}
      </Text>
      <Text
        style={{
          fontFamily: 'Mulish_400Regular',
          marginTop: 4,
          fontSize: 14,
        }}
        numberOfLines={1}
      >
        Subject: {offer.subject}, Age: {offer.author.age}
      </Text>
      <Text
        style={{
          fontFamily: 'Mulish_400Regular',
          marginTop: 4,
          fontSize: 14,
        }}
        numberOfLines={1}
      >
        Wednesdays
      </Text>
      {offer === selectedOffer && (
        <OfferModal
          AppState={AppState}
          selectedOffer={offer}
          authorAge={offer.author.age}
          authorBio={offer.author.bio}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </TouchableOpacity>
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
    marginTop: 0,
    flex: 8,
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: 24,
  },
  noteCont: {
    alignItems: 'flex-start',
    marginTop: 16,
    padding: 20,

    borderRadius: 15,
    backgroundColor: '#fff',
    height: 160,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 2 },
    shadowColor: '#171717',
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  welcomeCont: {
    paddingLeft: '3%',
    padding: 20,
  },
  scrollViewCont: {
    marginTop: 0,
    marginBottom: 24,
  },
  itemCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '3%',
    paddingRight: '3%',
    gap: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#DEDEDE',
    paddingLeft: 12,
    paddingRight: 16,
    paddingTop: 11,
    paddingBottom: 8,
    width: 97,
    height: 42,
    color: '#696767',
  },
});
