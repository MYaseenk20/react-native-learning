import { StatusBar, StyleSheet, Text, View,Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (

    <Stack initialRouteName='index' screenOptions={{
        headerStyle : {backgroundColor : '#ddd'},
        headerTintColor:'#333'
    }}>
        <Stack.Screen name='index' options={{title:'Home'}}/>
        <Stack.Screen name='about' options={{title:'About'}}/>
        <Stack.Screen name='contact' options={{title:'Contact'}}/>
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
