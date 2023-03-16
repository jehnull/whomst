import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

//const image = {require("whomst-app/assets/background.png")};

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/betterBg.png')} resizeMode="repeat" style={styles.image}>
        <Image source={require('./assets/title.png')} resizeMode="contain" style={styles.title}></Image>
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
    flex: 1,
    width: '50%',
    alignSelf: 'center'
  }
});
