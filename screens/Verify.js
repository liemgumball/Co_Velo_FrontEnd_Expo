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
  Line,
  PageLogoVerify,
} from "../components/styles";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Ionicons, Feather, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { Header, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const Verify = (props) => {
  const nav = useNavigation();
  return (
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
              <VerifyTitleText style={{ fontSize: 20}}>Bạn đã trả xe thành công</VerifyTitleText>
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
              <VerifyValueText>Trạm trả</VerifyValueText>
              <VerifyValueText>Khu B</VerifyValueText>
            </VerifyFirtstContainer>

            <VerifyFirtstContainer>
              <VerifyValueText>Thời gian bắt đầu</VerifyValueText>
              <VerifyValueText>07:30</VerifyValueText>
            </VerifyFirtstContainer>

            <VerifyFirtstContainer>
              <VerifyValueText>Thời gian kết thúc</VerifyValueText>
              <VerifyValueText>07:40</VerifyValueText>
            </VerifyFirtstContainer>

            <VerifyFirtstContainer>
              <VerifyValueText>Thời gian sử dụng</VerifyValueText>
              <VerifyValueText>10 phút</VerifyValueText>
            </VerifyFirtstContainer>
          </VerifyContainer>

          {/* Trạng thái vi phạm  */}
          <VerifyContainer style={{ marginTop: 15 }}>
            <VerifyTitleText>Trạng thái vi phạm</VerifyTitleText>
            <VerifyValueText style={{ fontSize: 15, marginLeft: 10 }}>
              Bạn không vi phạm gì cả
            </VerifyValueText>
          </VerifyContainer>

          {/* Buttom  */}
            <ButtonVerify onPress={() => {
              nav.navigate("ReportPage");
            }}
            >
              <ButtonTextHome>Khiếu Nại</ButtonTextHome>
            </ButtonVerify>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Verify;
