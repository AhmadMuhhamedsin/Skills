import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import GlobalFooter from '../../Footers/GlobalFooter';
import GlobalHeader from '../../Headers/GlobalHeader';
import { FontAwesome } from '@expo/vector-icons';

export default function Offer({ navigation, AppState }) {
  const { offer } = AppState;
  return (
    <View style={styles.screen}>
      <GlobalHeader navigation={navigation} />
      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollViewCont} style={styles.scrollView}>
          <View style={styles.welcomeCont}>
            <Text
              style={{
                fontFamily: 'Mulish_800ExtraBold',
              }}
            >
              Tere, saabusid detailide lehele.
            </Text>
            <Text
              style={{
                marginTop: 8,
                fontFamily: 'Mulish_400Regular',
              }}
            >
              Siin saad vaadata tervet postitust
            </Text>
          </View>
          <View style={styles.detailsCont}>
            <View style={styles.imageCont}>
              <Image
                style={{
                  height: 100,
                  width: '100%',
                  borderTopLeftRadius: 11,
                  borderTopRightRadius: 11,
                }}
                source={require('../../assets/images/travel1.jpg')}
              />
            </View>
            <View style={styles.postTitleAndTextCont}>
              <Text
                style={{
                  fontFamily: 'Mulish_800ExtraBold',
                  textAlign: 'center',
                }}
              >
                {offer.offerTitle}
              </Text>
              <Text
                style={{
                  fontFamily: 'Mulish_400Regular',
                  textAlign: 'center',
                  marginTop: 32,
                }}
              >
                {offer.offerText}
              </Text>
            </View>
            <View style={styles.commentAndIconCont}>
              <View style="icon">
                <FontAwesome name="comment" size={24} color="#FF8888" />
              </View>
              <View style="comment">
                <TextInput
                  style={{ fontFamily: 'Mulish_400Regular', fontSize: 24 }}
                  placeholder={'Kommenteeri'}
                ></TextInput>
              </View>
            </View>
          </View>
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
    backgroundColor: '#D7DDEC',
  },
  body: {
    flex: 8,
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  scrollViewCont: {
    marginTop: 24,
    marginBottom: 32,
  },
  welcomeCont: {
    paddingLeft: '5%',
    padding: 20,
  },
  detailsCont: {
    margin: 24,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    height: 425,
  },
  commentAndIconCont: {
    flex: 1,
    width: '100%',
    padding: 15,
    borderWidth: 0,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    flex: 2,
    width: '100%',
    margin: 'auto',
  },
  comment: {
    flex: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageCont: {
    flex: 1,
    width: '100%',
    marginBottom: 16,
  },
  postTitleAndTextCont: {
    flex: 8,
    width: '100%',
    marginTop: 32,
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
