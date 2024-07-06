import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Task({ data }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="trash" size={20} color="#22272e" />
      </TouchableOpacity>
      <Text>{data.item} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(196,196,196,0.20)',
    marginTop: 12,
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row'
  },
  button: {
    marginRight: 8
  }
})
