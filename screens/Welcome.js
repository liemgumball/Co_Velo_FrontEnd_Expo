import React, { useState } from 'react';
import {
    StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea
    , LeftIcon, RightIcon, StyledInputLabel, StyledTextInput, Colors, ButtonText, StyledButton,
    Line, MsgBox, ExtraText, ExtraView, TextLink, TextLinkContent, WelcomeCotainer, WelcomeImage
    , Avatar
} from "../components/styles"
import { StatusBar } from 'expo-status-bar';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

const { brand, darkLight, primary, green } = Colors

const Welcome = (props) => {
    const nav = useNavigation();
    return (
        <>
            <StatusBar style='light' />
            <InnerContainer>
                <WelcomeImage resizeMod="cover" source={require('../assets/leaves.jpg')} />
                <WelcomeCotainer>
                    <PageTitle welcome={true}>Welcome!</PageTitle>
                    <SubTitle welcome={true}>Account Logout</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMod="cover" source={require('../assets/icon.png')} />
                        <Line />
                        <StyledButton onPress={() => nav.navigate("Login")}  >
                            <ButtonText >
                                Login
                            </ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeCotainer>
            </InnerContainer>
        </>
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

export default Welcome;