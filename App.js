import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Welcome from "./screens/Welcome";
import Verify from "./screens/Verify";
import Home from "./screens/HomeScreen/Home";
import Profile from "./screens/Profile";
import ScanQR from "./screens/ScanQR";
import ReportPage from "./screens/Reportpage/ReportPage";
import { closeConfig, config, HomeTransition, ProfileTransition, WelcomTransition } from "./components/Animation";
import Confirm from "./screens/Confirm";
import NofiticationSC from "./screens/Notification/NofiticationSC";
import RentalRing from "./screens/RentalRing/RentalRing";

import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform,StyleSheet } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

const Stack = createStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const AppStack = () => {

  return (
    <>
      <Stack.Navigator screenOptions={{ ...HomeTransition, headerShown: false }}>
        <Stack.Screen name="Home" component={Home} options={{ ...HomeTransition }} />
        <Stack.Screen name="Verify" component={Verify} options={{ ...ProfileTransition }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ScanQR" component={ScanQR} options={{ ...HomeTransition }} />
        <Stack.Screen name="RentalRing" component={RentalRing} options={{ ...ProfileTransition }} />
        <Stack.Screen name="Notification" component={NofiticationSC} options={{ ...HomeTransition }} />
        <Stack.Screen name="Profile" component={Profile} options={{ ...HomeTransition }} />
        <Stack.Screen name="ReportPage" component={ReportPage} />
        <Stack.Screen name="Confirm" component={Confirm} options={{ ...ProfileTransition }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ ...WelcomTransition }} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </>
  );
};
const App = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );


  // return (
  //   <NavigationContainer>
  //     <AppStack />
  //   </NavigationContainer>
  // );
};

export default App;

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
