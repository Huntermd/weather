import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../weatherIcon'
import { iconList } from '../WeatherHelper'
import { ColorConstants, SizeConstants } from '../GlobalStyles'


export default function Day({day}) {
  return (
    <View style={styles.Container}>
      <View>
      <Icon name = {iconList[day.weather[0].id][0]} style={styles.Icon}/>
      </View>
      <View>
        
      <Text style={styles.High}>{Math.round(day.temp.max)}{'\u00b0'}F</Text>
      </View>
      <View>
        
      <Text style={styles.Low}>{Math.round(day.temp.min)}{'\u00b0'}F</Text>
      </View>
      <View>
        <Icon name='wi-raindrop' style={styles.Icon}/>
      <Text>{day.pop * 100 }%</Text>
      </View>
      <View>
      <Icon name='wi-humidity' style={styles.Icon}/>
      <Text>{day.humidity}%</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    width: '17%' ,
    height: 190 ,
    backgroundColor: ColorConstants.backgroundMedium,
    borderRadius: SizeConstants.borderRadius,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
    
  },
  Icon:{
    fontSize: 30,
    color: 'darkblue'
  },
  High:{
    color: 'darkred'
  },
  Low: {
     color: 'darkblue'
    }
  
})