import { View, Text } from 'react-native'
import { InnerContainer, LeftIcon, PageTitle, StyledButton, StyledContainer, Colors, ButtonText, SubTitle } from '../components/styles'
import React from 'react'

//icon
import { FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons';

const ReportPage = () => {
  return (
      <StyledContainer report={true}>
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
    </StyledContainer>
  )
}

export default ReportPage