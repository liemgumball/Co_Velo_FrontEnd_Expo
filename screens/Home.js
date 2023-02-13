import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import Background from '../components/Background';
import Btn from '../components/Btn';
import { darkGreen, green } from '../components/Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
      <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Co Vélo</Text>
      <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', bgColor: 'white', paddingTop: 100}}>
        <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
        <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </SafeAreaView>
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({});

export default Home;
