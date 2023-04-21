import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ColorConstants, SizeConstants } from '../GlobalStyles'
import Icon from '../weatherIcon';
import moment from 'moment';
import MoonTime from './MoonTime';




export default function Sun({Sun}) {

  const Sunrise = new Date(Sun.sunrise * 1000);
  const SunriseTime = moment(Sunrise).format('LT');

  const Sunset = new Date(Sun.sunset * 1000);
  const SunsetTime = moment(Sunset).format('LT');







  return (
    <View style={styles.Container}>
         <View style={styles.TileContainer}>
    <Text>Sunrise</Text>
    <Icon name = 'wi-sunrise' style={styles.iconText}/>
    <Text>{SunriseTime}</Text>
      </View>
      <View style={styles.TileContainer}>
    <Text>Sunset</Text>
    <Icon name = 'wi-sunset' style={styles.iconText}/>
    <Text>{SunsetTime}</Text>
      </View>
      <MoonTime data={Sun}/>
  
    </View>
  )
}

const styles = StyleSheet.create({
    TileContainer:{
      backgroundColor: ColorConstants.backgroundMedium,
      alignItems: 'center',
      width: 118,
      height: 150,
      margin: 10,
      justifyContent: 'space-evenly',
      borderRadius: SizeConstants.borderRadius,
      padding: SizeConstants.paddingRegular,
    },
    Container:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    iconText:{
      fontSize: 35,
      color:ColorConstants.iconColor,
    },
    TextStyle:{
      marginTop: 5
    },
    text:{
      fontSize: 10
    }
  
    
})