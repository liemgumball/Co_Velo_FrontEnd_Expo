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
import SpinnerOverlay from 'react-native-loading-spinner-overlay';
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
  Octicons,
} from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigation } from "feather-icons-react/build/IconComponents";
import NavBar from "../NavbarScreen/NavBar";
import { Banner, ProfileIcon, Warning } from "../../Style/HomeStyle";
import { HistoryBox, HistoryBoxLINk, IconHisDetail, PageHomeImageBikge, PageHomeImageBikge2, TextCode, TextCodeDate, TextCodeTime, ViewDetail } from "./HomeStyle";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import moment from 'moment';

const historyData = [
  { date: '2022-05-01', status: 'completed' },
  { date: '2022-05-02', status: 'cancelled' },
  { date: '2022-05-03', status: 'in progress' },
  // ...
];
const Home = () => {
  const [username, setusername] = useState("");
  const [violate_number, setviolate_number] = useState("");
  const [historyList, sethistoryList] = useState([]);
  const [loading, setLoading] = useState(false);

  function callApiLoadHistory() {
    return axios
      .get(`https://covelo.onrender.com/rental/list/1`)
      .then((response) => {
        if (response.data) {
          // console.log(response.data);
          sethistoryList(response.data);
          setLoading(false);
          // console.log(response.data);
          return response.data;
        } else {
          // Đăng nhập thất bại, hiển thị thông báo lỗi
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const renderHistory = () => {
    {
      return (
        historyList &&
        historyList.map((history, index) => {
          const dateTime = moment(history.time_begin);
          const date = dateTime.format('YYYY-MM-DD');
          const time = dateTime.format('HH:mm');
          let statusIcon ;
          if (history.status === "using") {
            statusIcon = 1;
          } else if (history.status === "finished") {
            statusIcon = 2;
          } else {
            statusIcon = 3;
          }

          return (
            <HistoryBoxLINk key={index} onPress={() => nav.navigate("Verify", { id: history.id })}>
              <HistoryBox>
                <TextCode style={{ marginTop: 10 }}> #{history.id}</TextCode>
                <IconHisDetail>
                  {statusIcon === 1 && <Octicons name="verified" size={30} color="black" /> }
                  {statusIcon === 2 && <MaterialIcons name="verified" size={30} color="blue" />}
                  {statusIcon === 3 && <MaterialIcons name="error" size={24} color="black" />}
                </IconHisDetail>
                <TextCodeTime> {time} </TextCodeTime>
                <TextCodeDate> {date} </TextCodeDate>
                <ViewDetail onPress={() => nav.navigate("Verify")}>
                  <HelloNameText>Chi tiết </HelloNameText>
                </ViewDetail>
                <PageHomeImageBikge
                  resizeMod="cover"
                  source={require("../../assets/bike2.png")}
                />
              </HistoryBox>
            </HistoryBoxLINk>
          );
        })
      );
    }
  };

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const data = await AsyncStorage.getItem('user');
        if (data) {
          const user = JSON.parse(data);
          setusername(user.username);
          setviolate_number(user.violate_number);
        } else {
          console.log('Không tìm thấy giá trị user trong AsyncStorage');
        }
      } catch (error) {
        console.log('Lỗi khi lấy giá trị:', error);
      }
    };
    setLoading(true);
    callApiLoadHistory();
    retrieveData();
  }, []);
  historyList.sort((a, b) => moment(b.time_begin).diff(moment(a.time_begin)));
  const renderStars = () => {
    if (violate_number === 0) {
      const not_violet_stars = Array(3 - violate_number).fill().map((_, index) => (
        <MaterialIcons key={`not_violet_star_${index}`} name="star" size={35} color="black" />
      ));
      return not_violet_stars;
    } else if (violate_number === 3) {
      const stars = Array(violate_number).fill().map((_, index) => (
        <MaterialIcons key={`star_${index}`} name="star" size={35} color="black" />
      ));
      return stars;
    } else {
      const stars = Array(violate_number).fill().map((_, index) => (
        <MaterialIcons key={`star_${index}`} name="star" size={35} color="red" />
      ));
      const not_violet_stars = Array(3 - violate_number).fill().map((_, index) => (
        <MaterialIcons key={`not_violet_star_${index}`} name="star" size={35} color="black" />
      ));
      return [...stars, ...not_violet_stars];
    }
  };



  const nav = useNavigation();
  return (
    <View>
      {/* status bar */}
      <StatusBar style="dark" />
      {loading ? (
        <SpinnerOverlay visible={loading} />
      ) : (
        <>
          <Banner>
            <HelloNameText>Xin chào, {username} </HelloNameText>
            <ProfileIcon
              style={{ position: "absolute", left: 350, top: 48 }}
              onPress={() => nav.navigate("Profile")}
            >
              <AntDesign name="user" size={30} color="black" />
            </ProfileIcon>
          </Banner>

          <ScrollView style={{ marginLeft: 15 }} horizontal showsHorizontalScrollIndicator={false}>
            {renderHistory()}
          </ScrollView>


          <Warning>
            <WaningNameText>Lượt vi phạm</WaningNameText>
            <HomeReportStatus>
              {renderStars()}
            </HomeReportStatus>
            <PageHomeImageBikge2
              resizeMod="cover"
              source={require("../../assets/bike2.png")}
            />
          </Warning>
          <NavBar />
        </>
      )}


    </View>

  );
};

export default Home;
