import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {AdjustmentsHorizontalIcon} from 'react-native-heroicons/outline';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import superagent from 'superagent';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('student');
    const [studentActive, setStudentActive] = useState(true);
    const [staffActive, setStaffActive] = useState(false);
  
    const navigation = useNavigation();
    
    const handlePress = async () => {
        try {
          const response = await superagent
            .post('http://192.168.1.172:3000/api/user/login')
            .send({ username, password });
      
          if (response.status === 200) {
            await AsyncStorage.setItem('token', response.body.token);
            // Save the user data (and token, if applicable) to local storage or state management
            // localStorage.setItem('userInfo', JSON.stringify(response.body.user));
            // Navigate to the 'Home' screen
            if(userType == 'student'){
                navigation.navigate('Home');
            }else{
                navigation.navigate('StaffHome');
            }

          } else {
            // Display error message
            console.error('Error during authentication:', response.body.message);
          }
        } catch (error) {
          console.error('Error during authentication:', error.message);
        }
      };
      
    const handleStudentPress = () => {
      setStudentActive(true);
      setStaffActive(false);
      setUserType('student');
    };
  
    const handleStaffPress = () => {
      setStudentActive(false);
      setStaffActive(true);
      setUserType('staff');
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <View>
            <StatusBar style='light' />
            <View style={styles.ImageHeaderContainer}>
                <ImageBackground source={require("../assets/LoginImage.png")} style={styles.imageBackground}>
                    <SafeAreaView>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity>
                                <AdjustmentsHorizontalIcon color={'white'} size={38} style={styles.menuIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../assets/Logo.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.LoginHeader}>Login</Text>
                    </SafeAreaView>
                </ImageBackground>
            </View>
            <View style={styles.container}>
                <Pressable style={[styles.greenBtn, studentActive && styles.activeBtn]} onPress={handleStudentPress}>
                    <Text style={[styles.btnText, studentActive && styles.activeBtnText]}>Student</Text>
                </Pressable>
                <Pressable style={[styles.greenBtn, staffActive && styles.activeBtn]} onPress={handleStaffPress}>
                    <Text style={[styles.btnText, staffActive && styles.activeBtnText]}>Staff</Text>
                </Pressable>
            </View>
            <View style={styles.LoginFormContainer}>
                <Text style={styles.label}>Student/Staff ID:</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Username'
                    onChangeText={text => setUsername(text)}
                    value={username}
                />
                <Text style={styles.label}>Password:</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Password'
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.loginBtnContainer}>
                <Pressable style={styles.activeBtn} onPress={handlePress}>
                    <Text style={styles.btnText}>Login</Text>
                </Pressable>
                <Text style={styles.ForgotText}>Forgot Your Password?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ImageHeaderContainer: {
        width: '100%',
        height: '35%',
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
    container:{
        width: "100%",
        height: '18%',
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    greenBtn: {
        width: "40%",
        height: "70%",
        backgroundColor: "gray",
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeBtn: {
        width: "40%",
        height: "70%",
        backgroundColor: "#1B4332",
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 700,
    },
    LoginFormContainer: {
        width: "100%",
        height: "32%",
        padding: 40,
    },
    label:{
        fontSize: 25,
        fontWeight: 500,
    },
    textInput: {
        color: 'black',
        padding: 20,
        width: 350,
        height:50,
        backgroundColor: 'rgba(217,217,217,0.4)',
        borderRadius: 10,
        marginBottom: 20,
    },
    loginBtnContainer:{
        width: "100%",
        height: "12%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ForgotText: {
        marginTop: 20,
        fontSize: 20,
    }
})
export default Login