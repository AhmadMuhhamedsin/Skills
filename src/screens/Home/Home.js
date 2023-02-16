import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import GlobalFooter from '../../Footers/GlobalFooter';
import GlobalHeader from '../../Headers/GlobalHeader';
import OfferModal from '../Modals/OfferModal';
import Offer from '../components/Offer';
export default function Home({ offer, navigation, AppState }) {
  const { allOffers, setOffer, setAllOffers } = AppState;

  useIsFocused();
  const [selectedOffer, setSelectedOffer] = useState(null);
  const updateSelectedOffer = (offer) => {
    setSelectedOffer(offer);
  };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.screen}>
      <GlobalHeader navigation={navigation} />
      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollViewCont} style={styles.scrollView}>
          <View style={styles.welcomeCont}>
            <Text
              style={{
                fontFamily: 'Mulish_800ExtraBold',
                fontSize: 32,
              }}
            >
              Offers
            </Text>
            <Text
              style={{
                marginTop: 8,
                fontFamily: 'Mulish_500Medium',
                color: '#7C7C7C',
                fontSize: 16,
              }}
            >
              Search for tutoring on specific subjects.
            </Text>
          </View>

          <View style={styles.itemCont}>
            <TouchableOpacity>
              <View style={styles.item}>
                <Text
                  style={{
                    fontFamily: 'Mulish_600SemiBold,',
                    fontSize: 14,
                    color: '#565656',
                  }}
                >
                  Subject
                </Text>
                <Image style={styles.logo} source={require('../../assets/images/arrowdown.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.item}>
                <Text
                  style={{
                    fontFamily: 'Mulish_600SemiBold,',
                    fontSize: 14,
                    color: '#565656',
                  }}
                >
                  Dates
                </Text>
                <Image style={styles.logo} source={require('../../assets/images/arrowdown.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.item}>
                <Text
                  style={{
                    fontFamily: 'Mulish_600SemiBold,',
                    fontSize: 16,
                    color: '#565656',
                  }}
                >
                  Sorting
                </Text>
                <Image style={styles.logo} source={require('../../assets/images/arrowdown.png')} />
              </View>
            </TouchableOpacity>
          </View>

          {allOffers.map((offer, index) => {
            return (
              <Offer offer={offer} key={index} AppState={AppState}/>
            );
          })}
        </ScrollView>
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