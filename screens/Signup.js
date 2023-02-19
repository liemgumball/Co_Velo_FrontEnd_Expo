import React, { useState } from 'react';
import {
  StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea
  , LeftIcon, RightIcon, StyledInputLabel, StyledTextInput, Colors, ButtonText, StyledButton,
  Line, MsgBox, ExtraText, ExtraView, TextLink, TextLinkContent
} from "../components/styles"
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import MyTextInput from '../components/MyTextInput'
import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native';


//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const { brand, darkLight, primary, green } = Colors

const Signup = (props) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date(2023, 1, 1))

  const [dob, setDob] = useState()
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false)
    setDate(currentDate)
    setDob(currentDate)
  }

  const showDatePicker = () => {
    setShow(true)
  }
  return (
    <KeyboardAvoidingWrapper>

      <StyledContainer>

        <StatusBar style='dark' />
        <InnerContainer>
          <PageTitle>Co Velo</PageTitle>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode='date'
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <Formik initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) =>
            (<StyledFormArea>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="Example"
                placeholderTexcolor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="liem@gmail.com"
                placeholderTexcolor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Date of birth"
                icon="calendar"
                placeholder="YYYY - MM - DD"
                placeholderTexcolor={darkLight}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
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
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="*********"
                placeholderTexcolor={darkLight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit} google={true}>
                <ButtonText google={true}>
                  Sign up
                </ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtraText>
                  Have an account already?
                </ExtraText>
                <TextLink>
                  <TextLinkContent onPress={() => { props.navigation.navigate('Login', { name: 'Login' }) }}>Login</TextLinkContent>
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

export default Signup;