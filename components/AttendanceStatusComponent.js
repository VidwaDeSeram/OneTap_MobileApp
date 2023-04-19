import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {ChartBarIcon} from 'react-native-heroicons/outline'
import AttendanceCard from './AttendanceCard'

const AttendanceStatusComponent = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <ChartBarIcon size={35} color='#1B4332'/>
            <Text style={{fontSize:24, fontWeight:500}}>Attendance Status</Text>
        </View>
        <AttendanceCard/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems: 'center',
    },
    header:{
        width:240,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-around',
        marginTop: 20,
    }
})
export default AttendanceStatusComponent