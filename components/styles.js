import styled from "styled-components";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { colors } from "react-native-elements";

let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;
const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiry: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6D28D9",
  yellow: "#FAFD51",
  gray: "#BABDBD",
  blue: colors.primary,
  black: "#101010",
  green: "#10B981",
  red: "#EF4444",
};

const {
  primary,
  yellow,
  secondary,
  gray,
  tertiary,
  blue,
  darkLight,
  brand,
  black,
  green,
  red,
} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;


export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  height: ${screenHeight}px;
`;
export const ScannerContainer = styled.View`
  flex: 1;
  backgroundcolor: ${primary};
  align-items: center;
  justify-content: center;
`;
export const WelcomeCotainer = styled(InnerContainer)`
  padding: 25px;
  width: 100%;
  align-items: center;
`;
export const ProfileContainer = styled(View)`
  width: 100%;
  height: 100px;
  flexDirection: row;
  paddingLeft: 20px;
  alignitems: center;
  justifyContent: flex-start;
  backgroundcolor: ${secondary};
`;
export const ProfileContainerColumn = styled(InnerContainer)`
  padding: 15px;
  width: 100%;
  height: 100px;
  justifyContent: flex-start;
  flexdirection: column;
  alignItems: flex-start;
`;
export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  margin: 10px;
`;
export const HomeContainer = styled(View)`
  backgroundColor: #FFFFFF;
  width: 108%;
  margin-top: -30%;
  margin-left: -4%;
  borderRadius: 30px;
  height: 500px;
  alignitems: center;
  justifyContent: center;
`;
export const VerifyContainer = styled(View)`
  backgroundColor: ${primary};
  border-radius: 20px;
  width: 80%;
  margin: 10px auto;
`;
export const VerifyFirtstContainer = styled(View)`
  flexDirection: row;  
  justifyContent: space-between;
  marginRight: 14px;
`;
export const VerifyInfomationContainer = styled(View)`
  backgroundColor: ${blue};
  width: 100%;
  borderRadius: 10px;
  height: 100%;
`;
export const HomeHistoryTable = styled(View)`
  padding: 10px;
  width: 100%;
  alignitems: center;
  borderRadius: 20px;
  height: 261px;
`;
export const HomeReportStatus = styled(View)`
  paddingHorizontal: 50px;
  flexDirection: row;
  justify-content: space-between;
  width: 80%;
  left:-10px;
  alignItems: center;
  marginTop: 40px;
`;
export const HomeHistoryTableColumn = styled(View)`
  padding: 6px;
  width: 100%;
  flexDirection: row;
  justifyContent: space-between;
  alignitems: center;
  backgroundColor: ${primary};
  borderradius: 2px;
  height: 35px;
`;
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;

export const PageLogo = styled.Image`
  width: 100px;
  height: 100px;
`;
export const PageLogoVerify = styled.Image`
  marginLeft: 90px;
  width: 210px;
  height: 190px;
`;
export const VerifyTitleText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${black};
  padding: 8px;
  marginLeft: 5px;
`;
export const VerifyValueText = styled.Text`
  font-size: 20px;
  color: ${black};
  padding: 8px;
  marginLeft: 5px;
`;
export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;

  ${(props) =>
    props.welcome &&
    `
        font-size: 35px;
    `}
`;
export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) =>
    props.welcome &&
    `
        margin-bottom: 5px;
        font-weight: nomal;
    `}
`;
export const SubTitleVeryfy = styled.Text`
  font-size: 18px;
  margin-left: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;
export const StyledFormArea = styled.View`
  width: 90%;
  z-index: -1;
  position: relative;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 14px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;
export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  border-radius: 10px;
  margin-vertical: 5px;
  height: 60px;
  align-items: center;

  ${(props) =>
    props.google == true &&
    `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonSmall = styled.TouchableOpacity`
  padding: 15px;
  background-color: "${brand}";
  justify-content: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 10px;
  align-items: center;
`;

export const ButtonFull = styled.TouchableOpacity`
  padding-left: 40px;
  margin: 10px;
  border-radius: 10px;
  marginvertical: 10px;
  height: 35px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;
export const ButtonHome = styled.TouchableOpacity`
  margin: 10px;
  border-radius: 10px;
  height: 40px;
  width: 83%;
  align-items: center;
  backgroundColor: ${yellow}
  justify-content: center;

`;
export const TouchNoti = styled.TouchableOpacity`
  

`;
export const ButtonVerify = styled.TouchableOpacity`
  margin: 5px;
  marginLeft: 10px;
  border-radius: 20px;
  height: 50px;
  width: 80%;
  margin: 20px auto;
  align-items: center;
  backgroundColor: ${yellow}
  justify-content: center;

`;
export const ButtonTextSmall = styled.TouchableOpacity`
  color: ${primary};
  font-size: 25px;
`;
export const ButtonProfile = styled.Text`
  color: ${gray};
  font-size: 25px;
`;
export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 25px;
  ${(props) =>
    props.google == true &&
    `
        padding-left: 10px;
    `}
`;
export const ButtonTextProfile = styled.Text`
  color: ${Colors.tertiry};
  font-weight: bold;
  font-size: 28px;
  paddingLeft: 35px;
`;

export const ButtonTextHome = styled.Text`
  color: ${Colors.tertiry};
  font-weight: bold;
  font-size: 28px;
`;
export const TitleTextHome = styled.Text`
  color: "#f000";
  font-size: 25px;
  font-weight: bold;
  padding-left: 12px;
`;
export const HelloNameText = styled.Text`
  color: #252525;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
export const DetailText = styled.Text`
    color: "#f000";
    font-size: 20px;
    font-weight: bold;
    fontStyle: "italic",
    padding-left: 8px;
`;
export const TableHistoryText = styled.Text`
    color: ${darkLight};
    fontSize: 22px;
    font-weight: bold;
    fontStyle: "italic",
`;
export const UserNameText = styled.Text`
    color: ${blue};
    font-size: 30px;
    font-weight: bold;
    fontStyle: "italic",
`;
export const StatusText = styled.Text`
    color: ${red};
    font-size: 20px;
    fontStyle: "italic",
`;
export const TitleText = styled.Text`
  color: "#99004d";
  font-size: 17px;
  font-weight: normal;
  padding-left: 1px;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;
export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    color: ${tertiary}
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;
export const WaningNameText = styled.Text`
  color:  gray;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  text-fill-color: transparent;
  top: 10px; 
  left: 30px;
`;
