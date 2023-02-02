import React from "react";
import {
  Button,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Pressable,
} from "react-native";

export default function Welcome({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Home");
  };
  const handlePress2 = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.titleText}>Sign in or make an account below </Text>
      <TextInput style={styles.box} placeholder="Email" />
      <TextInput style={styles.box} placeholder="Password" />
      <TouchableOpacity style={styles.registerOpt}>
        <Text onPress={() => handlePress2()}>Register</Text>
      </TouchableOpacity>
      <View>
        <Pressable style={styles.button} onPress={() => handlePress()}>
          <Text style={styles.buttonText}>Go</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F1",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginLeft: 24,
    marginTop: 58,
  },
  titleText: {
    marginLeft: 24,
    marginBottom: 71,
  },
  box: {
    width: 250,
    height: 40,
    backgroundColor: "#F4F3EC",
    marginLeft: 70,
    marginTop: 16,
    borderRadius: 10,
  },
  registerOpt: {
    marginTop: 16,
    marginLeft: 70,
    marginBottom: 20,
    color: "#7C7C7C",
  },
  nextBox: {
    width: 200,
    height: 40,
    marginLeft: 95,
    marginTop: 16,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "#CF6F5A",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 4,
    padding: 8,
  },
  button: {
    width: 200,
    height: 40,
    marginLeft: 95,
    marginTop: 16,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "#CF6F5A",
  },
});
