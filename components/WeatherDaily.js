import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  Day  from './Day';
import data from '../data';

export default function WeatherDaily({data}) {
  return (
   <View >
    <Text style={styles.text}>Daily</Text>
     <View style={styles.Container}>
      
      <Day  day={data.daily[0]} />
    <Day  day={data.daily[1]}  />
    <Day   day={data.daily[2]} />
    <Day  day={data.daily[3]}  />
    <Day  day={data.daily[4]}  />
  </View>
   </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  text:{
    color:'white'
  }
})