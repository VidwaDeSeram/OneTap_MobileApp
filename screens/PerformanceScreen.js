import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core';

const PerformanceScreen = () => {
  
    const navigation = useNavigation();
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView>
      <Text>PerformanceScreen</Text>
    </SafeAreaView>
  )
}

export default PerformanceScreen