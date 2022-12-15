import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import GlobalHeader from "../../Headers/GlobalHeader";
import GlobalFooter from "../../Footers/GlobalFooter";
export default function CreateOffer({ navigation, AppState }) {
    const { allOffers, setAllOffers } = AppState;
    const [offerTitle, setOfferTitle] = useState('');
    const [offerText, setOfferText] = useState('');
    
    return (
        <View style={styles.screen}>
            <GlobalHeader navigation={navigation}/>
           
            <View style={styles.body}>
                <ScrollView
                        contentContainerStyle={styles.scrollViewCont}
                        style={styles.scrollView}
                        
                    >
                    <View style={styles.welcomeCont}>
                        <Text style={{
                            fontFamily: 'Mulish_800ExtraBold',
                        }}>Tere, saabusid Create lehele.</Text>
                        <Text style={{
                            marginTop: 8,
                            fontFamily: 'Mulish_400Regular',
                        }}>Siin saad koostada oma enda postituse</Text>
                    </View>
                    <View style={styles.createCont}>
                        <TextInput
                            style={{fontFamily: 'Mulish_800ExtraBold', fontSize: 32}}
                            value={offerTitle}
                            placeholder={'Postituse pealkiri'}
                            onChangeText={setOffertTitle}
                        >
                        </TextInput>
                        <TextInput
                            style={{fontFamily: 'Mulish_400Regular', fontSize: 24, marginTop: 16}}
                            value={offerText}
                            placeholder={'Offerituse sisu'}
                            onChangeText={setOfferText}
                            multiline={true}
                        >
                        </TextInput>
                    </View>
                </ScrollView>
            </View>
            <GlobalFooter AppState={AppState} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#D7DDEC'
    },
    body: {
        flex: 8,
        width: '100%',
        paddingLeft:'6%',
        paddingRight:'6%',
    },
    button: {
        margin: 20,
        padding: 20,
        borderWidth: 2
    },
    scrollViewCont:{
        marginTop: 24,
        marginBottom: 24
    },
    welcomeCont:{
        paddingLeft:'6%',
        padding:20,      
    },
    createCont:{
        paddingLeft:'6%',
        padding:20,
    }
})