import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { AdjustmentsHorizontalIcon} from 'react-native-heroicons/outline';
import LectureItem from '../components/LectureItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CalendarScreen = () => {
    const navigation = useNavigation();

    const [lectures, setLectures] = useState({
      id: '',
      date: '',
      subject: '',
      faculty: '',
      degree: '',
      batch: '',
      startTime: '',
      endTime: '',
      location: '',
  });

  useEffect(() => {
    const fetchLectureData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await fetch('http://172.20.10.6:3000/api/time/user-lectures', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setLectures(data);
      } catch (error) {
        console.log('Error fetching lecture data:', error);
      }
    };

    fetchLectureData();
  }, []);

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
  return (
    <View style={{flex:1}}>
      <StatusBar style='light'/>
      <View style={styles.ImageHeaderContainer}>
        <ImageBackground source={require("../assets/CalendaScreen.png")} style={styles.imageBackground}>
          <SafeAreaView>
            <View style={styles.headerContainer}>
              <TouchableOpacity>
                <AdjustmentsHorizontalIcon color={'white'} size={38} style={styles.menuIcon}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/Logo.png')}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.LoginHeader}>Event Calendar</Text>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View style={{width: '70%', height: '6%',flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize: 30,fontWeight: 700,fontFamily:'NotoSerif-Regular'}}>Date: 21/05/2023</Text>
      </View>
      <View style={styles.LectureContainer}>
        <LectureItem/>
        <LectureItem/>
        <View style={styles.detailContainer}>
            <Text style={{fontSize:20, fontWeight: 700}}>Module Name</Text>
            <View style={styles.detailModuleContainer}>
                <Text style={{fontSize: 18, fontWeight:500}}>{lectures.subject}</Text>
            </View>
            <Text style={{fontSize:20, fontWeight: 700}}>Lecturer Hall</Text>
            <View style={styles.detailModuleContainer}>
                <Text style={{fontSize: 18, fontWeight:500}}>{lectures.location}</Text>
            </View>
            <Text style={{fontSize:20, fontWeight: 700}}>Lecture Time</Text>
            <View style={styles.detailModuleContainer}>
                <Text style={{fontSize: 18, fontWeight:500}}>{lectures.startTime}:{lectures.endTime}</Text>
            </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    ImageHeaderContainer: {
      width: '100%',
      height: '29%',
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
        fontFamily:'NotoSerif-Regular',
        color: 'white',
        marginTop: 80,
        marginLeft: 20,
    },
    LectureContainer:{
        width: '100%',
        height: '70%',
        backgroundColor:'rgba(0,0,0,0.01)',
        padding: 20,
    },
    detailContainer:{
        width: '100%',
        height: '43%',
        marginTop:10,
        backgroundColor:'rgba(0,0,0,0.12)',
        borderRadius:20,
        padding:20,
    },
    detailModuleContainer:{
        width:'100%',
        height:40,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius:10,
        marginTop:10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default CalendarScreen