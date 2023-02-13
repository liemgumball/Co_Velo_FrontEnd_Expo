import React from "react";
import {
  Colors,
  TitleTextHome,
  Line,
  styles,
  SubTitle,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  ExtraText,
} from "../components/styles";
import { View, Text, ScrollView, SafeAreaView, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const { brand, darkLight, primary, green } = Colors;
const Home = () => {
  const nav = useNavigation();
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      {/* status bar */}
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={
            <Button onPress={() => nav.navigate("Profile")}  icon={<Fontisto name="male" color={primary} size={12} />} />
          }
          centerComponent={{
            text: "Xin chào, Nhật Nam",
            style: {
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 20,
              color: "#fff",
            },
          }}
          rightComponent={
            <Button
              icon={<Fontisto name="qrcode" color={primary} size={12} />}
            />
          }
        ></Header>
      </View>
      {/* Lich su thue xe */}
      <View style={{ flex: 5 }}>
        <View style={[styles.containerPadding20]}>
          <View style={{ flex: 1 }}>
            <TitleTextHome>Lịch sử mượn xe</TitleTextHome>
          </View>
          <View style={{ flex: 6, paddingHorizontal: 8 }}>
            <View
              style={[
                styles.container,
                {
                  flexDirection: "column",
                  backgroundColor: "#EEF1F5",
                  borderRadius: 10,
                },
              ]}
            >
              <SafeAreaView style={styles.container}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={styles.scrollView}
                >
                  <View style={styles.containerRow}>
                    <Text style={styles.innerText}>20/02/2023</Text>
                    <Text style={styles.innerText}>20s</Text>
                    <Fontisto name="check" color={Colors.red} size={20} />
                  </View>
                  <View style={styles.containerRow}>
                    <Text style={styles.innerText}>20/02/2023</Text>
                    <Text style={styles.innerText}>8m20s</Text>
                    <Fontisto name="check" color={Colors.red} size={20} />
                  </View>
                  <View style={styles.containerRow}>
                    <Text style={styles.innerText}>20/02/2023</Text>
                    <Text style={styles.innerText}>8m20s</Text>
                    <Fontisto name="check" color={Colors.red} size={20} />
                  </View>
                  <View style={styles.containerRow}>
                    <Text style={styles.innerText}>20/02/2023</Text>
                    <Text style={styles.innerText}>8m20s</Text>
                    <Fontisto name="check" color={Colors.red} size={20} />
                  </View>
                  <View style={styles.containerRow}>
                    <Text style={styles.innerText}>20/02/2023</Text>
                    <Text style={styles.innerText}>8m20s</Text>
                    <Fontisto name="check" color={Colors.red} size={20} />
                  </View>
                  <View style={styles.containerRow}>
                    <Text style={styles.innerText}>20/02/2023</Text>
                    <Text style={styles.innerText}>8m20s</Text>
                    <Fontisto name="check" color={Colors.red} size={20} />
                  </View>
                  <View style={styles.containerRow}>
                    <Text style={styles.innerText}>20/02/2023</Text>
                    <Text style={styles.innerText}>8m20s</Text>
                    <Fontisto name="check" color={Colors.red} size={20} />
                  </View>
                </ScrollView>
              </SafeAreaView>
            </View>
          </View>
          <Line />
        </View>
      </View>
      {/* So lan vi pham */}
      <View style={{ flex: 5 }}>
        <View style={{ flex: 5 }}>
          <View style={styles.containerPadding20}>
            <View style={{ flex: 1 }}>
              <TitleTextHome>Số lần vi phạm</TitleTextHome>
            </View>
            <View style={{ flex: 2 }}>
              <View
                style={[
                  styles.containerRow,
                  {
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 50,
                  },
                ]}
              >
                <Fontisto name="bug" color={Colors.red} size={30} />
                <Fontisto name="bug" color={Colors.darkLight} size={30} />
                <Fontisto name="bug" color={Colors.darkLight} size={30} />
              </View>
            </View>
            <Line />
            <View style={[{ flex: 3 }]}>
              <View
                style={[
                  styles.container,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <View
                  style={[{ width: "40%", margin: 10, backgroundColor: "red" }]}
                >
                  <Button
                    // onPress={this.buttonClickListener}
                    title="Khiếu Nại"
                    color="#90A4AE"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
