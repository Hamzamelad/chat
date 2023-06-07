import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




import { useControler } from "../../context/ControlersContext";
import ChatStack from "../chat/ChatStack";
import { Calls } from "../Calls";
import People from "../People";
import Stories from "../Stories";
import { Menu } from "../../components/Menu";


const Tab = createBottomTabNavigator();

export const ChatTabScreen = (props) => {
    const [isShown, setIsShown] = React.useState(true);

    return (
        <Tab.Navigator
            id="tab"
            initialRouteName="Chat2"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Chat2") {
                        iconName = "chatbubble";
                    } else if (route.name === "Calls") {
                        iconName = "videocam";
                    } else if (route.name === "People") {
                        iconName = "md-people";
                    } else {
                        return <MaterialIcons name="amp-stories" size={size} color={color} />
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                headerLeft:() => <Menu od={props.navigation.openDrawer}/>,
                headerRight:() => (
                    <View>
                        <MaterialIcons name="create" size={24} color="black" />
                    </View>
                ),
                headerShown: route.name !== 'Chat2',
                tabBarStyle: isShown ? '' : { display: "none" }
            })}
        >
            <Tab.Screen
                name="Chat2"
                component={ChatStack }
                options={{ 
                    title: "Chat",
                }}
                initialParams={{
                    setIsShown: setIsShown
                }}
            />
            <Tab.Screen
                name="Calls"
                component={Calls}
                options={{
                    headerRight: () => (
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.icoContainer}>
                                <Ionicons name="ios-call" size={24} color="black" />
                            </View>
                            <View style={styles.icoContainer}>
                                <Ionicons name='videocam' size={24} color="black" />
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="People"
                component={People}
                options={{
                    headerRight: () => (
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.icoContainer}>
                                <AntDesign name="contacts" size={24} color="black" />
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Stories"
                component={Stories}
                options={{
                    headerRight: null
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    icoContainer: {
        height: 35,
        width: 35,
        borderRadius: 16.5,
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
});