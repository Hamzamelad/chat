import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ControlerContextProvider } from "./context/ControlersContext";
import { ChatTabScreen } from "./screens/tabs/ChatTabScreen";
import { MarketTabScreen } from "./screens/tabs/MarketTabScreen";
import { ArchiveTabScreen } from "./screens/tabs/ArchiveTabScreen";

const Drawer = createDrawerNavigator();

const MainScreen = () => {
    return (
        <ControlerContextProvider>
            <Drawer.Navigator
                initialRouteName="Chat"
                screenOptions={{ headerShown: false }}
            >
                <Drawer.Screen name="Chat" component={ChatTabScreen} />
                <Drawer.Screen name="Marketplace" component={MarketTabScreen} />
                <Drawer.Screen name="Archive" component={ArchiveTabScreen} />
            </Drawer.Navigator>
        </ControlerContextProvider>
    );
};

export default MainScreen;
