import { View, Text, Button, Dimensions, StyleSheet } from 'react-native'
import { StyledContainer, ScannerContainer, Colors, StyledButton, ButtonText } from '../components/styles'
import { BarCodeScanner } from 'expo-barcode-scanner'
import React, { useState, useEffect } from 'react'
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen'
import { StatusBar } from 'expo-status-bar'

const ScanQR = () => {
  const { brand } = Colors
  const [hasPermission, setHasPermission] = useState(null);
  const [isScanned, setIsScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setIsScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };


  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <StyledContainer>

        <Text>Requesting for camera permission</Text>
      </StyledContainer>)
  }
  if (hasPermission === false) {
    return (
      <StyledContainer>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </StyledContainer>
    )
  }

  // Return the View
  return (
    <ScannerContainer>
      <StatusBar style='dark' />
      <BarCodeScanner
        onBarCodeScanned={isScanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}>
      </BarCodeScanner>
      <View style={{ flex: 1, position: "absolute", alignItems: "center", justifyContent: "center" }}>
        <View style={{ borderWidth: 5, borderColor: brand, width: 200, height: 200, borderRadius: 10 ,margin:120}}></View>

        <StyledButton>
          <ButtonText>Go Back</ButtonText>
        </StyledButton>
      </View>
    </ScannerContainer>
  )
}

export default ScanQR