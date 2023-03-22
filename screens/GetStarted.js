import { View, Text, SafeAreaView, Image, Pressable, StyleSheet,ImageBackground } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {DMSans} from '../assets/fonts/DM_Sans/DMSans-Regular.ttf'
import * as Font from 'expo-font';

const GetStarted = () => {


  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login')
  }

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <View>
      <ImageBackground source={require('../assets/GetStartedStudent.png')} style={styles.ImageBackgroundContainer}>
        <SafeAreaView style={{marginTop: '87%', marginLeft: '6%'}}>
          <Text style={styles.TextStyles}>A whole</Text>
          <Text style={styles.TextStyles}>new</Text>
          <Text style={styles.TextStyles}>experience</Text>
          <Text style={styles.TextStyles}>at your</Text>
          <Text style={styles.TextStyles}>fingertips</Text>
        </SafeAreaView>
      </ImageBackground>
      <Pressable style={styles.GetStartedBtn} onPress={handlePress}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  GetStartedBtn: {
    backgroundColor: "#1B4332",
    width: '50%',
    height: '7%',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: -15,
  },
  ImageBackgroundContainer:{
    width: '100%',
    height:'92%',
  },
  getStartedText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 500,
  },
  TextStyles:{
    fontFamily: 'NotoSerif-Regular',
    color: 'white',
    fontSize: 50,
    fontWeight: 400,
  }
})
export default GetStarted
