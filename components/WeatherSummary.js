import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import heroImage from '../assets/Sunny.jpg'
import {SizeConstants, ColorConstants, FontConstants} from '../GlobalStyles';
import data from '../data';


export default function WeatherSummary() {

let windDirection;
let deg= data.current.wind_deg;

if(deg >(360-22.5) || deg < 22.5) windDirection = 'North';
if(deg >22.5 && deg < 45) windDirection = 'North E';

  return (
    <View style = {styles.heroContainer}>
      <Text style= {styles.text}>Good Afternoon</Text>
      <Image source = {heroImage} style={styles.hero}/>
      <View style = {styles.TempContainer}>
        <Text style = {styles.highTemp}>46{'\u00b0'}f</Text>
        <Text style = {styles.lowTemp}>/33 {'\u00b0'}f</Text>
        
      </View>
      <View>
        <Text style={[styles.SumText, {fontSize: 30}]}>Huntington</Text>
        <Text style={styles.SumText}> Today - {data.daily[0].weather[0].main} with a high near {Math.round(data.daily[0].temp.max)}.
        Southwest wind around {Math.round(data.daily[0].wind_speed)} mph, with gust as high as {Math.round(data.daily[0].wind_gust)} mph.
        </Text>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    text:{
      width: '90%',
        color: ColorConstants.normal ,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 4
      },

      heroContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems : 'center'
      },
      TempContainer:{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      highTemp:{
        color: 'red',
        fontSize: 48,
        fontWeight: '100',
        marginRight: 8
      },
      lowTemp:{
        color: 'lightblue',
        fontSize: 18,
        fontWeight: '100'
      },

      hero:{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 20,
        resizeMode: 'cover'
      },
      SumText:{
        color: 'white',
      }
})