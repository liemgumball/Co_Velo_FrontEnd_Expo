import React, { useState } from "react";
import {
  Colors,
  SubTitle,
  VerifyContainer,
  VerifyFirtstContainer,
  VerifyTitleText,
  VerifyValueText,
  ButtonTextHome,
  ButtonVerify,
  HomeHistoryTableColumn,
  TableHistoryText,
  Line,
  VerifyValueText2,
} from "../components/styles";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Ionicons, Feather, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { Header, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { useRoute } from '@react-navigation/native';
import { ScrollView } from "react-native";
import { PageLogoVerify } from "../components/styles";
import { getCurrentDate, getCurrentDateTime, getCurrentTime } from "../unity/DateTimeUtils";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";


const Confirm = (props) => {
  const nav = useNavigation();
  const route = useRoute();

  const { ID } = route.params;
  const { Station_id } = route.params;
  const { Magnetic_key } = route.params;
  const [idrental, setIdRental] = useState("");
  const currentDateTime = getCurrentDateTime();
  const currentDate = getCurrentDate();
  const currentTime = getCurrentTime();

  const [userID, setuserID] = useState("");

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const data = await AsyncStorage.getItem('user');
        if (data) {
          const user = JSON.parse(data);
          setuserID(user.id);
        } else {
          console.log('Không tìm thấy giá trị user trong AsyncStorage');
        }
      } catch (error) {
        console.log('Lỗi khi lấy giá trị:', error);
      }
    };
    retrieveData();



  }, []);

  function callApiCreateRental() {
    return axios
      .post('https://covelo.onrender.com/rental/create/', {
        "user": userID,
        "bicycle": ID,
        "start_station": Station_id
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          setIdRental(response.data.id);

        } else {
          // Đăng nhập thất bại, hiển thị thông báo lỗi
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function callApiSetLocker() {
    console.log(Magnetic_key);
    return axios
      .patch(`https://covelo.onrender.com/bicycle/update/${Magnetic_key}`, {
        "locker": null
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          nav.navigate("Verify",{ id: idrental });
        } else {
          // Đăng nhập thất bại, hiển thị thông báo lỗi
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    async function fetchData() {
      callApiCreateRental();
      callApiSetLocker();
      // const locker = await callApiReadingNovelList(accID);
      // setReadingNovels(readingNovelList);
      // setNewNovels(newNovelList);
    }
    fetchData();

  };
  return (
    <>
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
            text: "Thông tin mượn xe",
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
            <VerifyContainer style={{ marginTop: 60 }}>
              <VerifyFirtstContainer>
                <VerifyTitleText style={{ fontSize: 20 }}>Xác nhận thông tin lượt mượn</VerifyTitleText>
                <MaterialIcons name="verified" size={34} style={{ top: 5 }} color="black" />
              </VerifyFirtstContainer>
            </VerifyContainer>

            {/* THong tin đơn hàng  */}
            <VerifyContainer style={{ marginTop: 15 }}>
              <VerifyFirtstContainer>
                <VerifyTitleText>Mã xe:</VerifyTitleText>
                <VerifyValueText style={{ fontWeight: "bold" }}>

                </VerifyValueText>
                {ID &&
                  <VerifyValueText>   {ID} </VerifyValueText>
                }
              </VerifyFirtstContainer>


              <VerifyFirtstContainer>
                <VerifyValueText>Ngày mượn:</VerifyValueText>
                {currentDate &&
                  <VerifyValueText2> {currentDate} </VerifyValueText2>
                }
              </VerifyFirtstContainer>

              <VerifyFirtstContainer>
                <VerifyValueText>Trạm mượn: </VerifyValueText>
                {/* {Station_id &&
                  <VerifyValueText >{Station_id}</VerifyValueText>
                } */}
                {Station_id &&
                  <VerifyValueText>  Khu {Station_id} </VerifyValueText>
                }
              </VerifyFirtstContainer>
              <VerifyFirtstContainer>
                <VerifyValueText>Thời gian bắt đầu:</VerifyValueText>
                {currentTime &&
                  <VerifyValueText2> {currentTime} </VerifyValueText2>
                }
              </VerifyFirtstContainer>

            </VerifyContainer>


            <VerifyContainer style={{ marginTop: 10 }}>
              <VerifyTitleText>Trạng thái vi phạm</VerifyTitleText>
              <VerifyValueText style={{ fontSize: 15, marginLeft: 10 }}>
                Bạn được phép tiếp tục mượn xe.
              </VerifyValueText>
            </VerifyContainer>


            {/* Buttom  */}
            <ButtonVerify onPress={handleSubmit}
            >
              <ButtonTextHome>Xác nhận</ButtonTextHome>
            </ButtonVerify>

          </ScrollView>
        </SafeAreaView>
      </View>

    </>

  );
};

export default Confirm;
