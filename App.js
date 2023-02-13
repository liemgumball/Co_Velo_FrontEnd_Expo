import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from './screens/Home';a
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import Verify from './screens/Verify';
// import Signup from './screens/Signup';
const Stack = createStackNavigator();
const App = () => {


  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Signup" component={Signup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Login></Login>
    //  <Signup />
    // <Welcome />
    <Verify/>
    );
};

export default App;
