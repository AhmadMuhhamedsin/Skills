import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePost from '../screens/CreatePost.js/CreatePost.js';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';

const Stack = createNativeStackNavigator();

export default function AppNavigation({ AppState }) {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <Login {...props} AppState={AppState} />}
        </Stack.Screen>
        <Stack.Screen name="Register" options={{ headerShown: false }}>
          {(props) => <Register {...props} AppState={AppState} />}
        </Stack.Screen>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} AppState={AppState} />}
        </Stack.Screen>
        <Stack.Screen name="CreateOffer" options={{ headerShown: false }}>
          {(props) => <CreatePost {...props} AppState={AppState} />}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
