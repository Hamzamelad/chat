import React from "react";
import { View, Text, Button } from "react-native";
import { Drawer as PaperDrawer } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useAuth } from "../context/AuthContext";

// screen
import { ChatTabScreen } from "./tabs/ChatTabScreen";
import { MarketTabScreen } from "./tabs/MarketTabScreen";
import { ArchiveTabScreen } from "./tabs/ArchiveTabScreen";

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const MyComponent = (props) => {
    const { logout } = useAuth();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: "lightblue" }}
            >
                <DrawerItemList {...props} />
                
            </DrawerContentScrollView>
            <View>
                <Button title="logout" onPress={() => {
                    logout();
                    props.setIsAuth(false);
                }} />
            </View>
        </View>
    );
};

export default function Dashboard({ route, navigation }) {
    const { logout } = useAuth();

    return (
        <Drawer.Navigator
            initialRouteName="ChatTabScreen"
            screenOptions={{
                headerShown: false,
                // drawerActiveBackgroundColor: 'red',
                // drawerLabelStyle: {
                //     color: 'green',
                //     marginLeft: 24
                // }
            }}
            drawerContent={(props) => (
                <MyComponent {...props} setIsAuth={route.params.setIsAuth} />
            )}
        >
            <Drawer.Screen name="ChatTabScreen" component={ChatTabScreen} />
            <Drawer.Screen name="Market" component={MarketTabScreen} />
            <Drawer.Screen name="Archive" component={ArchiveTabScreen} />
        </Drawer.Navigator>
        // <Test/>
    );
}
