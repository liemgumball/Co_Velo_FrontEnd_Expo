import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Link, NavigationContainer } from "@react-navigation/native";
import { MaterialTopTabView, createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-web";
import { TouchNoti } from "../../components/styles";


function Notification() {
    function checkHeader(data) {
        if (data == "Trả xe") {
          return (
            <Link to="/Verify">
              <Text>Đi đến trang chủ</Text>
            </Link>
          );
        } else {
          return (
            <Link to="/confirm">
              <Text>Xác nhận</Text>
            </Link>
          );
        }
      }
      
    const data = [
        {
            id: "1",
            header: "Trả xe",
            notification:
                "Bạn đã trả xe thành công ",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "2",
            header: "Mượn xe",
            notification: "Mượn xe thành công",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "1",
            header: "Trả xe",
            notification:
                "Bạn đã trả xe thành công ",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "2",
            header: "Mượn xe",
            notification: "Mượn xe thành công",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "1",
            header: "Trả xe",
            notification:
                "Bạn đã trả xe thành công ",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "2",
            header: "Mượn xe",
            notification: "Mượn xe thành công",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "1",
            header: "Trả xe",
            notification:
                "Bạn đã trả xe thành công ",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "2",
            header: "Mượn xe",
            notification: "Mượn xe thành công",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "1",
            header: "Trả xe",
            notification:
                "Bạn đã trả xe thành công ",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "2",
            header: "Mượn xe",
            notification: "Mượn xe thành công",
            time: "12:20",
            date: "23/06/2022",
        },

    ];
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => {
                    return index.toString();
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={NotificationStyle.container}>
                            <TouchNoti onPress={() => {
                                
                            }}   >
                                <View style={{ marginLeft: 15, marginRight: 15 }}>
                                    <View>
                                        <Text style={NotificationStyle.header}>{item.header}</Text>
                                    </View>
                                    <View>
                                        <Text style={NotificationStyle.notification}>
                                            {item.notification}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={NotificationStyle.timeDate}>
                                            {item.time} , {item.date}
                                        </Text>
                                    </View>
                                </View>
                            </TouchNoti>
                        </View>
                    );
                }}
            />
        </View>
    )
}
function News() {
    const data = [
        {
            id: "1",
            header: "Thong bao",
            notification:
                "Hihihihindle that situation you need to watch for activity instead and you cannot depend on React ",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "2",
            header: "Thong bao",
            notification: "Hahahahaha",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "2",
            header: "Thong bao",
            notification: "Hehehehehehehehe",
            time: "12:20",
            date: "23/06/2022",
        },
        {
            id: "1",
            header: "Thong bao",
            notification: "Hihihihi",
            time: "12:20",
            date: "23/06/2022",
        },
    ];
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => {
                    return index.toString();
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={NotificationStyle.container}>
                            <View style={NotificationStyle.imageView}>
                                <Image
                                    style={NotificationStyle.image}
                                    source={{
                                        uri: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Faker_2020_interview.jpg",
                                    }}
                                />
                            </View>
                            <View style={{ marginLeft: 15, width: 250 }}>
                                <View>
                                    <Text style={NotificationStyle.header}>{item.header}</Text>
                                </View>
                                <View>
                                    <Text
                                        style={NotificationStyle.notification}
                                        numberOfLines={2}
                                    >
                                        {item.notification}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={NotificationStyle.timeDate}>
                                        {item.time} , {item.date}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}



const Tab = createMaterialTopTabNavigator();

const NofiticationSC = () => {
    const insets = useSafeAreaInsets();
    return (
        <>
            <StatusBar style="dark" />
            <Tab.Navigator style={{ marginTop: 30 }}>
                <Tab.Screen name="Thông báo" component={Notification} />
                <Tab.Screen name="Tin tức" component={News} />
            </Tab.Navigator>
        </>
    );
}

export default NofiticationSC

export const NotificationStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        padding: 12,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.3,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#A4BC92",
    },
    notification: {
        fontSize: 18,
        color: "#B3C99C",
        // textAlign: "justify",
        // flexDirection: "row",
        // width: 250,
    },
    timeDate: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#1111",
    },
    image: {
        width: "100%",
        height: "100%",
        // borderRadius: 50,
    },
    imageView: {
        width: 100,
        height: 70,
        // borderRadius: 40 / 2,
        marginLeft: 15,
    },
});
