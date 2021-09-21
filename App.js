import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Drawer from './components/drawer/Drawer';


export default function App() {
  return (
    <NavigationContainer>
      <Drawer/>
    </NavigationContainer>

  );
}
