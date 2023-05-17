import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { Button, Header } from "react-native-elements";
import { VerifyContainer, VerifyTitleText } from "../../components/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const RentalRing = () => {
    const [timer, setTimer] = useState(0);
    const nav= useNavigation();
    
    useEffect(() => {
        setTimer(10); // reset timer về 600 giây khi component được mount hoặc remount
        const interval = setInterval(() => {
          setTimer(timer => timer - 1);
        }, 1000);
        
        // Clear interval khi component bị unmount
        return () => clearInterval(interval);
      }, []);
      
    return (
        <View style={{ height: "100%" }}>
            {/* status bar */}
            <StatusBar style="light" />

            {/* Header*/}
            <Header
                leftComponent={
                    <Button
                        onPress={() => {
                            nav.navigate('Confirm');
                        }}
                        icon={
                            <Ionicons name="chevron-back-outline" size={24} color="white" />
                        }
                    />
                }
                centerComponent={{
                    text: "Đang mượn xe",
                    style: {
                        fontWeight: "bold",
                        paddingVertical: 5,
                        fontSize: 23,
                        color: "#fff",
                    },
                }}
            />


                <View>
                    <VerifyTitleText  style={{textAlign: "center", marginTop: 20}}  >Thời gian mượn xe còn lại </VerifyTitleText>
                    <CountDown
                        until={5}
                        size={35}
                        onFinish={() => alert('Hết giờ thuê xe, vui lòng trả xe về trạm')}
                        digitTxtStyle={{ color: '#1CC625' }}
                        timeToShow={["M","S"]}
                        timeLabels={{m:'phút',s:'giây'}}
                        digitStyle={{
                            backgroundColor: "#fff",
                            borderWidth: 2,
                            borderColor: '#1CC625',
                        }}
                        showSeparator
                    />
                </View>
        </View>
    )
}

export default RentalRing
