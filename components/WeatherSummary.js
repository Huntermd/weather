import { StyleSheet, Text, View, Image, Switch } from 'react-native'
import React from 'react'
import heroImage from '../assets/Sunny.jpg'
import {SizeConstants, ColorConstants, FontConstants} from '../GlobalStyles';
// import data from '../data';


export default function WeatherSummary({data}) {

let windDirection = '';
let d = data.current.wind_deg;
switch (d) {
  case ( d > 315 || d < 45):
    windDirection = "North";
    break;
    case (d >= 45 && d < 135):
      windDirection = "East";
      break;
      case (d >= 135 && d<225):
        windDirection = "South";
        break;
      default:
        windDirection = "West";
}






  return (
    <View style = {styles.heroContainer}>
      <Text style= {styles.text}>Good Afternoon</Text>
      <Image source = {heroImage} style={styles.hero}/>
      <View style = {styles.TempContainer}>
        <Text style = {styles.highTemp}>{Math.round(data.daily[0].temp.max)}{'\u00b0'}F</Text>
        <Text style = {styles.lowTemp}>/ {Math.round(data.daily[0].temp.min)} {'\u00b0'}F</Text>
        
      </View>
      <View>
      <Text style={[styles.SumText, {fontSize: 30}]}>Huntington</Text>
        {data.current.weather[0].main === 'clear' ? 
        (<Text style = {styles.SumText}>Clear skies today with a tempuature of {Math.round(data.current.temp)} {'\u00b0'}F</Text>) : 
        (<Text style={styles.SumText}> At least partly cloudy skies today with a tempuature of {Math.round(data.current.temp)} {'\u00b0'}F</Text>)}
       <Text style={styles.SumText}>Winds of {Math.round(data.current.wind_speed)} mph from the {windDirection}</Text>
       
       
        
        
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