import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, SafeAreaView, ScrollView , TextInput} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { AdjustmentsHorizontalIcon, UserIcon, EnvelopeIcon, PhoneIcon,MapPinIcon, IdentificationIcon, CalendarDaysIcon, AcademicCapIcon, UserGroupIcon} from 'react-native-heroicons/outline';
import StudentIDCard from '../components/StudentIDCard';
import AsyncStorage from '@react-native-async-storage/async-storage';


const StudentProfile = () => {
    const navigation = useNavigation();

    const [profileData, setProfileData] = useState({
      id: '',
      username: '',
      email: '',
      phone: '',
      address: '',
      dob: '',
      degree: '',
      batch: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
  
        const response = await fetch(`http://192.168.1.172:3000/api/user/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
  
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
  
    fetchProfile();
  }, []);

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
  return (
    <View>
        <StatusBar style='light'/>
      <View style={styles.ImageHeaderContainer}>
        <ImageBackground source={require("../assets/StudentProfile.png")} style={styles.imageBackground}>
          <SafeAreaView>
            <View style={styles.headerContainer}>
              <TouchableOpacity>
                <AdjustmentsHorizontalIcon color={'white'} size={38} style={styles.menuIcon}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/Logo.png')}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.LoginHeader}>Student Profile</Text>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <ScrollView 
      style={{height: '68%'}}
      contentContainerStyle={{
        flexGrow: 1,
        paddingVertical: 15,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
      vertical
      showsVerticalScrollIndicator={false}
      >
          <StudentIDCard/>
          <View style={styles.StudentIDNo}>
            <Text style={styles.IDNoText}>Student ID: 20381</Text>
          </View>
          {/* Form Container */}
          <View style={styles.formContainer}>
            {/* Name */}
            <View style={styles.formColumn}>
              <UserIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value={profileData.username}
              />
            </View>
            {/* Email */}
            <View style={styles.formColumn}>
              <EnvelopeIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value={profileData.email}
              />
            </View>
            {/* Tel No */}
            <View style={styles.formColumn}>
              <PhoneIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value={profileData.phone}
              />
            </View>
            {/* Location */}
            <View style={styles.formColumn}>
              <MapPinIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value={profileData.address}
              />
            </View>
            {/* NIC */}
            <View style={styles.formColumn}>
              <IdentificationIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value='Full Name'
              />
            </View>
            {/* DOB */}
            <View style={styles.formColumn}>
              <CalendarDaysIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value={profileData.dob}
              />
            </View>
            {/* Degree */}
            <View style={styles.formColumn}>
              <AcademicCapIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value={profileData.degree}
              />
            </View>
            {/* Batch */}
            <View style={styles.formColumn}>
              <UserGroupIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value={profileData.batch}
              />
            </View>
          </View>
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  ImageHeaderContainer: {
    width: '100%',
    height: '30%',
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
export default StudentProfile