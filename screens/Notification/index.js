import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Notification() {
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
      notification:
        "Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored tex",
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
            </View>
          );
        }}
      />
    </View>
  );
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

function MyTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTinColor: "#e91e63",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "white", marginTop: insets.top },
      }}
    >
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{ tabBarLabel: "Notification" }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{ tabBarLabel: "News" }}
      />
    </Tab.Navigator>
  );
}


export const NotificationStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 15,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.3,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: brand,
  },
  notification: {
    fontSize: 18,
    // textAlign: "justify",
    // flexDirection: "row",
    // width: 250,
  },
  timeDate: {
    fontSize: 13,
    fontWeight: "bold",
    color: darkLight,
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
