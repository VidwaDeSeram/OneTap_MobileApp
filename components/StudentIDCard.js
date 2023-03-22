import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const StudentIDCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/NSBMLogo.png')} style={styles.nsbmLogo}/>
        <Text style={styles.StudentText}>STUDENT</Text>
      </View>
      <View style={styles.slogan}>
        <Text style={styles.sloganTxt}>FIND GREATNESS IN EVERY STEP</Text>
      </View>
      <View style={styles.batchContainer}>
        <Text style={styles.batchText}>FACULTY OF COMPUTING | BATCH: 21.1</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsTxt}>
            <Text style={styles.textDet}>Name: Name Of the Student</Text>
            <Text style={styles.textDet}>ID: ID of The Student</Text>
            <Text style={styles.textDet}>NIC: NIC no.of Student</Text>
            <Text style={styles.textDetVal}>Valid Till: 2024/05/12</Text>
        </View>
        <View style={styles.ImageContainer}>
            <Text>Photo</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '33%',
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: 50,
        // For iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // For Android
        elevation: 5,
      },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    StudentText: {
        fontSize: 20,
        fontWeight: 800,
        color: '#397BB8',
    },
    nsbmLogo: {
        width: '30%',
    },
    slogan:{
        width: '100%',
        height: '10%',
        backgroundColor: '#2E7DC7',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    sloganTxt: {
        color: 'white',
    },
    batchContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: '#52A7F4',
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    detailsContainer:{
        width: '100%',
        heigh:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    detailsTxt: {
        flexDirection: 'column',
    },
    ImageContainer: {
        width: '30%',
        height: '120%',
        backgroundColor: '#D9D9D9'
    },
    textDet: {
        fontSize: 15,
        fontWeight: 600,
    },
    textDetVal:{
        marginTop: 25,
    }

})
export default StudentIDCard