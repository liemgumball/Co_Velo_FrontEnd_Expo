import React from "react";
import {
  Colors,
  TitleTextHome,
  styles,
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
} from "../components/styles";
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
import {
  Banner,
  Crack,
  HomeContainerScreen,
  NavBar,
  NavBarIcon,
  PageLogoVerify,
  ProfileIcon,
  Warning,
} from "../components/Style/HomeStyle";
import { Navigation } from "feather-icons-react/build/IconComponents";
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
           icon={   <AntDesign name="user" size={24} color="black" />}
           />
      </Banner>
      <HomeContainerScreen>
        <PageLogoVerify

          resizeMod="cover"
          source={require("../assets/velo.png")}
        />
        <Crack></Crack>
        <Warning>
          <WaningNameText>Vi phạm</WaningNameText>
          <HomeReportStatus>
            <MaterialIcons name="report-problem" size={40} color="red" />
            <MaterialIcons name="report-problem" size={40} color="black" />
            <MaterialIcons name="report-problem" size={40} color="black" />
          </HomeReportStatus>
        </Warning>

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

        {/* Button khieu nai  */}
        {/* <InnerContainer>
          <ButtonHome>
            <ButtonTextHome>Khiếu Nại</ButtonTextHome>
          </ButtonHome>
        </InnerContainer> */}
      </HomeContainerScreen>

      <NavBar>
        <NavBarIcon>
          <AntDesign
            style={{ paddingHorizontal: 12 }}
            name="home"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 11 }}>Trang chủ</Text>
        </NavBarIcon>

        <NavBarIcon>
          <Entypo
            style={{ paddingHorizontal: 10 }}
            name="location"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 11 }}>Trạm xe</Text>
        </NavBarIcon>

        <NavBarIcon>
          <FontAwesome5
            style={{ paddingHorizontal: 10 }}
            name="qrcode"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 11 }}>Quét mã</Text>
        </NavBarIcon>

        <NavBarIcon>
          <Ionicons
            style={{ paddingHorizontal: 10 }}
            name="notifications"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 11 }}>Thông báo</Text>
        </NavBarIcon>

        <NavBarIcon>
          <AntDesign
            style={{ paddingHorizontal: 12 }}
            name="profile"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 11 }}>Cá nhân</Text>
        </NavBarIcon>
      </NavBar>
    </View>
  );
};

export default Home;
