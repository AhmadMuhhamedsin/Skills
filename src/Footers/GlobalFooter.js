import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function GlobalFooter({ navigation, AppState }) {
  return (
    <View style={styles.footerCont}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={30} color="#FF8888" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CreateOffer')}>
        <Icon name="plus-square-o" size={30} color="#FF8888" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  footerCont: {
    flex: 1,
    marginTop: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 10,
    minHeight: 30,
  },
});
