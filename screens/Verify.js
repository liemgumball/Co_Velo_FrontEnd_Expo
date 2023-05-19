import React, { useEffect, useState } from "react";
import {
  Colors,
  SubTitle,
  VerifyContainer,
  VerifyFirtstContainer,
  VerifyTitleText,
  VerifyValueText,
  ButtonTextHome,
  ButtonVerify,
  Line,
  PageLogoVerify,
  VerifyValueClock,
} from "../components/styles";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, SafeAreaView, StyleSheet, Text, TouchableHighlight } from "react-native";
import { Ionicons, Feather, Fontisto, MaterialIcons, Octicons } from "@expo/vector-icons";
import { Header, Button } from "react-native-elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import moment from "moment";

const Verify = (props) => {
  const nav = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [loading, setLoading] = useState(false);
  const [history, sethistory] = useState([]);
  const dateTime = moment(history.time_begin);
  const dateTimeEnd = moment(history.time_end);
  const date = dateTime.format('YYYY-MM-DD');
  const time = dateTime.format('HH:mm');
  const date_end = dateTimeEnd.format('YYYY-MM-DD');
  const time_end = dateTimeEnd.format('HH:mm');
  const time_use = moment.duration(dateTimeEnd.diff(dateTime)).asMinutes();
  const [second, setSecond] = useState(1);

  // Thời điểm hiện tại
  const currentTime = moment();

  console.log(dateTime);
  // Tính thời gian sử dụng xe từ thời điểm bắt đầu đến thời điểm hiện tại
  const duration = moment.duration(currentTime.diff(dateTime));
  const timeUsed = duration.asMinutes();

  const roundedTimeUsed = Math.floor(timeUsed);
  var timer;
  const [minutes, setMinutes] = useState(roundedTimeUsed);


  useEffect(() => {
    setMinutes(roundedTimeUsed);
  }, [roundedTimeUsed]);

  useEffect(() => {
    setLoading(true);
    callApiLoadHistory();

    timer = setInterval(() => {
      setSecond(prevSecond => {
        if (prevSecond === 59) {
          setMinutes(prevMinutes => prevMinutes + 1);
          return 0;
        } else {
          return prevSecond + 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const [count, setCount] = useState(0);


  function callApiLoadHistory() {
    return axios
      .get(`https://covelo.onrender.com/rental/${id}`)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          sethistory(response.data);
      
          setLoading(false);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  if (history.status == "finished" ||history.status == "overtime"  )  
    return (
      <View style={{ heigth: "100%" }}>
        {/* status bar */}
        <StatusBar style="light" />

        {/* Header*/}
        <Header
          leftComponent={
            <Button
              onPress={() => {
                nav.goBack();
              }}
              icon={
                <Ionicons name="chevron-back-outline" size={24} color="white" />
              }
            />
          }
          centerComponent={{
            text: "Thông tin trả xe",
            style: {
              fontWeight: "bold",
              paddingVertical: 5,
              fontSize: 23,
              color: "#fff",
            },
          }}
        />

        {/*Đon hàng hoàn thành*/}
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VerifyContainer style={{ marginTop: 30 }}>
              <VerifyFirtstContainer>
                <VerifyTitleText style={{ fontSize: 20 }}>Bạn đã trả xe thành công</VerifyTitleText>
                <MaterialIcons name="verified" size={34} style={{ top: 2 }} color="blue" />
              </VerifyFirtstContainer>
            </VerifyContainer>

            {/* THong tin đơn hàng  */}
            <VerifyContainer style={{ marginTop: 15 }}>
              <VerifyFirtstContainer>
                <VerifyTitleText>Mã lượt mượn</VerifyTitleText>
                <VerifyValueText style={{ fontWeight: "bold" }}>
                  {history.id}
                </VerifyValueText>
              </VerifyFirtstContainer>


              <VerifyFirtstContainer>
                <VerifyValueText>Ngày mượn</VerifyValueText>
                <VerifyValueText> {date}</VerifyValueText>
              </VerifyFirtstContainer>
              <VerifyFirtstContainer>
                <VerifyValueText>Ngày trả</VerifyValueText>
                <VerifyValueText> {date_end}</VerifyValueText>
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Trạm mượn </VerifyValueText>
                <VerifyValueText>Khu {history.start_station}</VerifyValueText>
              </VerifyFirtstContainer>
              <VerifyFirtstContainer>
                <VerifyValueText>Trạm trả</VerifyValueText>
                <VerifyValueText>Khu {history.end_station}</VerifyValueText>
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Thời gian bắt đầu</VerifyValueText>
                <VerifyValueText>{time}</VerifyValueText>
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Thời gian kết thúc</VerifyValueText>
                <VerifyValueText>{time_end}</VerifyValueText>
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Thời gian sử dụng</VerifyValueText>
                <VerifyValueText>{time_use}phút</VerifyValueText>
              </VerifyFirtstContainer>
            </VerifyContainer>

            {/* Trạng thái vi phạm  */}
            <VerifyContainer style={{ marginTop: 15 }}>
              <VerifyTitleText>Trạng thái vi phạm</VerifyTitleText>
              <VerifyValueText style={{ fontSize: 15, marginLeft: 10 }}>
                Bạn không vi phạm gì cả
              </VerifyValueText>
            </VerifyContainer>

            {/* Buttom  */}
            <ButtonVerify onPress={() => {
              nav.navigate("ReportPage");
            }}
            >
              <ButtonTextHome>Khiếu Nại</ButtonTextHome>
            </ButtonVerify>

          </ScrollView>
        </SafeAreaView>
      </View>
    );
  else {
    return (<View style={{ heigth: "100%" }}>
      {/* status bar */}
      <StatusBar style="light" />

      {/* Header*/}
      <Header
        leftComponent={
          <Button
            onPress={() => {
              nav.navigate('Home');
            }}
            icon={
              <Ionicons name="chevron-back-outline" size={24} color="white" />
            }
          />
        }
        centerComponent={{
          text: "Thông tin trả xe",
          style: {
            fontWeight: "bold",
            paddingVertical: 5,
            fontSize: 23,
            color: "#fff",
          },
        }}
      />

      {/*Đon hàng hoàn thành*/}
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VerifyContainer style={{ marginTop: 25 }}>
            <VerifyFirtstContainer>
              <VerifyTitleText style={{ fontSize: 20 }}>Bạn đang trong lượt mượn xe</VerifyTitleText>
              <Octicons name="verified" size={25} color="black" />
            </VerifyFirtstContainer>
          </VerifyContainer>

          {/* THong tin đơn hàng  */}
          <VerifyContainer style={{ marginTop: 15 }}>
            <VerifyFirtstContainer>
              <VerifyTitleText>Mã lượt mượn</VerifyTitleText>
              <VerifyValueText style={{ fontWeight: "bold" }}>
                {history.id}
              </VerifyValueText>
            </VerifyFirtstContainer>


            <VerifyFirtstContainer>
              <VerifyValueText>Ngày mượn</VerifyValueText>
              <VerifyValueText> {date}</VerifyValueText>
            </VerifyFirtstContainer>

            <VerifyFirtstContainer>
              <VerifyValueText>Trạm mượn </VerifyValueText>
              <VerifyValueText>Khu {history.start_station}</VerifyValueText>
            </VerifyFirtstContainer>



            <VerifyFirtstContainer>
              <VerifyValueText>Thời gian bắt đầu</VerifyValueText>
              <VerifyValueText>{time}</VerifyValueText>
            </VerifyFirtstContainer>


          </VerifyContainer>

          {/* Trạng thái vi phạm  */}
          <VerifyContainer style={{ marginTop: 15 }}>
            <VerifyTitleText>Thời gian sử dụng</VerifyTitleText>
            <VerifyValueClock>
              {/* {timeUsed} phút */}
              {minutes}:{second}
            </VerifyValueClock>
          </VerifyContainer>

          {/* Buttom  */}
          <ButtonVerify onPress={() => {
            nav.navigate("ReportPage");
          }}
          >
            <ButtonTextHome>Khiếu Nại</ButtonTextHome>
          </ButtonVerify>

        </ScrollView>
      </SafeAreaView>
    </View>)
  }
};

export default Verify;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};