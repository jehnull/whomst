import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WHOMST - A Guessing Game" component={HomeScreen} />
        <Stack.Screen name="WHOMST [ACTIVE GAME]" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}