import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

const Background = ({ children }) => {
  return (
      <View>
    <ImageBackground source={require('../assets/leaves.jpg')} style={{height: '100%'}} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({})

export default Background;