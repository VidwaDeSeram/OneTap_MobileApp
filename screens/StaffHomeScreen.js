import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { AdjustmentsHorizontalIcon} from 'react-native-heroicons/outline';


const StaffHomeScreen = () => {
    const navigation = useNavigation();

  const userProfilePress = () => {
    navigation.navigate('StaffProfile')
  }

  const MapPress = () => {
    navigation.navigate('MapScreen')
  }

  const performancePress = () => {
    navigation.navigate('Performance')
  }

  const calendarPress = () => {
    navigation.navigate('Calendar')
  }
  useLayoutEffect(()=> {
    navigation.setOptions({
        headerShown: false,
    })
}, [])
  return (
    <View>
      <StatusBar style='light'/>
      <View style={styles.ImageHeaderContainer}>
        <ImageBackground source={require("../assets/HomeImage.png")} style={styles.imageBackground}>
          <SafeAreaView>
            <View style={styles.headerContainer}>
              <TouchableOpacity>
                <AdjustmentsHorizontalIcon color={'white'} size={38} style={styles.menuIcon}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/Logo.png')}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.LoginHeader}>Staff Home</Text>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <ScrollView 
      style={{height: '70%'}}
      contentContainerStyle={{
        flexGrow: 1,
        paddingVertical: 15,
        paddingTop: 20,
        alignItems: 'center'
      }}
      vertical
      showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity onPress={userProfilePress}>
          <Image source={require('../assets/HomeUserProfileImg.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={MapPress}>
          <Image source={require('../assets/HomeUniversityMapImg.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={calendarPress}>
          <Image source={require('../assets/HomeCalendarImg.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={performancePress}>
          <Image source={require('../assets/HomeStudentPerformanceImg.png')}/>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ImageHeaderContainer: {
    width: '100%',
    height: '27%',
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
      fontFamily:'NotoSerif-Regular',
  },
})
export default StaffHomeScreen