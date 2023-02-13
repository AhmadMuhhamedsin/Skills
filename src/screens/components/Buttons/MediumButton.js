import { View, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



export const MediumButton = ({text}) => {
  const navigation = useNavigation();

  const navigateHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigateHome()}>
        {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default MediumButton;

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 2,
    backgroundColor: '#CF6F5A',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
