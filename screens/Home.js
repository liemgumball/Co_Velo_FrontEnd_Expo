import React from "react";
import {
  Colors,
  TitleTextHome,
  styles,
  HomeContainer,
  HomeHistoryTable,
  HomeHistoryTableColumn,
  HomeReportStatus,
  ButtonHome,
  InnerContainer,
  ButtonTextHome,
  TableHistoryText,
} from "../components/styles";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
const Home = () => {
  const nav = useNavigation();
  return (
    <View >
      {/* status bar */}
      <StatusBar style="light" />
      <Header
        leftComponent={
          <Button
            onPress={() => {
              nav.navigate("Profile");
            }}
            icon={<FontAwesome name="user" size={23} color="white" />}
          />
        }
        centerComponent={{
          text: "Xin chào, Nhật Nam",
          style: {
            fontWeight: "bold",
            paddingVertical: 5,
            fontSize: 23,
            color: "#fff",
          },
        }}
        rightComponent={
          <Button
            onPress={() => {
              nav.navigate("Confirm");
            }}
            icon={<Fontisto name="qrcode" color={Colors.primary} size={20} />}
          />
        }
      />

      {/* Lich su thue xe */}
      <HomeContainer>
        <TitleTextHome>Lịch sử mượn xe</TitleTextHome>
        <HomeHistoryTable>
          <SafeAreaView>  
            <ScrollView showsVerticalScrollIndicator={false}>
              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>
              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>

              <HomeHistoryTableColumn>
                <TableHistoryText> 20/02/2023</TableHistoryText>
                <TableHistoryText> 09:03</TableHistoryText>
                <Fontisto name="check" color={Colors.red} size={20} />
              </HomeHistoryTableColumn>
            </ScrollView>
          </SafeAreaView>
        </HomeHistoryTable>
      </HomeContainer>

      {/* So lan vi pham */}
      <HomeContainer style={{ height: 150 }}>
        <TitleTextHome>Số lần vi phạm</TitleTextHome>
        <HomeReportStatus>
          <MaterialIcons name="report-problem" size={40} color="red" />
          <MaterialIcons name="report-problem" size={40} color="black" />
          <MaterialIcons name="report-problem" size={40} color="black" />
        </HomeReportStatus>
      </HomeContainer>

      {/* Button khieu nai  */}
      <InnerContainer>
        <ButtonHome>
          <ButtonTextHome>Khiếu Nại</ButtonTextHome>
        </ButtonHome>
      </InnerContainer>
    </View>
  );
};

export default Home;
