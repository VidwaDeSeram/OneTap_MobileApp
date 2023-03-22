import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { AdjustmentsHorizontalIcon} from 'react-native-heroicons/outline';
import MapView, { Marker } from 'react-native-maps';
import { SearchBar } from 'react-native-elements';

const MapScreen = () => {
  const navigation = useNavigation();

  const NSBM_GREEN_UNIVERSITY_LATITUDE = 6.820894;
  const NSBM_GREEN_UNIVERSITY_LONGITUDE = 80.039723;
  const NSBM_GREEN_UNIVERSITY_LATITUDE_DELTA = 0.005;
  const NSBM_GREEN_UNIVERSITY_LONGITUDE_DELTA = 0.005;

  const handleSearch = (text) => {
    setSearchText(text);
    // TODO: Implement search functionality
  };


  useLayoutEffect(()=> {
    navigation.setOptions({
        headerShown: false,
    })
}, [])
  return (
    <View style={{flex:1}}>
      <StatusBar style='light'/>
      <View style={styles.ImageHeaderContainer}>
        <ImageBackground source={require("../assets/MapScreenImg.png")} style={styles.imageBackground}>
          <SafeAreaView>
            <View style={styles.headerContainer}>
              <TouchableOpacity>
                <AdjustmentsHorizontalIcon color={'white'} size={38} style={styles.menuIcon}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/Logo.png')}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.LoginHeader}>University Map</Text>
          </SafeAreaView>
        </ImageBackground>
      </View>
      {/* Search Bar Start*/}
      <View style={styles.SearchContainer}>
        <SearchBar
          placeholder="Search"
          onChangeText={handleSearch}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
        />
      </View>
      
      {/* Search Bar End */}
      <View style={styles.MapViewContainer}>
      
      <MapView
        style={{ flex: 1, borderRadius: 15 }}
        initialRegion={{
          latitude: NSBM_GREEN_UNIVERSITY_LATITUDE,
          longitude: NSBM_GREEN_UNIVERSITY_LONGITUDE,
          latitudeDelta: NSBM_GREEN_UNIVERSITY_LATITUDE_DELTA,
          longitudeDelta: NSBM_GREEN_UNIVERSITY_LONGITUDE_DELTA,
        }}
        region={{
          latitude: NSBM_GREEN_UNIVERSITY_LATITUDE,
          longitude: NSBM_GREEN_UNIVERSITY_LONGITUDE,
          latitudeDelta: NSBM_GREEN_UNIVERSITY_LATITUDE_DELTA,
          longitudeDelta: NSBM_GREEN_UNIVERSITY_LONGITUDE_DELTA,
        }}
        >
        <Marker
          coordinate={{
            latitude: NSBM_GREEN_UNIVERSITY_LATITUDE,
            longitude: NSBM_GREEN_UNIVERSITY_LONGITUDE,
          }}
          title="NSBM Green University"
          description="National School of Business Management"
        />
      </MapView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ImageHeaderContainer: {
    width: '100%',
    height: '29%',
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
      fontFamily:'NotoSerif-Regular',
      color: 'white',
      marginTop: 80,
      marginLeft: 20,
  },
  MapViewContainer: {
    width: "100%",
    height: "100%",
    borderColor: "rgba(27, 67, 50, 0.5)",
    borderWidth: 15,
    borderTopLeftRadius:35,
    borderTopRightRadius: 35,
    marginTop: 10,
  },
  SearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  searchBarContainer: {
    width: '90%',
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRadius: 8,
  },
  searchBarInputContainer: {
    backgroundColor: 'rgba(217,217,217,0.4)',
    borderRadius: 10,
  },
  searchBarInput: {
    backgroundColor: 'rgba(217,217,217,0)',
  },
})
export default MapScreen