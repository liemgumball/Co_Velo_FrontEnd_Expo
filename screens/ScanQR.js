import { View, Text, Button, Dimensions, StyleSheet } from 'react-native'
import { StyledContainer, ScannerContainer, Colors, StyledButton, ButtonText } from '../components/styles'
import { BarCodeScanner } from 'expo-barcode-scanner'
import React, { useState, useEffect } from 'react'
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/core'
import NavBar from './NavbarScreen/NavBar'
import AnimatedLoader from 'react-native-animated-loader';
import axios from 'axios'
const ScanQR = () => {
  const nav = useNavigation()
  const { brand } = Colors
  const [hasPermission, setHasPermission] = useState(null);
  const [isScanned, setIsScanned] = useState(false);
  const [ID, setID] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  const send_ID_Bicycle = async () => {
    setIsLoading(true);
    setIsScanned(true);
    console.log(ID);
    axios
      .get(`https://covelo.onrender.com/bicycle/id=${ID}/`)
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        const id = data.id;
        const station_id = data.station_id;
        const locker_id = data.locker_id;
        const magnetic_key = data.magnetic_key;
        setIsLoading(false);
        nav.navigate("Confirm", { ID: id, Station_id: station_id, Locker_id: locker_id, Magnetic_key: magnetic_key });
      })
      .catch((error) => {
        console.log(error);
        if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
          alert("Xe bạn quét đang được sử dụng, không thể mượn");
        }
        setIsLoading(false);
      });
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setIsScanned(true);
    if (checkArrayForText(data))
      send_ID_Bicycle();
    else {
      alert("Mã QR bị lỗi, hãy quét lại");
    }
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
    setIsScanned(false);
    setInterval(() => {
      setVisible(!visible);
    }, 2000);
  }, []);


  function checkArrayForText(data) {
    // console.log(text);
    if (data.includes("COVELO_BKDN_")) {
      console.log("Chuỗi TEXT chứa đoạn COVELO_BKDN_");
      setID(data[12]);
      return true;
    }
    else {
      return false;
    }
  }

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

  return (
    <>
      <ScannerContainer>
        <StatusBar style='auto' />
        <BarCodeScanner
          onBarCodeScanned={isScanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}>
        </BarCodeScanner>
        {isLoading && (
          <AnimatedLoader
            visible={visible}
            overlayColor="rgba(255,255,255,0.75)"
            animationStyle={styles.lottie}
            speed={1}>
          </AnimatedLoader>
        )}
        <View style={{ flex: 1, position: "absolute", alignItems: "center", justifyContent: "center" }}>
          <View style={{ borderWidth: 5, borderColor: brand, width: 200, height: 200, borderRadius: 10, margin: 120 }}></View>

          <StyledButton onPress={() => setIsScanned(false)} >
            <ButtonText>Quét lại</ButtonText>
          </StyledButton>
        </View>
      </ScannerContainer>
      <NavBar />
    </>
  )
}

export default ScanQR

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});