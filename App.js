/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
  Alert  
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,  
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SweetAlert from 'react-native-sweet-alert';

import Header from './src/Components/Header'
import Input from './src/Components/Input'
import Card from './src/Components/Card/Card.js'

import { kelvinToCelsius } from './src/utils/converts'

const API_KEY = "8079aa61b1c28fc26d49ed1646a12685"

class App extends Component {  

  constructor(props) {
    super(props)   
    
    this.state = {
      cityInformation: null,
      city: null,
      
    }
  }

  getCountry = async (cityName) => {
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    const response = await api_call.json();

    if (response.cod === 200) {
      this.setState({ cityInformation: response })
    } else {
      Alert.alert('cidade não encontrada')
    }                        
  }

  render() {
    const { cityInformation, city } = this.state
    
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />            
            <View style={styles.InputContanier}>
              <Input value={city} onChangeText={(e) => this.setState({ city: e })} placeholder="Digite o nome da cidade" />                
              <Button onPress={() => this.getCountry(city)} title="Search" />              
            </View>            

            {cityInformation ?
              <>
                <Text style={styles.nameCity}>{cityInformation.name}</Text>   
                <Text style={styles.baseText}>Clima: {cityInformation.weather[0].description}</Text>              

                <View style={styles.containerCards}>
                  <Card title="Máxima">
                    <Text>{kelvinToCelsius(cityInformation.main.temp_max)} ºC</Text>
                  </Card>
                  <Card title="Minima">
                    <Text>{kelvinToCelsius(cityInformation.main.temp_min)} ºC</Text>
                  </Card>

                  <Card title="Humidade">
                    <Text>{cityInformation.main.humidity} %</Text>
                  </Card>
                  <Card title="Velocidade vento">
                    <Text>{cityInformation.wind.speed} M/s</Text>
                  </Card>
                </View>                            
              </>
            :
            <Text style={styles.nameCity}>Cidade não encontrada</Text>
            }   

          </ScrollView>
        </SafeAreaView>
      </>
    )
  }  
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: Colors.white,
  },
  InputContanier: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    flexDirection: "row"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  Button: {    
    flexDirection: 'column',        
    marginRight: 10    
  },
  containerCards: {
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: 'wrap'   
  },
  nameCity: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: 'black'
  },
  baseText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  }
});

export default App;
