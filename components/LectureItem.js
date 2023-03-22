import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LectureItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenContainer}>
        <Text style={{color:'white', fontSize: 18, padding: 5}}>11.00 p.m</Text>
        <Text style={{color:'white', fontSize: 18, padding: 5}}>13.00 p.m</Text>
      </View>
      <View style={styles.lectureTextContainer}>
        <Text style={{fontSize: 18, fontWeight: 700,}}>Mobile Application Development</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:'20%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 15,
    },
    greenContainer:{
        width: 110,
        height:'100%',
        backgroundColor: '#52B788',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lectureTextContainer:{
        width:"70%",
        height:"100%",
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default LectureItem