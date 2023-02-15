import React, { useState } from "react";
import {
  Colors,
  SubTitle,
  PageLogoVerify,
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
import { Ionicons, Feather, Fontisto } from "@expo/vector-icons";
import { Header, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
const Confirm = (props) => {
  const nav = useNavigation();
  return (
    <View style={{ backgroundColor: Colors.secondary, height: 2000 }}>
      {/* status bar */}
      <StatusBar style="light" />

      {/* Header*/}
      <Header
        leftComponent={
          <Button
            onPress={() => {
              nav.navigate("Home");
            }}
            icon={
              <Ionicons name="chevron-back-outline" size={24} color="white" />
            }
          />
        }
        centerComponent={{
          text: "Thông tin nhận xe",
          style: {
            fontWeight: "bold",
            paddingVertical: 5,
            fontSize: 23,
            color: "#fff",
          },
        }}
      />

      <View style={{ height: 800 }}>
        {/*Đon hàng hoàn thành*/}
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VerifyContainer>
              <VerifyFirtstContainer>
                <View>
                  <VerifyTitleText>Bạn đã quét mã QR</VerifyTitleText>
                  <SubTitle style={{ fontSize: 17, marginLeft: 14 }}>
                    Kiểm tra thông tin
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
            <VerifyContainer style={{ marginTop: 20 }}>
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
                <VerifyValueText>ID xe</VerifyValueText>
                <VerifyValueText>165156156</VerifyValueText>
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Trạm mượn</VerifyValueText>
                <VerifyValueText>Khu A</VerifyValueText>
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Ngày mượn</VerifyValueText>
                <VerifyValueText>02/02/2023</VerifyValueText>
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Thời gian bắt đầu</VerifyValueText>
                <VerifyValueText>07:30</VerifyValueText>
              </VerifyFirtstContainer>
            </VerifyContainer>

            {/* Trạng thái vi phạm  */}
            <VerifyContainer style={{ marginTop: 10 }}>
              <VerifyTitleText>Trạng thái vi phạm</VerifyTitleText>
              <VerifyValueText style={{ fontSize: 15, marginLeft: 10 }}>
                Bạn được phép tiếp tục mượn xe.
              </VerifyValueText>
            </VerifyContainer>

            {/* Buttom  */}
            <VerifyContainer style={{ marginTop: 10 }}>
              <PageLogoVerify
                resizeMod="cover"
                source={require("../assets/velo.png")}
              />
              <Line />
              <ButtonVerify
                onPress={() => {
                  nav.navigate("Verify");
                }}
                style={{ backgroundColor: Colors.blue }}
              >
                <ButtonTextHome>Xác nhận</ButtonTextHome>
              </ButtonVerify>
              <ButtonVerify
                onPress={() => {
                  nav.navigate("Home");
                }}
              >
                <ButtonTextHome>Trang Chủ</ButtonTextHome>
              </ButtonVerify>
            </VerifyContainer>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Confirm;
