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
    const [allOffers, setAllOffers] = useState([
        {
          offerId:1, offerTitle: 'First title', offerText: 'This is my first offer, hope you enjoy it',
          author: {id:1, offerAuthor: 'Mari', email: 'mari@tptlive.ee', age: 25}  
          
        },
        { offerId: 2, offerTitle: 'Second title', offerText: 'This is my second offer, hope you enjoy it',
          author: {id:2, offerAuthor: 'Mark', email: 'mark@tptlive.ee', age: 30}  
        },
        { offerId: 3, offerTitle: 'Third title', offerText: 'This is my third offer, hope you enjoy it',
          author: {id:3, offerAuthor: 'Markus', email: 'markus@tptlive.ee', age: 35}  
        },
        { offerId: 4, offerTitle: 'Fourth title', offerText: 'This is my fourth offer, hope you enjoy it',
          author: {id:4, offerAuthor: 'John', email: 'john@tptlive.ee', age: 40}  
        },
        { offerId: 5, offerTitle: 'Fifth title', offerText: 'This is my fifth offer, hope you enjoy it', 
          author: {id:5, offerAuthor: 'Marcc', email: 'marcc@tptlive.ee', age: 45}
           
        },
      
    ]);
    const [offer, setOffer] = useState({});
    
    const AppState = {
        allOffers, setAllOffers,
        offer, setOffer
    }

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