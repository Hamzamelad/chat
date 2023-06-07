import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../context/AuthContext";

const ChatItem = ({ data }) => {
    const navigation = useNavigation();
    const convName = data.item.members.filter((e) => {
        return e !== "admin";
    })[0];

    React.useEffect(() => {
        // console.log(data);
    });

    return (
        <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate("ChatSection", {
                convId: data.item.id
            })}
        >
            <View style={styles.circle}></View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{convName}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ChatItem;

const styles = StyleSheet.create({
    touchable: {
        width: "100%",
        height: 68,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "brown",
        marginLeft: 10,
    },
    textContainer: {},
    name: {
        fontSize: 15,
        fontWeight: 500,
    },
});
