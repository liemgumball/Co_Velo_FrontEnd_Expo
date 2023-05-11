import React, { useState } from "react";
import {
  Colors,
  SubTitle,
  VerifyContainer,
  VerifyFirtstContainer,
  VerifyTitleText,
  VerifyValueText,
  ButtonTextHome,
  ButtonVerify,
  HomeHistoryTableColumn,
  TableHistoryText,
  Line,
} from "../components/styles";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Ionicons, Feather, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { Header, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { PageLogoVerify } from "../components/styles";
const Confirm = (props) => {
  const nav = useNavigation();
  return (
    <>
      <View style={{ heigth: "100%" }}>
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
            text: "Thông tin trả xe",
            style: {
              fontWeight: "bold",
              paddingVertical: 5,
              fontSize: 23,
              color: "#fff",
            },
          }}
        />

        {/*Đon hàng hoàn thành*/}
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VerifyContainer style={{ marginTop: 60 }}>
              <VerifyFirtstContainer>
                <VerifyTitleText style={{ fontSize: 20 }}>Xác nhận thông tin lượt mượn</VerifyTitleText>
                <MaterialIcons name="verified" size={34} style={{ top: 5 }} color="black" />
              </VerifyFirtstContainer>
            </VerifyContainer>

            {/* THong tin đơn hàng  */}
            <VerifyContainer style={{ marginTop: 15 }}>
              <VerifyFirtstContainer>
                <VerifyTitleText>Mã lượt mượn</VerifyTitleText>
                <VerifyValueText style={{ fontWeight: "bold" }}>
                  239765892392
                </VerifyValueText>
              </VerifyFirtstContainer>


              <VerifyFirtstContainer>
                <VerifyValueText>Ngày mượn</VerifyValueText>
                <VerifyValueText>02/02/2023</VerifyValueText>
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Trạm mượn </VerifyValueText>
                <VerifyValueText>Khu A</VerifyValueText>
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Thời gian bắt đầu</VerifyValueText>
                <VerifyValueText>07:30</VerifyValueText>
              </VerifyFirtstContainer>

            </VerifyContainer>


            <VerifyContainer style={{ marginTop: 10 }}>
              <VerifyTitleText>Trạng thái vi phạm</VerifyTitleText>
              <VerifyValueText style={{ fontSize: 15, marginLeft: 10 }}>
                Bạn được phép tiếp tục mượn xe.
              </VerifyValueText>
            </VerifyContainer>


            {/* Buttom  */}
            <ButtonVerify onPress={() => {
              nav.navigate("Verify");
            }}
            >
              <ButtonTextHome>Xác nhận</ButtonTextHome>
            </ButtonVerify>

          </ScrollView>
        </SafeAreaView>
      </View>

    </>

  );
};

export default Confirm;
