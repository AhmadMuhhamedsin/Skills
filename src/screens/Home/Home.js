import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import GlobalFooter from '../../Footers/GlobalFooter';
import GlobalHeader from '../../Headers/GlobalHeader';
import Dropdown from '../components/Dropdown';
import Offer from '../components/Offer';
export default function Home({  navigation, AppState }) {
  const { allOffers,  } = AppState;

  useIsFocused();
  const [selectedOffer, setSelectedOffer] = useState(null);
  const updateSelectedOffer = (offer) => {
    setSelectedOffer(offer);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const [categoryId, setCategoryId] = useState(0);
  const subjects = ['Subject', 'Math', 'Science', 'English'];
  const sorting = ['Sorting', 'Newest', 'Oldest', 'A-Z', 'Z-A'];
  
  return (
    <View style={styles.screen}>
      <GlobalHeader navigation={navigation} />
      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollViewCont} style={styles.scrollView} nestedScrollEnabled={true}>
          <View style={styles.welcomeCont}>
            <Text style={{ fontSize: 32 }}>Offers</Text>
            <Text
              style={{
                marginTop: 8,
                color: '#7C7C7C',
                fontSize: 16,
              }}
            >
              Search for tutoring on specific subjects.
            </Text>
          </View>

          <View style={styles.itemCont}>
            <Dropdown defaultText={'Subject'} listItems={subjects} onSelectAction={(index) => setCategoryId(index)}/>
            <Dropdown defaultText={'Sorting'} listItems={sorting} />
          </View>

          {allOffers.map((offer, index) => {
            return (
              <TouchableOpacity>
                <Offer offer={offer} key={index} AppState={AppState}/>
              </TouchableOpacity>
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
    shadowColor: '#17717',
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
    width: '50%',
    height: 42,
    color: '#696767',
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdownBtnTxtStyle: { color: 'gray', fontWeight: 'bold', textAlign: 'left', fontSize: 14 },
});
