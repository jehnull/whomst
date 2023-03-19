import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import testPage from "./screens/testPage";
import AboutScreen from "./screens/AboutScreen";
import PlayScreen from "./screens/PlayScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WHOMST - A Guessing Game" component={AboutScreen} />
        <Stack.Screen name="WHOMST [ACTIVE GAME]" component={PlayScreen} />
        <Stack.Screen name="test page" component={testPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}