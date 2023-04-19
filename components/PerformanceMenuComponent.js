import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import{AcademicCapIcon,ChartBarIcon,DocumentChartBarIcon} from 'react-native-heroicons/outline'
import React from 'react'

const PerformanceMenuComponent = () => {
  return (
    <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection:'column', alignItems:'center',paddingRight: 40}}>
                <AcademicCapIcon size={40} color='#1B4332'/>
                <Text>Academics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'column', alignItems:'center',paddingRight: 40}}>
                <ChartBarIcon size={40} color='#1B4332'/>
                <Text>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'column', alignItems:'center'}}>
                <DocumentChartBarIcon size={40} color='#1B4332'/>
                <Text>Assignment</Text>
            </TouchableOpacity>
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
        flexDirection:'row',
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
    }
})
export default PerformanceMenuComponent