import { View, Pressable, Text, StyleSheet } from "react-native";



export const SmallButton = ({text}) => {
  return (
    <View>
      <Pressable style={styles.button} >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    backgroundColor: '#CF6F5A',
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 8,
  },
})
