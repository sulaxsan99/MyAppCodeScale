
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import VoiceToTextScreen from './Screens/VoiceToTextScreen';
import { Fire_auth } from './config';
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const Stack = createStackNavigator();
  // const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()
  const InsideStack = createStackNavigator();
  const OutsideStack = createStackNavigator();

  const auth = Fire_auth;

  function InsideLayout() {
    return (
      <InsideStack.Navigator initialRouteName='Welcome'>
        <InsideStack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
        <InsideStack.Screen name='Welcome' component={WelcomeScreen}  options={{ headerShown: false }}/>
        <InsideStack.Screen name='VoiceToText' component={VoiceToTextScreen}  options={{ headerShown: false }}/>

      </InsideStack.Navigator>
    )
  }

  function OutsideLayout(){
    return (
      <OutsideStack.Navigator initialRouteName='Login'>
        <OutsideStack.Screen name='Login' component={LoginScreen}  options={{ headerShown: false }}/>
        <OutsideStack.Screen name='SignUp' component={SignUpScreen}  options={{ headerShown: false }}/>
      </OutsideStack.Navigator>
    )
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("1", user)
        setUser(user)
        // ...
      } else {
        // User is signed out
        setUser('')
        // ...
      }
    });
  }, [])
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />

      </Stack.Navigator> */}
      {
        user ? <InsideLayout /> :<OutsideLayout />
      }
    </NavigationContainer>
  )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
