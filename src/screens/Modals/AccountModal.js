import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  PanResponder,
  Button,
  Pressable,
} from 'react-native';
import MediumButton from '../components/Buttons/MediumButton';
import { SmallButton } from '../components/Buttons/SmallButton';

export default function AccountModal({ AppState, modalVisible, setModalVisible }) {
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      const { dy } = gestureState;
      // Only set the pan responder if the user has moved more than 10 pixels
      // vertically, to avoid triggering it accidentally
      if (dy > 10 || dy < -10) {
        return true;
      }
      return false;
    },
    onPanResponderMove: (evt, gestureState) => {
      const { dy } = gestureState;
      if (dy > 0) {
        // The user is swiping down, so close the modal
        setModalVisible(false);
      }
    },
  });

  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.modalContainer} {...panResponder.panHandlers}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.titleContainer}>
              <Text style={{ marginTop: 10, color: 'black', fontSize: 20 }}>My profile</Text>
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.detailsInfo}>
                <View>
                  <Text style={{ color: 'black', fontSize: 16 }}>My name</Text>
                  <Text>age,bio</Text>
                </View>

                <View style={styles.doubleButton}>
                <MediumButton text="Change password"/>
                <MediumButton text="Edit profile"/>
                </View>
              </View>

              <View>
                <Image source={require('../../assets/images/profilepicture.png')} />
              </View>
            </View>
            <Separator />

            <View>
              <Text style={styles.listingTitle}>My active listings</Text>

              <View style={styles.activeListing}>
                <Text>Offer 1</Text>

                <SmallButton text="Link"/>
              </View>
              <View style={styles.activeListing}>
                <Text>Offer 2</Text>
                <SmallButton text="Link"/>
              </View>
              <View style={styles.activeListing}>
                <Text>Offer 3</Text>
                <SmallButton text="Link"/>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '100%',
    height: '70%',
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: 'gray',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    padding: 20,
  },
  detailsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  detailsInfo: {
    justifyContent: 'space-between',
  },
  activeListing: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    alignContent: 'space-around',
    paddingLeft: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  doubleButton: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  listingTitle: {
    fontSize: 16,
  },
});
