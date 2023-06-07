import { StyleSheet, SafeAreaView, Text, FlatList } from "react-native";
import React from "react";

import ChatItem from "./ChatItem";


const ChatsList = ({data}) => {

    React.useEffect(() => {
        console.log(data)
    }, [])
    return (
        <SafeAreaView>
            <FlatList
                style={styles.list}
                data={data}
                renderItem={(i) => <ChatItem data={i}/>}
                keyExtractor={(i) => i.id}
            />
        </SafeAreaView>
    );
};

export default ChatsList;

const styles = StyleSheet.create({
    list: {
        paddingTop: 100,
    },
});
