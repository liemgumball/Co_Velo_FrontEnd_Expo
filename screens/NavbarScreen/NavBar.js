import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { AntDesign, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { NavBarHome, NavBarIcon } from './NAvBArStyle';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
    const nav = useNavigation();
    return (
        <NavBarHome>
                <NavBarIcon 
                 onPress={() => nav.navigate("Home")}
                  >
                    <AntDesign
                        style={{ paddingHorizontal: 12 }}
                        name="home"
                        size={24}
                        color="black"
                    />
                    <Text style={{ fontSize: 11 }}>Trang chủ</Text>
                </NavBarIcon>

                <NavBarIcon
                 >
                    <Entypo
                        style={{ paddingHorizontal: 10 }}
                        name="location"
                        size={24}
                        color="black"
                    />
                    <Text style={{ fontSize: 11 }}>Trạm xe</Text>
                </NavBarIcon>

                <NavBarIcon  onPress={() => nav.navigate("ScanQR")}>
                    <FontAwesome5
                        style={{ paddingHorizontal: 10 }}
                        name="qrcode"
                        size={24}
                        color="black"
                    />
                    <Text style={{ fontSize: 11 }}>Quét mã</Text>
                </NavBarIcon>

                <NavBarIcon
                 onPress={() => nav.navigate("Notification")}
                >
                    <Ionicons
                        style={{ paddingHorizontal: 10 }}
                        name="notifications"
                        size={24}
                        color="black"
                    />
                    <Text style={{ fontSize: 11 }}>Thông báo</Text>
                </NavBarIcon>

                <NavBarIcon
                 onPress={() => nav.navigate("Profile")}
                 >
                    <AntDesign
                        style={{ paddingHorizontal: 12 }}
                        name="profile"
                        size={24}
                        color="black"
                    />
                    <Text style={{ fontSize: 11 }}>Cá nhân</Text>
                </NavBarIcon>
        </NavBarHome>

    )
}

export default NavBar
