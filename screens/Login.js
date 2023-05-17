import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea
  , LeftIcon, RightIcon, StyledInputLabel, StyledTextInput, Colors, ButtonText, StyledButton,
  MsgBox
} from "../components/styles"
import { StatusBar } from 'expo-status-bar';
import { View, Text, Touchable, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import AnimatedLoader from 'react-native-animated-loader';
const { brand, darkLight, primary, green } = Colors

const Login = (props) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [idUser, setidUser] = useState("");
  const [username, seUsername] = useState("");
  const [violate_number, setViolet_num] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigation();
  const handleSubmit = async (value) => {
    setIsLoading(true);
    axios
      .post('https://covelo.onrender.com/user/login/', {
        "username": email,
        "password": pwd,
      })
      .then((response) => {
        if (response) {
          console.log(response.data);
          setidUser(response.data.id);
          seUsername(response.data.username);
          setViolet_num(response.data.violate_number);
          saveLoginCredentials(response.data);
          setIsLoading(false);
          nav.navigate("Home");
        }
        else {
          setIsLoading(false);
          alert('Sai tên tài khoản hoặc mật khẩu');
        }
      })
      .catch((error) => {
        setIsLoading(false);
        alert('Sai tên tài khoản hoặc mật khẩu');
      });
  }
  // Save login credentials
  const saveLoginCredentials = async (data) => {
    try {
      // await AsyncStorage.setItem('idUser', idUser);
      // await AsyncStorage.setItem('username', username);
      // await AsyncStorage.setItem('violate_number', violate_number);
      await AsyncStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      console.log('Error saving login credentials: ', error);
    }
  }

  const retrieveData = async () => {
    try {
      const data = await AsyncStorage.getItem('user');
      if (data) {
        const user = JSON.parse(data);
        // console.log('Giá trị đã lấy:', user);
  
        // // Sử dụng biến user ở đây
        // console.log('Username:', user.username);
        // console.log('Token:', user.token);
        // console.log('ID:', user.id);
        // console.log('Violate Number:', user.violate_number);
      } else {
        console.log('Không tìm thấy giá trị user trong AsyncStorage');
      }
    } catch (error) {
      console.log('Lỗi khi lấy giá trị:', error);
    }
  };

  retrieveData();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 2000);
  }, []);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style='dark' />
        <InnerContainer>
          <PageLogo resizeMod="cover" source={require("../assets/leaves.jpg")} />
          <PageTitle>Co Velo</PageTitle>
          <SubTitle>Account Login</SubTitle>

          <StyledFormArea>
            <MyTextInput
              label="Email Address"
              icon="mail"
              value={email}
              onChangeText={setEmail}
              placeholder="example@gmail.com"
              placeholderTexcolor={darkLight}
              keyboardType="email-address"
            />
            <MyTextInput
              label="Password"
              icon="lock"
              placeholder="*********"
              placeholderTexcolor={darkLight}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              value={pwd}
              onChangeText={setPwd}
            />
            <StyledButton
              onPress={handleSubmit}
            >
              <ButtonText>
                Login
              </ButtonText>
            </StyledButton>


          </StyledFormArea>
          {isLoading && (
            <AnimatedLoader
              visible={visible}
              overlayColor="rgba(255,255,255,0.75)"
              animationStyle={styles.lottie}
              speed={1}>
            </AnimatedLoader>
          )}
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {
        isPassword && (
          <RightIcon onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons name={hidePassword ? "md-eye-off" : "md-eye"} size={30} color={darkLight} />
          </RightIcon>
        )
      }
    </View>
  )
}

export default Login;
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});