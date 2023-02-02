import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  PanResponder,
  Button
} from "react-native";

export default function OfferModal({
  AppState,
  modalVisible,
  setModalVisible,
  selectedOffer,
  authorAge,
  authorBio,

}) {
  const {offer} = AppState
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

  const Separator = () => <View style={styles.separator} />

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
                <Text style={{marginTop:10, color: 'black', fontSize: 20}}>Contact Requester</Text>
                <Text style={{marginTop:8}}>{selectedOffer.subject}</Text>
            </View>
            <View style={styles.requesterContainer}>
                <View style={styles.requesterInfo}>
                    <Text style={{color: 'black', fontSize: 16}}>Requester Name</Text>
                    <Text>age: {authorAge}, bio: {authorBio}</Text>
                    <View>
                        <Text>Available on {selectedOffer.availableWhen}</Text>
                        <Text>8.00PM</Text>
                    </View>
                </View>
                
                
                <View>
                    <Image 
                     source={require('../../assets/images/profilepicture.png') }/>
                </View>
            </View>
            <Separator/>
            <View style={styles.prerequisitesInfo}>
                
                    <Text>Prerequisites on the subject</Text>
                
                <View>
                    <View>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button  backgroundColor="" color='#fff'   title="Link"/>
                        </View>
                        
                        <View style={styles.button}>
                            <Button  backgroundColor="" color='#fff'   title="Link"/>
                        </View>
                        <View style={styles.button}>
                            <Button  backgroundColor="" color='#fff'   title="Link"/>
                        </View>
                    </View>
                </View>
                
            </View>
            
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalContent: {
    backgroundColor: "white",
    width: "98%",
    height: "50%",
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: "gray",
    borderRadius: 20,
    justifyContent:"center"
  },
  titleContainer:{
    alignItems:'center',
    padding: 20,
    
  },
  requesterContainer: {
    
    justifyContent:'space-between',
    flexDirection: 'row',
  },
  requesterInfo:{
    justifyContent:'space-between',
    
  },
  prerequisitesInfo:{
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems:'center'
  },
  buttonContainer:{
    alignContent:'space-around',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    marginTop: 5,
    backgroundColor: '#CF6F5A',
    borderRadius: 12       
 }
});