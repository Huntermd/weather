import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'


export default function Radar() {
  return (
    <View style={{borderRadius: 12}}>
      <Text style={styles.text}>Radar</Text>
      <Image style={{width: '100%', height: 300, borderRadius: 12}} source={require('../assets/CENTGRLAKES_loop.gif')} />
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    }

})