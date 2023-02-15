import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import Verify from './screens/Verify';
import Home from './screens/Home';
import Profile from './screens/Profile';
import ScanQR from './screens/ScanQR';
const Stack = createStackNavigator();
const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="ScanQR" component={ScanQR} />
      </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App;
