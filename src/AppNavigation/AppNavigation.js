import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateOffer from '../screens/CreateOffer/CreateOffer';
import Offer from '../screens/Details/Offer';

const Stack = createNativeStackNavigator();

export default function AppNavigation({AppState}) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown: false}}>
        {(props) => <Home {...props} AppState={AppState} />}
      </Stack.Screen>
      <Stack.Screen name="Offer" options={{headerShown: false}}>
        {(props) => <Post {...props} AppState={AppState} />}
      </Stack.Screen>
      <Stack.Screen name="CreateOffer" options={{headerShown: false}}>
        {(props) => <CreatePost {...props} AppState={AppState} />}
      </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>  
    )
}