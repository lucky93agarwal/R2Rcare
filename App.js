/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

import SplashScreenComponent from './src/screens/Splash';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {

  console.warn("in lucky2");
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
            statusBarColor: "black",
          },
          headerTintColor: "white",
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreenComponent}
          options={{ title: 'Welcome', headerShown: false, headerLeft: null, gestureEnabled: false, }}
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  highlightNew: {
    width: 20,
    height: 20,
    marginHorizontal:7
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    fontSize: 60,
    color: "white",
  },
  sublight: {
    marginTop: 100,
    fontWeight: '600',
    marginHorizontal: 30,
    fontSize: 16,
    color: "white",
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#b40001"
  }
});

export default App;


