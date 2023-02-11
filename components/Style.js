import styled from "styled-components"
import { View } from "react-native"

export const Colors = {
    text: '#fff',
    background: '#000',
    primary: '#0cf',
    secondary: '#f0e',
    gray: '#222',
    lightgray: '#111',
    highlight: '#001119',
}

const { primary, secondary, text, background, gray, lightgray, highlight} = Colors

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px
`