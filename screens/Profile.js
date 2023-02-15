import React from "react";
import {  SafeAreaView} from "react-native";
import {
  ButtonFull,
  ButtonTextProfile,
  Line,
  ProfileContainer,
  ProfileContainerColumn,
  ProfileImage,
  StatusText,
  UserNameText,
} from "../components/styles";
import {
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Button, Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../components/styles";
import { Ionicons } from "@expo/vector-icons";
function Profile() {
  const nav = useNavigation();
  return (
    <SafeAreaView>
      <Header
        leftComponent={
          <Button
            onPress={() => {
              nav.navigate("Home");
            }}
            icon={
              // <Fontisto name="arrow-left" color={Colors.primary} size={15} />
              <Ionicons name="chevron-back-outline" size={24} color="white" />
            }
          />
        }
        centerComponent={{
          text: "Thông tin tài khoản",
          style: {
            fontWeight: "bold",
            paddingVertical: 5,
            fontSize: 23,
            color: "#fff",
          },
        }}
        rightComponent={
          <Button
            icon={<Fontisto name="qrcode" color={Colors.primary} size={20} />}
          />
        }
      ></Header>

      {/* Avatar + name  */}

      <ProfileContainer>
          <ProfileImage 
           resizeMod="contain"
           source={require("../assets/profile.png")}
          />
          <ProfileContainerColumn>
            <UserNameText>Nhật Nam Hoàng </UserNameText>
            <StatusText>Online</StatusText>
          </ProfileContainerColumn>
      </ProfileContainer>
      <Line/>
      {/* Set Photo */}
      <ButtonFull>
        <MaterialIcons name="add-a-photo" size={35} color="black" />
        <ButtonTextProfile >Set Profile Photo</ButtonTextProfile>
      </ButtonFull>
      <Line />

      {/* Reset password */}

      <ButtonFull >
        <MaterialCommunityIcons name="form-textbox-password" size={34} color="black"/>
        <ButtonTextProfile >Change Password</ButtonTextProfile>
      </ButtonFull>
      <Line />

      {/* logout */}

      <ButtonFull onPress={() => {nav.navigate("Welcome")}}>
        <SimpleLineIcons name="logout" size={35} color="black" />
        <ButtonTextProfile>Logout</ButtonTextProfile>
      </ButtonFull>

      <Line />
    </SafeAreaView>
  );
}

export default Profile;
