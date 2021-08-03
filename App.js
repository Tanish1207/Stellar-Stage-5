import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import DailyPicScreen from './Screens/DailyPicScreen';
import SpaceCraftsScreen from './Screens/SpaceCraftsScreen';
import StarMapScreen from './Screens/StarMapScreen';


const Stack = createStackNavigator();



export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "HomeScreen"
        screenOptions={{
          headerShown:false
        }}
        >
        <Stack.Screen name ="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name ="DailyPicScreen" component={DailyPicScreen}/>
        <Stack.Screen name ="SpaceCraftsScreen" component={SpaceCraftsScreen}/>
        <Stack.Screen name ="StarMapScreen" component={StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
