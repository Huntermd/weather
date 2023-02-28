import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../weatherIcon';
import {SizeConstants, ColorConstants, FontConstants} from '../GlobalStyles';
import { DetailTile } from './DetailTile';
import data from '../data';



export default function WeatherDetail() {
  return (
    
    <View >
      <Text style={styles.Text}>Detail</Text>
      <View style={styles.detailContainer}>
      <DetailTile iconName="wi-thermometer" title="Feels like" data={data.current.feels_like}/>
    <DetailTile iconName="wi-humidity" title='Humidity' data={data.current.humidity}/>
    <DetailTile iconName="wi-day-sunny" title='UV index' data={data.current.uvi}/>
    <DetailTile  iconName="wi-earthquake" title='Visibiliy' data={data.current.visibility}/>
    <DetailTile  iconName="wi-thermometer" title='Dew Point' data={data.current.dew_point}/>
    <DetailTile  iconName="wi-barometer" title='Pressure' data={data.current.pressure}/>
    
      </View>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
    Text:{
        color: '#fff',
        fontSize: 20,
       
      
  
      },
      detailContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
       alignItems: 'center',
       flexWrap: 'wrap'
       
      
      }
})