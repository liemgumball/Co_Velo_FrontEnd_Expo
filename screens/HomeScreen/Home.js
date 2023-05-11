import React from "react";
import {
  Colors,
  TitleTextHome,
  HomeHistoryTable,
  HomeHistoryTableColumn,
  HomeReportStatus,
  ButtonHome,
  InnerContainer,
  ButtonTextHome,
  TableHistoryText,
  HomeContainer,
  HelloNameText,
  TextLinkContent,
  WaningNameText,
  PageLogoVerify,
} from "../../components/styles";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Icon } from "@iconify/react";
import { Header, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { Navigation } from "feather-icons-react/build/IconComponents";
import NavBar from "../NavbarScreen/NavBar";
import { Banner, ProfileIcon, Warning } from "../../Style/HomeStyle";

import { HistoryBox, IconHisDetail, PageHomeImageBikge, PageHomeImageBikge2, TextCode, TextCodeDate, TextCodeTime, ViewDetail } from "./HomeStyle";
const historyData = [
  { date: '2022-05-01', status: 'completed' },
  { date: '2022-05-02', status: 'cancelled' },
  { date: '2022-05-03', status: 'in progress' },
  // ...
];
const Home = () => {
  const nav = useNavigation();
  return (
    <View>
      {/* status bar */}
      <StatusBar style="dark" />
      <Banner>
        <HelloNameText>Xin chào, Hoàng Văn Nam</HelloNameText>
        <ProfileIcon
          onPress={() => nav.navigate("Profile")}
        >
          <AntDesign name="user" style={{ position: "relative", left: 90 }} size={30} color="black" />
        </ProfileIcon>
      </Banner>

      <ScrollView style={{ marginLeft: 15 }} horizontal showsHorizontalScrollIndicator={false}>
   
        <HistoryBox>
          <TextCode style={{ marginTop: 10 }}> #1223123</TextCode>
          <IconHisDetail >
            <MaterialIcons name="verified" size={30} color="blue" />
          </IconHisDetail>
          <TextCodeTime> 10:11</TextCodeTime>
          <TextCodeDate> 20/11/2023</TextCodeDate>
          <ViewDetail
            onPress={() => nav.navigate("Verify")}
          >
            <HelloNameText>Chi tiết </HelloNameText>
          </ViewDetail>
          <PageHomeImageBikge
            resizeMod="cover"
            source={require("../../assets/bike2.png")}
          />
        </HistoryBox>

        <HistoryBox>
          <TextCode style={{ marginTop: 10 }}> #1223123</TextCode>
          <IconHisDetail >
            <MaterialIcons name="verified" size={30} color="blue" />
          </IconHisDetail>
          <TextCodeTime> 10:11</TextCodeTime>
          <TextCodeDate> 20/11/2023</TextCodeDate>
          <ViewDetail
            onPress={() => nav.navigate("Verify")}
          >
            <HelloNameText>Chi tiết </HelloNameText>
          </ViewDetail>
          <PageHomeImageBikge
            resizeMod="cover"
            source={require("../../assets/bike2.png")}
          />
        </HistoryBox>
        <HistoryBox>
          <TextCode style={{ marginTop: 10 }}> #1223123</TextCode>
          <IconHisDetail >
            <MaterialIcons name="verified" size={30} color="blue" />
          </IconHisDetail>
          <TextCodeTime> 10:11</TextCodeTime>
          <TextCodeDate> 20/11/2023</TextCodeDate>
          <ViewDetail
            onPress={() => nav.navigate("Verify")}
          >
            <HelloNameText>Chi tiết </HelloNameText>
          </ViewDetail>
          <PageHomeImageBikge
            resizeMod="cover"
            source={require("../../assets/bike2.png")}
          />
        </HistoryBox>

      </ScrollView>


      <Warning>
        <WaningNameText>Lượt vi phạm</WaningNameText>
        <HomeReportStatus>
          <MaterialIcons name="report-problem" size={35} color="red" />
          <MaterialIcons name="report-problem" size={35} color="black" />
          <MaterialIcons name="report-problem" size={35} color="black" />
        </HomeReportStatus>
        <PageHomeImageBikge2
            resizeMod="cover"
            source={require("../../assets/bike2.png")}
          />
      </Warning>

    </View>
  );
};

export default Home;
