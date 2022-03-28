import React from "react";
import { Button, View, Text, StyleSheet, Alert } from "react-native";
import { BlurView } from "expo-blur";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawerNavigation from "./src/navigation/MyDrawerNavigator";

function App() {
  return (
    <NavigationContainer>
      <MyDrawerNavigation />
    </NavigationContainer>
  );
}

export default App;
