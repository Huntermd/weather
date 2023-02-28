import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import Icon from '../weatherIcon';
export const DetailTile = ({iconName, title, data}) => {
  return (
    <View style={styles.container}>
        <Icon name = {iconName} style={styles.iconText}/>
        <Text style={styles.text}>
            {title}
        </Text>
        <Text style={styles.text}>{data}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
container:{
  backgroundColor: 'black',
  alignItems: 'center',
  width: 118,
  height: 118,
  margin: 10,
  justifyContent: 'space-evenly'
},
text:{
  color: 'white'
},
iconText:{
  fontSize: 25,
  color:'white'
}
});