import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const AttendanceCard = () => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
            <View style={styles.circle}><Text>1</Text></View>
            <Text style={{fontWeight:600, fontSize: 16, paddingLeft:10}}>Module Name</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center',justifyContent:'space-around', width: '90%',paddingTop:10}}>
            <Text style={{textDecorationLine:'underline'}}>Total No.of Lectures: </Text>
            <Text>No.of Lectures</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center',justifyContent:'space-around', width: '90%', paddingTop:3}}>
            <Text style={{textDecorationLine:'underline'}}>No.of Attended</Text>
            <Text>No of Attended</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center',justifyContent:'space-around', width: '90%', paddingTop:3}}>
            <Text style={{textDecorationLine:'underline'}}>No.of Absents</Text>
            <Text>No of Absents</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '80%',
        height: 150,
        backgroundColor: 'rgba(216, 243, 220, 0.46)',
        borderRadius: 10,
        padding:20,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 15,
        // For iOS
        shadowColor: 'rgba(0, 0, 0, 0.31)',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        // For Android
        elevation: 5,
    },
    circle:{
        width: 25,
        height: 25,
        borderRadius:50,
        borderWidth:4,
        borderColor:'#1B4332',
        flexDirection:'column',
        alignItems:'center',
    }
})
export default AttendanceCard