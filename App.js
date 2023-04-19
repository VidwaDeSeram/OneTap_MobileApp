import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './screens/GetStarted';
import Home from './screens/Home';
import Login from './screens/Login';
import StudentProfile from './screens/StudentProfile';
import StaffProfile from './screens/StaffProfile';
import MapScreen from './screens/MapScreen';
import PaymentScreen from './screens/PaymentScreen';
import PerformanceScreen from './screens/PerformanceScreen';
import { useState } from 'react';
import * as Font from 'expo-font';
import CalendarScreen from './screens/CalendarScreen';
import StaffHomeScreen from './screens/StaffHomeScreen';
import PaypalComponent from './components/PaypalComponent';


export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'DMSants-Regular': require('./assets/fonts/DM_Sans/DMSans-Regular.ttf'),
      'NotoSerif-Regular': require('./assets/fonts/Noto_Serif/NotoSerif-Regular.ttf'),
      // Add any other styles of the font here
    });
    setFontLoaded(true);
  }
  loadFonts();
  if (!fontLoaded) {
    return null; // Render nothing while the font is still loading
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='StudentProfile' component={StudentProfile}/>
        <Stack.Screen name='StaffProfile' component={StaffProfile}/>
        <Stack.Screen name='MapScreen' component={MapScreen}/>
        <Stack.Screen name='PaymentScreen' component={PaymentScreen}/>
        <Stack.Screen name="Performance" component={PerformanceScreen}/>
        <Stack.Screen name="Calendar" component={CalendarScreen}/>
        <Stack.Screen name="StaffHome" component={StaffHomeScreen}/>
        <Stack.Screen name="PayPal" component={PaypalComponent}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
