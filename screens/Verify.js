import React, { useState } from "react";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledTextInput,
  Colors,
  ButtonText,
  StyledButton,
  Line,
  MsgBox,
  ExtraText,
  ExtraView,
  TextLink,
  ButtonSmail,
  DetailText,
  TitleText,
  TextLinkContent,
} from "../components/styles";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { Icon } from "@iconify/react";
const { brand, darkLight, primary, green } = Colors;

const Verify = (props) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMod="cover"
            source={require("../assets/verified.png")}
          />
          <PageTitle>Thông tin xe </PageTitle>
          <SubTitle>Vui lòng xác nhận thông tin</SubTitle>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                {/* <MsgBox>........</MsgBox> */}
                <View
                  style={{
                    justifyContent: "space-between",
                    padding: 20,
                    width: 310,
                    height: 300,
                    backgroundColor: "beige",
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TitleText google={true}>Người thuê : </TitleText>
                    <DetailText google={true}>Lê Thị Nhật Hà</DetailText>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TitleText google={true}>ID Người thuê : </TitleText>
                    <DetailText google={true}>1231231232</DetailText>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TitleText google={true}>ID xe mượn : </TitleText>
                    <DetailText google={true}>12adfs2</DetailText>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TitleText google={true}>Thời gian mượn : </TitleText>
                    <DetailText google={true}>10 phút</DetailText>
                  </View>
                </View>

                {/* Button */}
                <Line />
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
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default Verify;

export default Verify