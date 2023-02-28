import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { SizeConstants, ColorConstants } from '../GlobalStyles'
import Icon from '../weatherIcon'
import { iconList } from '../WeatherHelper'

export const Hour = ({hour}) => {


    let meridian = '';
    let index = 0;
    let dt = new Date(hour.dt * 1000);
    let hours = dt.getHours();

    if(hours > 7 && hours < 20) {
        index = 0;
    }else{
        index = 1;
    }
    

    if(hours > 12 ) 
   { hours = hours - 12;
    meridian ='PM';
} else {
    meridian = 'AM';
}

if(hours == 0) hours = 12;



  return (
   <View style = {styles.container}> 
   <Icon style={styles.iconI} name={iconList[hour.weather[0].id][0]}/>
        <Text style ={styles.info}>
            {hour.pop}
        </Text>
        <Text style ={styles.info}>
            {Math.round(hour.temp) + '\u00b0'}
        </Text>
        <Text style ={styles.info}>
            {hour.weather[0].main}
        </Text>
        <Text style ={styles.Littleinfo}>
        {hours}:00{meridian}
        </Text>
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 70,
        height: 150,
        backgroundColor:ColorConstants.backgroundMedium,
        borderRadius: SizeConstants.borderRadius,
        marginRight: SizeConstants.paddingSmall,
        padding: SizeConstants.paddingRegular,
        alignItems: 'center',
        
        
    },
    info:{
        color: 'black',
        fontSize: 14
    },
    iconI:{
        color: 'darkblue',
        fontSize: 40
    },
    Littleinfo:{
        color: 'black',
        fontSize: 10
    },
})
