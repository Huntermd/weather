import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Day({day, iconName}) {
  return (
    <View>
      <View>
      <Icon name = {iconName} style={styles.Icon}/>
      </View>
      <View>
      <Text>{day.temp.max}</Text>
      </View>
      <View>
      <Text>{day.temp.min}</Text>
      </View>
      <View>
      <Text>{day.pop}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})