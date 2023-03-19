import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/betterBg.png')} resizeMode="repeat" style={styles.image}>
        <Image source={require('../assets/title.png')} resizeMode="contain" style={styles.title}></Image>
        
        <TouchableOpacity activeOpacity = { .5 } style={styles.playBtn} onPress={() => navigation.navigate("WHOMST [ACTIVE GAME]")}>
          <Image
            source={require('../assets/playBtn.png')}
            style={styles.playBtnImg}
          />
        </TouchableOpacity>

      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      flex: 3,
      width: '50%',
      alignSelf: 'center'
    },
    playBtn: {
      flex: 1,
      alignSelf: 'center'
    },
    playBtnImg: {
      flex: 1,
      aspectRatio: 3.2, 
      resizeMode: 'contain',
      alignSelf: 'center'
    }


});