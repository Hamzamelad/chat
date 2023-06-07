import React from "react";
import { Button } from "react-native";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Chat } from "./Chat";
import ChatSection from "./ChatSection";
import { Menu } from "../../components/Menu";

const Stack = createStackNavigator();

const ChatStack = ({ route }) => {

    return (
        <Stack.Navigator
            initialRouteName="ChatsList"
            screenOptions={({ route }) => ({
                headerShown: true,
                headerLeft: () => <Menu />,
                headerRight: () => (
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.icoContainer}>
                            <FontAwesome
                                name="camera"
                                size={20}
                                color="black"
                            />
                        </View>
                        <View style={styles.icoContainer}>
                            <MaterialIcons
                                name="create"
                                size={23}
                                color="black"
                            />
                        </View>
                    </View>
                ),
            })}
        >
            <Stack.Screen name="ChatsList" component={Chat} />
            <Stack.Screen name="ChatSection" component={ChatSection} initialParams={{
                setIsShown: route.params.setIsShown
            }}/>
        </Stack.Navigator>
    );
};

export default ChatStack;

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
