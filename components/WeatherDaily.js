import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  Day  from './Day';
import data from '../data';

export default function WeatherDaily() {
  return (
    <View style={styles.Container}>
        <Day  day={data.daily[0]}/>
      <Day  day={data.daily[1]} />
      <Day   day={data.daily[2]}/>
      <Day  day={data.daily[3]} />
      <Day  day={data.daily[4]} />
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flexDirection: 'row'
  }
})