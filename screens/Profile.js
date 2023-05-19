import React from "react";
import { SafeAreaView } from "react-native";
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBar from "./NavbarScreen/NavBar";
import { useState } from "react";
import { useEffect } from "react";
function Profile() {
  const nav = useNavigation();

  const removeMultipleItemsFromStorage = async (keys) => {
    try {
      await AsyncStorage.multiRemove(keys);
      console.log(`Đã xóa các key ${keys.join(', ')} thành công!`);
    } catch (error) {
      console.log(`Lỗi khi xóa các key ${keys.join(', ')}: ${error}`);
    }
  };
  function handleLogout() {
    removeMultipleItemsFromStorage(['idU', 'UserName', 'Violate_number']);
    nav.navigate("Welcome");
  }

  const [username, setusername] = useState("");

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const data = await AsyncStorage.getItem('user');
        if (data) {
          const user = JSON.parse(data);
          setusername(user.username);
        } else {
          console.log('Không tìm thấy giá trị user trong AsyncStorage');
        }
      } catch (error) {
        console.log('Lỗi khi lấy giá trị:', error);
      }
    };
    retrieveData();
  }, []);

  return (
    <>
      <SafeAreaView style={{ height: "93%" }}>
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
            <UserNameText> {username} </UserNameText>
          </ProfileContainerColumn>
        </ProfileContainer>
        <Line />
        {/* Set Photo */}
        <ButtonFull>
          <MaterialIcons name="add-a-photo" size={35} color="black" />
          <ButtonTextProfile >Set Profile Photo</ButtonTextProfile>
        </ButtonFull>
        <Line />

        {/* Reset password */}

        <ButtonFull >
          <MaterialCommunityIcons name="form-textbox-password" size={34} color="black" />
          <ButtonTextProfile >Change Password</ButtonTextProfile>
        </ButtonFull>
        <Line />

        {/* logout */}

        <ButtonFull onPress={handleLogout}>
          <SimpleLineIcons name="logout" size={35} color="black" />
          <ButtonTextProfile>Logout</ButtonTextProfile>
        </ButtonFull>

        <Line />
      </SafeAreaView>
      <NavBar />
    </>
  );
}

export default Profile;
