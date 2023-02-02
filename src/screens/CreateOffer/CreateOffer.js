import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import GlobalHeader from "../../Headers/GlobalHeader";
import GlobalFooter from "../../Footers/GlobalFooter";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateOffer({
    navigation,
    AppState,
    selectedOffer,
    authorAge,
    authorBio, 
}) {
    const { offerId, setOfferId, allOffers, setAllOffers, chosenOfferId, setChosenOfferId } = AppState;
    const [offerTitle, setOfferTitle] = useState('')
    const [offerText, setOfferText] = useState('')
    
    const newOfferId = offerId + 1;
    let allOffersCopy = allOffers
    let objIndex = allOffers.findIndex((obj => obj.offerId == chosenOfferId));
    //Log object to Console.
    console.log("Chosen offer object: ", allOffers[objIndex])    
    useEffect(() => {
        handleUpdate()
    })
    const handleCreateOffer = async () => {
        const newOffer = {offerId: newOfferId, offerTitle: '', offerText: ''}
        
        await AsyncStorage.setItem('@offerId', `${newOfferId}`);
        await setChosenOfferId(newOfferId)
        await setAllOffers((currentOffers) => [newOffer, ...currentOffers])
        await setOfferId(newOfferId)

        let localOffers = JSON.stringify(allOffers)
        await AsyncStorage.setItem('@offers', localOffers)
    }
    const handleUpdate = async () => {
        
        console.log("Before update: ", allOffers[objIndex])
        allOffersCopy[objIndex].offerTitle = offerTitle
        allOffersCopy[objIndex].offerText = offerText
        //Log object to console again.
        console.log("After update: ", allOffersCopy[objIndex])
        await setAllOffers(allOffersCopy)

        let localOffers = JSON.stringify(allOffers)
        await AsyncStorage.setItem('@offers', localOffers)
    }
    const handleOfferTextUpdate = async (text) => {
        
        //Log object to Console.
        

        await setAllOffers(allOffersCopy)

        let localOffers = JSON.stringify(allOffers)
        await AsyncStorage.setItem('@offers', localOffers)
    }
    return (
        <View style={styles.screen}>
            <GlobalHeader navigation={navigation}/>
           
            <View style={styles.body}>
                <ScrollView
                        contentContainerStyle={styles.scrollViewCont}
                    >
                    <View style={styles.welcomeCont}>
                        <Text style={{
                            fontFamily: 'Mulish_800ExtraBold',
                            fontSize: 24
                        }}>Tere, saabusid Create lehele.</Text>
                        <Text style={{
                            marginTop: 8,
                            fontFamily: 'Mulish_400Regular',
                            fontSize:16,
                            color: '#000'
                        }}>Siin saad koostada oma enda postituse</Text>
                    </View>
                    <View style={styles.createCont}>
                        <TextInput
                            style={{fontFamily: 'Mulish_800ExtraBold', fontSize: 32}}
                            value={offerTitle}
                            placeholder={'Postituse pealkiri'}
                            onChangeText={setOfferTitle}
                        >
                        </TextInput>
                        <TextInput
                            style={{fontFamily: 'Mulish_400Regular', fontSize: 24, marginTop: 16}}
                            value={offerText}
                            placeholder={'Postituse sisu'}
                            onChangeText={setOfferText}
                            multiline={true}
                        >
                        </TextInput>
                    
                    </View>
                </ScrollView>
            </View>
            <View style={styles.saveButtonCont}>
                <TouchableOpacity style={styles.saveButton} onPress={() => handleCreateOffer()}>
                    <Text style={styles.saveButtonText}>SAVE</Text>
                </TouchableOpacity>
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
        flex: 7,
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
        height: '100%',
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
    },
    saveButtonCont:{
        flex:1,
        width:'100%',
        paddingLeft:'6%',
        paddingRight:'6%',
        marginTop: 6,
        alignItems: 'center',
    },
    saveButton:{
        position:"absolute",
        backgroundColor:"#CF6F5A",
        padding: 20,
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: '#171717',  
        shadowOpacity: 0.05,  
        shadowRadius: 1,  
        width:'100%',
    },
    saveButtonText:{
        color: "#fff",
        fontFamily: 'Mulish_800ExtraBold',
        fontSize: 16,
    }
})