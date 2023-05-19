import styled from "styled-components";
import { View, Text, ScrollView } from "react-native";

export const HistoryBox = styled.View`
  width: 282px;
height: 406px;

box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 20px;
flex: none;
order: 0;
background: #D6D6D6;
flex-grow: 0;
  margin-left:10px;
`;
export const TextCode = styled(Text)`
    font-size: 20px;
    margin: 0px 10px;
`;
export const TextTime = styled(Text)`
    font-size: 20px;
`;
export const TextCodeTime = styled(View)`
    font-size: 23px;
    top: 235px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    left: 160px;
`;
export const TextCodeDate = styled(View)`
    font-size: 20px;
    top: 210px;
    font-weight: bold;
    flex-direction: row;
    left: 10px;
`;
export const HistoryBoxLINk = styled.TouchableOpacity`
    
`;
export const ViewDetail = styled.TouchableOpacity`
    font-size: 25px;
    top: 212px;
    justify-content: center;
    margin-left: 5%;
    width: 90%;
    height: 50px;
    border: 1px solid gray;
    border-radius: 10px;
`;

export const IconHisDetail = styled.View`
    font-size: 35px;
    top: -25px;
    font-weight: bold;
    left: 238px;
`;
export const PageHomeImageBikge = styled.Image`
position: absolute;
width: 328px;
height: 348px;
left: -10px;
top: 32px;
`;
export const PageHomeImageBikge2 = styled.Image`
position: absolute;
width: 428px;
height: 448px;
left: 220px;
top: -100px;
`;