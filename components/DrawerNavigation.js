import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function DrawerNavigation() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="PaymentScreen">
          <Drawer.Screen name="PaymentScreen" component={PaymentScreen} />
          <Drawer.Screen name="MapScreen" component={MapScreen} />
          <Drawer.Screen name="CalendarScreen" component={CalendarScreen} />
          <Drawer.Screen name="AttendanceScreen" component={AttendanceScreen} />
        </Drawer.Navigator>
      );
}
