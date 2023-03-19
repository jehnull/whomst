import React from "react";
import { TouchableOpacity, Pressable, Button, View, Text, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>OMG the first page!!! 😎😎😋😳🧠⭐✨😭</Text>
        <Button
            title="Go to Front Page"
            onPress={() => navigation.navigate("WHOMST - A Guessing Game")}
        />
        <Button
            title="Go to the Active Game Play"
            onPress={() => navigation.navigate("WHOMST [ACTIVE GAME]")}
        />
        <TouchableOpacity activeOpacity = { .5 } onPress={() => navigation.navigate("WHOMST [ACTIVE GAME]")}>
        <Image
            source={require('../assets/title.png')}
            style={{ width: 340, height: 100 }}
          />
        </TouchableOpacity>
    </View>
  );
}