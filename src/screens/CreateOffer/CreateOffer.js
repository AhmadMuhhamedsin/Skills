import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Button, Image } from "react-native";
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
                    <View style={styles.itemCont}>
                        <TouchableOpacity>
                                <View style={styles.item}>
                                    <Text style={{
                                        fontFamily: 'Mulish_600SemiBold,',
                                        fontSize: 14,
                                        color: "#565656"
                                    }}>Vali Subject</Text>
                                    <Image
                                        style={styles.logo}
                                        source={require('../../assets/images/arrowdown.png')}
                                        
                                    />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                                <View style={styles.item}>
                                    <Text style={{
                                        fontFamily: 'Mulish_600SemiBold,',
                                        fontSize: 14,
                                        color: "#565656"
                                    }}>Type</Text>
                                    <Image
                                        style={styles.logo}
                                        source={require('../../assets/images/arrowdown.png')}
                                        
                                    />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.createCont}>
                        <TextInput
                            style={{fontFamily: 'Mulish_800ExtraBold', fontSize: 26}}
                            value={offerTitle}
                            placeholder={'Postituse pealkiri'}
                            onChangeText={setOfferTitle}
                            multiline={true}
                        >
                        </TextInput>
                        <TextInput
                            style={{fontFamily: 'Mulish_400Regular', fontSize: 20, marginTop: 16}}
                            value={offerText}
                            placeholder={'Postituse sisu'}
                            onChangeText={setOfferText}
                            multiline={true}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <TextInput>

                        </TextInput>
                        <TextInput>

                        </TextInput>
                    </View>
                </ScrollView>
                <View style={styles.postButtonCont}>
                    <Button title='Post' color='#' borderRadius='4' /*onPress= {() => handlePress()}*//>
                </View> 
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
        backgroundColor: '#FAF8F1'
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
    },
    postButtonCont:{
        backgroundColor: '#CF6F5A',
        width: 100,
        height: 40,
        alignSelf: 'flex-end',
        marginBottom: 16,
        borderRadius: 4,
        borderWidth: 1,

    },
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'darkblue',
        paddingLeft: 12,
        paddingRight: 16,
        paddingTop: 11,
        paddingBottom: 8,
        width: 105,
        height: 42,
        color: '#696767',
    },
    itemCont:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingLeft: "3%",
        paddingRight: "3%",
        gap:10,
        marginRight: 75
    }
})