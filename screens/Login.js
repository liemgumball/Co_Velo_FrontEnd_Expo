import React, { useState } from 'react';
import {
  StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea
  , LeftIcon, RightIcon, StyledInputLabel, StyledTextInput, Colors, ButtonText, StyledButton,
  Line, MsgBox, ExtraText, ExtraView, TextLink, TextLinkContent
} from "../components/styles"
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native';

//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import MyTextInput from '../components/MyTextInput';
import { useNavigation } from "@react-navigation/native";
const { brand, darkLight, primary, green } = Colors

const Login = (props) => {
  const [hidePassword, setHidePassword] = useState(true)
  const nav = useNavigation();
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style='dark' />
        <InnerContainer>
          <PageLogo resizeMod="cover" source={require("../assets/leaves.jpg")} />
          <PageTitle>Co Velo</PageTitle>
          <SubTitle>Account Login</SubTitle>

          <Formik initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) =>
            (<StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="example@gmail.com"
                placeholderTexcolor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="*********"
                placeholderTexcolor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton  
                // onPress={handleSubmit}
                onPress={() => nav.navigate("Home")}
              >
                <ButtonText>
                  Login
                </ButtonText>
              </StyledButton>
              <Line />
              <StyledButton onPress={handleSubmit} google={true}>
                <Fontisto name='google' color={primary} size={25} />
                <ButtonText google={true}>
                  Sign in with Google
                </ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtraText>
                  Don't have an account already?
                </ExtraText>
                <TextLink onPress={() => { props.navigation.navigate('Signup', { name: 'Signup' }) }}>
                  <TextLinkContent>Signup</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>)
            }
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};



export default Login;