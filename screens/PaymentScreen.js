import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, SafeAreaView, TextInput, Pressable } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { AdjustmentsHorizontalIcon, CreditCardIcon} from 'react-native-heroicons/outline';
import { Picker } from '@react-native-picker/picker';
import { WebView } from 'react-native-webview';
import PaypalComponent from '../components/PaypalComponent';

const PaymentScreen = () => {
    const navigation = useNavigation();

    const [paymentUrl, setPaymentUrl] = useState(null);

    useEffect(() => {
        createPayment();
    }, []);

    const createPayment = async () => {
      try {
        const response = await fetch('http://172.20.10.6:3000/create-payment');
        const data = await response.json();
        console.log(data); // <-- add this line to log the data
        const { approvalLink } = data;
        setPaymentUrl(approvalLink);
      } catch (error) {
        console.error('Failed to create payment:', error);
      }
    };
    

    const [selectedOption, setSelectedOption] = useState('');
    const [showPayment, setShowPayment] = useState(false);

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const handleSelectOption = (option) => {
      setSelectedOption(option);
      setShowPayment(true);
    };
    
    const PaypalScreen = () =>{
      navigation.navigate('PayPal');
    }

  return (
    <View style={{flex:1}}>
      <StatusBar style='light'/>
      <View style={styles.ImageHeaderContainer}>
        <ImageBackground source={require("../assets/PaymentPageImg.png")} style={styles.imageBackground}>
          <SafeAreaView>
            <View style={styles.headerContainer}>
              <TouchableOpacity>
                <AdjustmentsHorizontalIcon color={'white'} size={38} style={styles.menuIcon}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/Logo.png')}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.LoginHeader}>Payment </Text>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View style={styles.PaymentOptionContainer}>
        <View style={styles.PaymentOptionRow}>
            <CreditCardIcon color='#1B4332' size={40} style={{marginRight: 20}}/>
            <Text style={styles.paymentOptionText}>Payment Options</Text>
        </View>
        <Picker style={{width:'100%',marginTop: -40,}} onValueChange={handleSelectOption} selectedValue={selectedOption}>
            <Picker.Item label='Semester Fees' value='Semester Fees'/>
            <Picker.Item label='Hostel Fees' value='Hostel Fees'/>
            <Picker.Item label='GYM Fees' value='GYM Fees'/>
            <Picker.Item label='Other Fees' value='Other Fees'/>
        </Picker>
      </View>
      {/* Payment Section */}
      {showPayment && (
        <View style={styles.PaymentSection}>
            <Text style={styles.paymentOptionText}>{selectedOption}</Text>
            <View style={styles.PaymentInputContainer}>
                <TextInput style={styles.PaymentInput} placeholder="Enter Amount"/>
                <TextInput style={styles.PaymentInput} placeholder="Enter Payment Method"/>
            </View>
            <Pressable style={styles.SelectBtn} onPress={PaypalScreen}>
              <Text style={styles.SelectText}>Pay Now</Text>
            </Pressable>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    ImageHeaderContainer: {
      flexDirection: 'column',
      width: '100%',
      height: '32%',
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
    PaymentOptionContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    PaymentOptionRow:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    paymentOptionText:{
        fontSize: 25,
        fontWeight: 700,
    },
    SelectBtn:{
        backgroundColor: "#1B4332",
        width: '40%',
        height: '17%',
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    SelectText:{
        color: 'white',
        fontSize: 30,
        fontWeight: 500,
    },
    PaymentSection: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
    },
    PaymentInput:{ 
        color: 'white',
        padding: 20,
        width: 350,
        height:50,
        backgroundColor: 'rgba(217,217,217,0.4)',
        borderRadius: 10,
        marginTop: 10,
    }

  })
export default PaymentScreen