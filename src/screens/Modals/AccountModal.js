import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Image } from 'react-native';
import { PanResponder } from 'react-native-gesture-handler';
import MediumButton from './MediumButton';
import SmallButton from './SmallButton';
import styles from './styles';
import useFetch from '../components/Fetch';

export default function AccountModal({ AppState, modalVisible, setModalVisible }) {
  const [user, setUser] = useState(null);

  const [listings, setListings] = useState([]);

  const { data: userData, loading: userLoading } = useFetch('/api/user');
  const { data: listingsData, loading: listingsLoading } = useFetch(`/api/listings?userId=${userData?.id}&_sort=createdAt&_order=desc&_limit=3`);

  useEffect(() => {
    setUser(userData);
    setListings(listingsData);
  }, [userData, listingsData]);

  if (userLoading || listingsLoading) {
    return <Spinner />;
  }
  // useEffect(() => {
  //   async function fetchUserData() {
  //     const userResponse = await useFetch('/api/user');
  //     const user = await userResponse.json();
  //     setUser(user);
  
  //     const listingsResponse = await useFetch(`/api/listings?userId=${user.id}&_sort=createdAt&_order=desc&_limit=3`);
  //     const listings = await listingsResponse.json();
  //     setListings(listings);
  //   }
  //   fetchUserData();
  // }, []);



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
            {user && (
              <View style={styles.detailsContainer}>
                <View style={styles.detailsInfo}>
                  <View>
                    <Text style={{ color: 'black', fontSize: 16 }}>{user.name}</Text>
                    <Text>{user.yearBorn}, {user.bio}</Text>
                  </View>

                  <View style={styles.doubleButton}>
                    <MediumButton text="Change password"/>
                    <MediumButton text="Edit profile"/>
                  </View>
                </View>

                <View>
                  <Image source={{ uri: user.avatarUrl }} />
                </View>
              </View>
            )}
            <Separator />
            
            <View>
            <Text style={styles.listingTitle}>My active listings</Text>

              {listings.map((listing) => (
                <View key={listing.id} style={styles.activeListing}>
                  <Text>{listing.title}</Text>
                  <SmallButton text="Link"/>
                </View>
              ))}
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
