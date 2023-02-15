import React, { useState } from "react";
import { TitleTextHome, Colors, Line, styles, InnerContainer, PageLogo, SubTitle, PageTitle, PageLogoVerify, TitleText, DetailText, StyledFormArea, ButtonSmail, ButtonText } from "../components/styles";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import { Header, Button } from "react-native-elements";
const { brand, darkLight, primary, green } = Colors;
const Verify = (props) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      {/* status bar */}
      <StatusBar style="light" />

      {/* Header*/}
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={
            <Button
              onPress={() => nav.navigate("Profile")}
              icon={<Fontisto name="male" color={primary} size={12} />}
            />
          }
          centerComponent={{
            text: "Xin chào, Nhật Nam",
            style: {
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "#fff",
            },
          }}
          rightComponent={
            <Button
              icon={<Fontisto name="qrcode" color={primary} size={12} />}
            />
          }
        ></Header>
      </View>

      {/* Icon logo */}
      <View style={{ flex: 3 }}>
      <InnerContainer>
          <PageLogoVerify
            resizeMod="cover"
            source={require("../assets/verified.png")}
          />
          <PageTitle>Trả xe thành công</PageTitle>
          <SubTitle>Vui lòng xác nhận thông tin trả xe</SubTitle>
        </InnerContainer>
      </View>

      {/* THong tin  */}
      <View style={{ flex: 5 }}>
        <View style={[styles.containerPadding20]}>
          <View style={{ flex: 6, paddingHorizontal: 8 }}>
            <View
              style={[
                styles.container,
                {
                  flexDirection: "column",
                  backgroundColor: "#EEF1F5",
                  borderRadius: 10,
                },
              ]}
            >
              <SafeAreaView style={styles.container}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={styles.scrollView}
                >
                  <View style={styles.containerRow}>
                  <TitleText>Người thuê : </TitleText>
                  <DetailText>Lê Thị Nhật Hà</DetailText>
                  </View>
                  <View style={styles.containerRow}>
                  <TitleText>Người thuê : </TitleText>
                  <DetailText>Lê Thị Nhật Hà</DetailText>
                  </View>
                  <View style={styles.containerRow}>
                  <TitleText>Người thuê : </TitleText>
                  <DetailText>Lê Thị Nhật Hà</DetailText>
                  </View>
                  <View style={styles.containerRow}>
                  <TitleText>Người thuê : </TitleText>
                  <DetailText>Lê Thị Nhật Hà</DetailText>
                  </View>
                  <View style={styles.containerRow}>
                  <TitleText>Người thuê : </TitleText>
                  <DetailText>Lê Thị Nhật Hà</DetailText>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </View>
          </View>
          <Line />
        </View>
      </View>
      {/* Button  */}
      <View style={{ flex: 2 }}>
      <InnerContainer>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    width: 130,
                  }}
                >
                  <ButtonSmail onPress={handleSubmit} google={true}>
                    <Fontisto name="close" color={primary} size={25} />
                    <ButtonText google={true}>Trở lại</ButtonText>
                  </ButtonSmail>
                </View>
                <View>
                  <ButtonSmail onPress={handleSubmit} google={true}>
                    <Fontisto name="star" color={primary} size={20} />
                    <ButtonText google={true}>Xác nhận</ButtonText>
                  </ButtonSmail>
                </View>
              </View>
            </StyledFormArea>
          )}
        </Formik>
        </InnerContainer>
      </View>
    </View>
  );
};

export default Verify;
