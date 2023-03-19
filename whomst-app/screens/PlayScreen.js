import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, SafeAreaView, ScrollView, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function PlayScreen({ navigation }) {
  return (
        <View style={styles.container}>
          

          <View style={styles.titleContainer}>
           <TouchableOpacity activeOpacity = { .5 } style={styles.playBtn} onPress={() => navigation.navigate("WHOMST - A Guessing Game")}>
              <Image
                source={require('../assets/title.png')}
                style={styles.playBtnImg}
              />
           </TouchableOpacity>
           </View>

           <View style={styles.userContainer}>
           {/* <TouchableOpacity activeOpacity = { .5 } style={styles.playBtn} onPress={() => navigation.navigate("WHOMST - A Guessing Game")}>
              <Image
                source={require('../assets/title.png')}
                style={styles.playBtnImg}
              />
           </TouchableOpacity> */}
           </View>
        

        <ScrollView style={styles.cardsContainer}>
          <View style={styles.row}>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

          </View>


          <View style={styles.row}>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

            </View>


            <View style={styles.row}>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={require('../assets/title.png')} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>

            </View>

          </ScrollView>
        </View>
      
    
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: 'pink',
  },
  titleContainer: {
    flex: 0.05,
    backgroundColor: 'orange',
  },
  userContainer: {
    flex: 0.3,
    backgroundColor: 'red',
  },
  cardsContainer: {
    flex: 8,
    backgroundColor: 'red',
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
    backgroundColor: 'yellow',
  },
  card: {
    backgroundColor: "#7ca1b4",
    flex: 1,
    margin: 5,
  },
  playBtn: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'blue',
  },
  playBtnImg: {
    flex: 1,
    width: 300,
    aspectRatio: 3.2, 
    resizeMode: 'contain',
    alignSelf: 'center',
    backgroundColor: 'green',
    marginTop: 16, 
    zIndex: 2
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'red',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },

});