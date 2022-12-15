import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import  Constants  from "expo-constants";

export default function GlobalHeader({ navigation, AppState }) {
    return (
        <View style={styles.headerCont}>
            <View style={styles.iconCont}>
                <TouchableOpacity>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/profile.png')}    
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/search.png')}      
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/notifications.png')}
                        
                    />
                </TouchableOpacity>    
            </View>
            
            {/* <View style={styles.headerText}>
                <Text style={styles.text}>Offers</Text>
                <Text style={{
                    fontFamily: 'Mulish_500Medium',
                    fontSize: 16,
                    color: '#7C7C7C'
                }}>Search for tutoring on specific subjects</Text>
            </View> */}
            
        </View>
    )
}
const styles = StyleSheet.create({
    headerCont: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        marginBottom:0,
        justifyContent: "space-between",
        paddingLeft:'7%',
        paddingRight:'7%',
        alignContent: "center",
        paddingTop: Constants.statusBarHeight
    },
    logo:{
        height:27,
        width: 30
    },
   iconCont: {
    marginTop: 0,
    padding:24,
    marginBottom:0,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignContent: "center",
    width: '100%',
    
   },
})