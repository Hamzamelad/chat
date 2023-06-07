import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from '@expo/vector-icons';

import Market from "../Market";
import { Calls } from "../Calls";
import People from "../People";
import Stories from "../Stories";

import { MyTabBar } from "../../components/HomemadeTab";
import { Menu } from "../../components/Menu";

const Tab = createBottomTabNavigator();

export const MarketTabScreen = (props) => {
    return (
        <Tab.Navigator
            id="tab"
            initialRouteName="Marketplace2"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Marketplace2") {
                        iconName = "chatbubble";
                    } else if (route.name === "Calls") {
                        iconName = "videocam";
                    } else if (route.name === "People") {
                        iconName = "md-people";
                    } else {
                        return (
                            <MaterialIcons
                                name="amp-stories"
                                size={size}
                                color={color}
                            />
                        );
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                headerLeft: () => <Menu od={props.navigation.openDrawer} />,
            })}
        >
            <Tab.Screen
                name="Marketplace2"
                component={Market}
                options={{ title: "Marketplace" }}
                // initialParams={{openDrawer: props.navigation.openDrawer}}
            />
            <Tab.Screen name="Calls" component={Calls} />
            <Tab.Screen name="People" component={People} />
            <Tab.Screen name="Stories" component={Stories} />
        </Tab.Navigator>
    );
};
