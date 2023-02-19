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

let screenHeight = Dimensions.get("window").height
let screenWidth = Dimensions.get("window").width
const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiry: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};

  ${(props) => props.report && `
    justify-content: space-around;
    padding: 50px;

  padding-top: ${StatusBarHeight + 30}px;
  `}
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  containerPadding20: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
  },
  innerText: {
    color: Colors.darkLight,
    fontWeight: "bold",
    fontSize: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  buttonSmall: {
    padding: 15,
    backgroundcolor: red,
    borderradius: 5,
    marginvertical: 5,
    height: 100,
  },
  button: {
    flexDirection: "row",
    height: 50,
    width: 250,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  height: ${screenHeight}px;
`;
export const ScannerContainer = styled.View`
    flex:1;
    backgroundColor: ${primary};
    align-items: center;
    justify-content: center;
`
export const WelcomeCotainer = styled(InnerContainer)`
  padding: 25px;
  width: 100%;
  align-items: center;
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
  width: 230px;
  height: 200px;
`;
export const PageLogoVerify = styled.Image`
  width: 100px;
  height: 100px;
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
`

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
  position: relative;

  ${(props) =>
    props.google == true &&
    `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
  ${(props) => props.report == true && `
    background-color: ${red}
    flex-direction: row;
    justify-content: center;
  `}
`;

export const ButtonSmail = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  border-radius: 5px;
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

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 20px;
  padding-left: 20px;
`;
export const TitleTextHome = styled.Text`
    color: "#f000";
    font-size: 25px;
    font-weight: bold;
    fontStyle: "italic",
    padding-left: 8px;
`;
export const DetailText = styled.Text`
    color: "#f000";
    font-size: 20px;
    font-weight: bold;
    fontStyle: "italic",
    padding-left: 8px;
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
    font-size:15px;
`
