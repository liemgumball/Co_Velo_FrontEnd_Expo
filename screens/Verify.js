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
} from "../components/styles";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Ionicons, Feather, Fontisto } from "@expo/vector-icons";
import { Header, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const Verify = (props) => {
  const nav = useNavigation();
  return (
    <View style={{ backgroundColor: Colors.secondary, height: "100%" }}>
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
      <View style={{ height: 800 }}>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VerifyContainer>
              <VerifyFirtstContainer>
                <View>
                  <VerifyTitleText>Bạn đã trả xe thành công</VerifyTitleText>
                  <SubTitle style={{ fontSize: 17, marginLeft: 14 }}>
                    Cảm ơn bạn đã sử dụng dịch vụ
                  </SubTitle>
                </View>
                <Feather
                  style={{ marginRight: 20, marginTop: 10 }}
                  name="check-square"
                  size={47}
                  color="blue"
                />
              </VerifyFirtstContainer>
            </VerifyContainer>

            {/* THong tin đơn hàng  */}
            <VerifyContainer style={{ height: "36%", marginTop: 10 }}>
              <VerifyFirtstContainer>
                <VerifyTitleText>Mã lượt mượn</VerifyTitleText>
                <VerifyValueText style={{ fontWeight: "bold" }}>
                  239765892392
                </VerifyValueText>
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Họ tên</VerifyValueText>
                <VerifyValueText>Nhật Nam Hoàng</VerifyValueText>
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Ngày mượn</VerifyValueText>
                <VerifyValueText>02/02/2023</VerifyValueText>
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
            <VerifyContainer style={{ height: "10%", marginTop: 10 }}>
              <VerifyTitleText>Trạng thái vi phạm</VerifyTitleText>
              <VerifyValueText style={{ fontSize: 15, marginLeft: 10 }}>
                Bạn không vi phạm gì cả
              </VerifyValueText>
            </VerifyContainer>

            {/* Buttom  */}
            <VerifyContainer style={{ height: "50%", marginTop: 10 }}>
              <PageLogoVerify
                resizeMod="cover"
                source={require("../assets/velo.png")}
              />
              <Line />
              <ButtonVerify  onPress={() => {
                  nav.navigate("ReportPage");
                }}
              >
                <ButtonTextHome>Khiếu Nại</ButtonTextHome>
              </ButtonVerify>

              <ButtonVerify  onPress={() => {
                  nav.navigate("Home");
                }} style={{ backgroundColor: Colors.blue }}>
                <ButtonTextHome>Trang Chủ</ButtonTextHome>
              </ButtonVerify>
            </VerifyContainer>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Verify;
