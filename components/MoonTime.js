import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ColorConstants, SizeConstants } from '../GlobalStyles'
import Icon from '../weatherIcon';
import moment from 'moment';

import { MoonList } from '../MoonHelper';

export default function MoonTime({data}) {

    const Moonrise = new Date(data.moonrise * 1000);
    const MoonriseTime = moment(Moonrise).format('LT');
  
    const Moonset = new Date(data.moonset * 1000);
    const MoonsetTime = moment(Moonset).format('LT');
  return (
    <View style={styles.TileContainer}>
    <Text>Moon Phase</Text>
    <Icon name = {MoonList[data.moon_phase][0]} style={styles.iconText}/>
    <Text style={styles.text}>{MoonList[data.moon_phase][1]}</Text>
    <Icon name = 'wi-moonrise' style={styles.iconText}/>
    <Text style={{fontSize: 7}}>Moon rise</Text>
        <Text style={styles.TextStyle}>{MoonriseTime}</Text>
        <Icon name = 'wi-moonset' style={styles.iconText}/>
        <Text style={{fontSize: 7}}>Moon set</Text>
        <Text style={styles.TextStyle}> {MoonsetTime}</Text>
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