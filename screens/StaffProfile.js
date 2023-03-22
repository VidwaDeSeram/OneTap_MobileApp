import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, SafeAreaView, ScrollView , TextInput} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { AdjustmentsHorizontalIcon, UserIcon, EnvelopeIcon, PhoneIcon,MapPinIcon, IdentificationIcon, CalendarDaysIcon, ClipboardDocumentCheckIcon} from 'react-native-heroicons/outline';
import StudentIDCard from '../components/StudentIDCard';

const StaffProfile = () => {
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
        <ImageBackground source={require("../assets/StaffProfile.png")} style={styles.imageBackground}>
          <SafeAreaView>
            <View style={styles.headerContainer}>
              <TouchableOpacity>
                <AdjustmentsHorizontalIcon color={'white'} size={38} style={styles.menuIcon}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/Logo.png')}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.LoginHeader}>Staff Profile</Text>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View style={styles.formContainer}>
            {/* Name */}
            <View style={styles.formColumn}>
              <UserIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value='Full Name'
              />
            </View>
            {/* Email */}
            <View style={styles.formColumn}>
              <EnvelopeIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value='Email'
              />
            </View>
            {/* Tel No */}
            <View style={styles.formColumn}>
              <PhoneIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value='Telephone Number'
              />
            </View>
            {/* Location */}
            <View style={styles.formColumn}>
              <MapPinIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value='Address'
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
                  value='Date Of Birth'
              />
            </View>
            {/* Reponisibility */}
            <View style={styles.formColumn}>
              <ClipboardDocumentCheckIcon color='#1B4332' size={30}/>
              <TextInput
                  style={styles.textInput}
                  value='Responsibility'
              />
            </View>
          </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  ImageHeaderContainer: {
    width: '100%',
    height: '34%',
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
  formContainer: {
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
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
export default StaffProfile