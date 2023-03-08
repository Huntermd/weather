import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../weatherIcon'

export default function Day({day, iconName}) {
  return (
    <View>
      <View>
      <Icon name = {iconName} style={styles.Icon}/>
      </View>
      <View>
      <Text>{day.temp.max}{'\u00b0'}F</Text>
      </View>
      <View>
      <Text>{day.temp.min}{'\u00b0'}F</Text>
      </View>
      <View>
      <Text>{day.pop * 100 }%</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})