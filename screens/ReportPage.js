import { View, Text } from 'react-native'
import { InnerContainer, LeftIcon, PageTitle, StyledButton, StyledContainer, Colors, ButtonText, SubTitle } from '../components/styles'
import React from 'react'

//icon
import { FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons';
import { Header, Button } from "react-native-elements";

const ReportPage = () => {
  return (
    <View>
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
          text: "Khiếu nại",
          style: {
            fontWeight: "bold",
            paddingVertical: 5,
            fontSize: 23,
            color: "#fff",
          },
        }}
      />
  
    <StyledContainer>
      
      <StyledContainer report={true}>
        {/* <InnerContainer> */}
              {/* Header*/}

        <SubTitle color={Colors.darkLight}>Please choice your report!</SubTitle>
        <StyledButton report={true} onPress={() =>{}}>
          <Fontisto name='bicycle' color={Colors.primary} size={25} />
          <ButtonText>Broken Bike?</ButtonText>
        </StyledButton>
        <StyledButton report={true} onPress={() =>{}}>
          <Ionicons name='md-cloud-download' color={Colors.primary} size={25} />
          <ButtonText>System error</ButtonText>
        </StyledButton>
        <StyledButton report={true} onPress={() =>{}}>
          <Fontisto name='qrcode' color={Colors.primary} size={25} />
          <ButtonText>QR code error</ButtonText>
        </StyledButton>
        <StyledButton report={true} onPress={() =>{}}>
          <Fontisto name='question' color={Colors.primary} size={25} />
          <ButtonText>Another ...</ButtonText>
        </StyledButton>
        {/* </InnerContainer> */}
      </StyledContainer>
    </StyledContainer>
    </View>
  )
}

export default ReportPage