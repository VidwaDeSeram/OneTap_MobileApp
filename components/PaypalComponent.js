import { View,ActivityIndicator } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { WebView } from 'react-native-webview';


const PaypalComponent = () => {
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
  return (
    <View style={{width:'100%', height:'100%', flex: 1}}>
              {paymentUrl ? (
                <WebView
                    source={{ uri: paymentUrl }}
                    startInLoadingState
                    renderLoading={() => <ActivityIndicator />}
                />
            ) : (
                <ActivityIndicator />
            )}
            </View>
  )
}

export default PaypalComponent