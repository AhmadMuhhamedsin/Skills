import React, {useState, useEffect} from 'react';
import AppNavigation from '../AppNavigation/AppNavigation';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Mulish_200ExtraLight,
  Mulish_300Light,
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
  Mulish_700Bold,
  Mulish_800ExtraBold,
  Mulish_900Black,
  Mulish_200ExtraLight_Italic,
  Mulish_300Light_Italic,
  Mulish_400Regular_Italic,
  Mulish_500Medium_Italic,
  Mulish_600SemiBold_Italic,
  Mulish_700Bold_Italic,
  Mulish_800ExtraBold_Italic,
  Mulish_900Black_Italic,
} from '@expo-google-fonts/mulish';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AppState(){
    const [offerId, setOfferId] = useState(0)
    const [allOffers, setAllOffers] = useState([
        {
          offerId:1, offerTitle: 'First title', offerText:"Tere, olen Mari ja oskan aidata teid matemaatikaga", availableWhen:"Wednesdays", subject: 'math',
          author: {id:1, offerAuthor: 'Mari', email: 'mari@tptlive.ee', age: 25, bio: "Tere, minu nimi on Mari ja mulle meeldib aidata teisi."}  
          
        },
        { offerId: 2, offerTitle: 'Second title',offerText:"Tere, olen Mark ja oskan aidata teid loodusega",availableWhen:"Tuesdays", subject: 'science',
          author: {id:2, offerAuthor: 'Mark', email: 'mark@tptlive.ee', age: 30, bio: "Tere, minu nimi on Mark ja mulle meeldib aidata teisi."}  
        },
        { offerId: 3, offerTitle: 'Third title',offerText:"Tere, olen Markus ja oskan aidata teid kirjandusega",availableWhen:"Mondays", subject: 'literature',
          author: {id:3, offerAuthor: 'Markus', email: 'markus@tptlive.ee', age: 35, bio: "Tere, minu nimi on Markus ja mulle meeldib aidata teisi."}  
        },
        { offerId: 4, offerTitle: 'Fourth title',offerText:"Tere, olen John ja oskan aidata teid trigonomeetriaga",availableWhen:"Saturdays", subject: 'trigonometry',
          author: {id:4, offerAuthor: 'John', email: 'john@tptlive.ee', age: 40, bio: "Tere, minu nimi on Mari ja mulle meeldib aidata teisi."}  
        },
        { offerId: 5, offerTitle: 'Fifth title',offerText:"Tere, olen Marcc ja oskan aidata teid inglise keelega",availableWhen:"Thursdays", subject: 'english', 
          author: {id:5, offerAuthor: 'Marcc', email: 'marcc@tptlive.ee', age: 45, bio: "Tere, minu nimi on Marcc ja mulle meeldib aidata teisi."}
           
        },
      
    ]);
    const [offer, setOffer] = useState({});
    const [chosenOfferId, setChosenOfferId] = useState(0)
    const AppState = {
        offerId, setOfferId,
        allOffers, setAllOffers,
        offer, setOffer,
        chosenOfferId, setChosenOfferId
    }
    useEffect(async () => {
      try {
        const localOfferId = await AsyncStorage.getItem('@offerId')
        if(localOfferId !== null) {
          setOfferId(Number(localOfferId))
        } else {
            await AsyncStorage.setItem('@offerId', '0');
        }
        const localOffers = await AsyncStorage.getItem('@offers')
        if (localOffers !== null) {
          setAllOffers(JSON.parse(localOffers))
        }
      } catch(e) {
        console.log(e)
      }
    }, [])
    let [fontsLoaded] = useFonts({
        Mulish_200ExtraLight,
        Mulish_300Light,
        Mulish_400Regular,
        Mulish_500Medium,
        Mulish_600SemiBold,
        Mulish_700Bold,
        Mulish_800ExtraBold,
        Mulish_900Black,
        Mulish_200ExtraLight_Italic,
        Mulish_300Light_Italic,
        Mulish_400Regular_Italic,
        Mulish_500Medium_Italic,
        Mulish_600SemiBold_Italic,
        Mulish_700Bold_Italic,
        Mulish_800ExtraBold_Italic,
        Mulish_900Black_Italic,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else{
            return (
                <AppNavigation AppState = {AppState}/>
            )
      }    
}