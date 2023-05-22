import { View, Text, SafeAreaView, StatusBar, StyleSheet, ImageBackground, TouchableOpacity,Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { AdjustmentsHorizontalIcon, UserIcon, EnvelopeIcon, PhoneIcon,MapPinIcon, IdentificationIcon, CalendarDaysIcon, AcademicCapIcon, UserGroupIcon} from 'react-native-heroicons/outline';

import { useNavigation } from '@react-navigation/core';
import PerformanceMenuComponent from '../components/PerformanceMenuComponent';
import AttendanceStatusComponent from '../components/AttendanceStatusComponent';

const PerformanceScreen = () => {
  
    const navigation = useNavigation();
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <View>
        <StatusBar style='light'/>
      <View style={styles.ImageHeaderContainer}>
        <ImageBackground source={require("../assets/Performance.png")} style={styles.imageBackground}>
          <SafeAreaView>
            <View style={styles.headerContainer}>
              <TouchableOpacity>
                <AdjustmentsHorizontalIcon color={'white'} size={38} style={styles.menuIcon}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/Logo.png')}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.LoginHeader}>Performance</Text>
          </SafeAreaView>
        </ImageBackground>
      </View>
      {/* Components */}
      <PerformanceMenuComponent/>
      <AttendanceStatusComponent/>
    </View>
  )
}

const styles = StyleSheet.create({
  ImageHeaderContainer: {
    width: '100%',
    height: '42%',
  },
  imageBackground:{
      width: "100%",
      height: "100%",
  },
  headerContainer:{
      width:"100%",
      height: "30%",
      paddingLeft: 30,
      paddingRight: 30,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  LoginHeader:{
      fontSize: 40,
      fontWeight: 700,
      color: 'white',
      marginTop: 80,
      marginLeft: 20,
  },
  IDContainer:{
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  StudentIDNo: {
    width: '50%',
    heigh: '20%',
    backgroundColor: 'rgba(216, 243, 220, 0.67)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  IDNoText: {
    fontSize: 18,
    fontWeight: 600,
  },
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formColumn: {
    width: 400,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  textInput: {
      color: 'black',
      padding: 20,
      width: 350,
      height:50,
      backgroundColor: 'rgba(217,217,217,0.4)',
      borderRadius: 10,
  },
})

export default PerformanceScreen