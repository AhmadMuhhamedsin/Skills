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
} from "react-native";
import Constants from "expo-constants";

export default function AccountModal({
  AppState,
  modalVisible,
  setModalVisible,
}) {
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
            <Text>My profile model</Text>
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
    borderWidth: "1.5",
    alignItems: "center",
  },
});
