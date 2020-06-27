import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
  View,
  Text,  
  StatusBar,
} from 'react-native';

export default function Header({ }) {

  const image = { uri: 'https://www.uidownload.com/files/919/956/914/birds-in-the-sky.jpg' }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>Previsão tempo</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    height: 150    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 40,
    color: 'whitesmoke',
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 20,
    fontWeight: 'bold'    
  }
})
