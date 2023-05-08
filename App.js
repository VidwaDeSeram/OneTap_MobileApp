import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "./screens/GetStarted";
import Home from "./screens/Home";
import Login from "./screens/Login";
import StudentProfile from "./screens/StudentProfile";
import StaffProfile from "./screens/StaffProfile";
import MapScreen from "./screens/MapScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PerformanceScreen from "./screens/PerformanceScreen";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import CalendarScreen from "./screens/CalendarScreen";
import StaffHomeScreen from "./screens/StaffHomeScreen";
import PaypalComponent from "./components/PaypalComponent";

import * as Location from "expo-location";
import * as Notifications from "expo-notifications";
import * as TaskManager from "expo-task-manager";
import * as turf from "@turf/turf";
import axios from "axios";

import { requestLocationPermission } from "./locationPermission";
import { isPointInGeofence } from "./geofenceModel";

let currentGeofence = null;
let isProcessRunning = false;
let lectureDetailsArray;

const makeHTTPRequest = async () => {
  try {
    const response = await axios.post(
      "http://192.168.8.132:3000/api/attendance/add",
      {
        lectureID: JSON.stringify(lectureDetails._id),
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDU3ZDQ5NzhjZjM4NzBiYzJmMDY5ZSIsImlhdCI6MTY4MjI3NTY5MSwiZXhwIjoxNjg0ODY3NjkxfQ.aA54KC8rxkkpjAfaTvykagR9ayPlZYIQh414J17VaF8`,
        },
      }
    );

    console.log("Sent");
  } catch (error) {
    console.error("Error :", error);
  }
};

const lectureDetailsByUserID = async () => {
  try {
    const response = await axios.get(
      "http://192.168.8.132:3000/api/time/lectureDetailsByUserID",
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDU3ZDQ5NzhjZjM4NzBiYzJmMDY5ZSIsImlhdCI6MTY4MjI3NTY5MSwiZXhwIjoxNjg0ODY3NjkxfQ.aA54KC8rxkkpjAfaTvykagR9ayPlZYIQh414J17VaF8`,
        },
      }
    );

    lectureDetailsArray = response.data;
    console.log("received");
  } catch (error) {
    console.error("Error fetching lecture details:", error);
  }
};

const geofenceTimer = async (lectureDetails) => {
  let currentTime = new Date().getTime();
  console.log("test timer");
  console.log(lectureDetails.duration);
  console.log(currentTime);

  if (
    currentTime >= lectureDetails.startTime <= currentTime &&
    currentTime <= lectureDetails.endTime
  ) {
    let elapsedTime = 0;
    let realElapsedTime = 0;
    let tempTime = lectureDetails.startTime;
    let i = 0;

    while (
      realElapsedTime <= lectureDetails.duration * 0.75 &&
      currentTime < lectureDetails.endTime
    ) {
      console.log("test");
      while (
        currentGeofence.id === lectureDetails.geofenceID &&
        elapsedTime <= lectureDetails.duration * 0.75
      ) {
        elapsedTime = new Date().getTime() - tempTime;
        console.log(elapsedTime);
        i = 1;
      }
      if (i === 1) {
        realElapsedTime = elapsedTime + realElapsedTime;
        i = 0;
      }
      tempTime = currentTime;
    }
    if (realElapsedTime <= lectureDetails.duration * 0.75) {
      await makeHTTPRequest();
    }

    realElapsedTime = 0;
    elapsedTime = 0;
  }
};

const processMultipleLectureDetails = async () => {
  if (isProcessRunning) {
    return;
  }
  isProcessRunning = true;
  console.log("processMultipleLectureDetails");
  for (const lectureDetail of lectureDetailsArray) {
    await geofenceTimer(lectureDetail);
  }

  isProcessRunning = false;
};
const LOCATION_UPDATE_TASK = "locationUpdates";

TaskManager.defineTask(
  LOCATION_UPDATE_TASK,
  async ({ data: { locations } }) => {
    try {
      const location = locations[0];
      if (location) {
        const point = turf.point([
          location.coords.longitude,
          location.coords.latitude,
        ]);
        const geofence = isPointInGeofence(point);
        currentGeofence = geofence;
        if (geofence === undefined) {
        } else {
          await processMultipleLectureDetails();

          await Notifications.scheduleNotificationAsync({
            content: {
              title: "Geofence Alert",
              body: `You entered ${geofence.name}`,
            },
            trigger: null,
          });
        }
      }
      return "new-data";
    } catch (error) {
      console.error(error);
      return "failed";
    }
  }
);

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        return;
      }
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
        }),
      });
      await lectureDetailsByUserID();
      const isRegistered = await TaskManager.isTaskRegisteredAsync(
        LOCATION_UPDATE_TASK
      );
      if (!isRegistered) {
        await Location.requestBackgroundPermissionsAsync();
        await Location.startLocationUpdatesAsync(LOCATION_UPDATE_TASK, {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          showsBackgroundLocationIndicator: true,
          foregroundService: {
            notificationTitle: "Geofence monitoring",
            notificationBody: "Background location tracking is active",
          },
          pausesUpdatesAutomatically: false,
        });
      }

      const subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
        },
        (locationUpdate) => {
          setLocation(locationUpdate);
        }
      );

      return () => {
        subscription.remove();
      };
    })();
  }, []);

  const Stack = createNativeStackNavigator();

  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      "DMSants-Regular": require("./assets/fonts/DM_Sans/DMSans-Regular.ttf"),
      "NotoSerif-Regular": require("./assets/fonts/Noto_Serif/NotoSerif-Regular.ttf"),
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} />
        <Stack.Screen name="StaffProfile" component={StaffProfile} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="Performance" component={PerformanceScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="StaffHome" component={StaffHomeScreen} />
        <Stack.Screen name="PayPal" component={PaypalComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
