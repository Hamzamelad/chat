import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Button,
    Keyboard,
    TouchableWithoutFeedback,
    ActivityIndicator,
} from "react-native";
import axios from "axios";

import EmojiSelector, { Categories } from "react-native-emoji-selector";
import TyppingBar from "../../components/TyppingBar";
import SectionItem from "../../components/SectionItem";
import { useAuth } from "../../context/AuthContext";

const ChatSection = ({ route, navigation }) => {
    const [data, setData] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [items, setItems] = React.useState([]);
    const [emo, setEmo] = React.useState(false);
    const { IsAuthF } = useAuth();

    const getData = async () => {
        axios
            .get(`http://10.0.2.2:8000/api/conversation/${route.params.convId}`)
            .then((res) => {
                setData(res.data[0]);
            })
            .catch((er) => console.log(er));
    };

    React.useEffect(() => {
        if (data !== null) {
            data?.messeges.forEach((el) => {
                setItems((c) => [
                    ...c,
                    {
                        who: el.sender === 1 ? "host" : "geust",
                        type: el.text ? "text" : "img",
                        content: [el.text ? el.text : el.img],
                    },
                ]);
                return;
            });
        }
    }, [data]);

    React.useEffect(() => {
        if (image) {
            setItems((c) => [
                ...c,
                {
                    who: "host",
                    type: "img",
                    content: [image],
                },
            ]);
        }
    }, [image]);

    React.useEffect(() => {
        route.params.setIsShown(false);
        getData();
    }, []);
    return (
        <SafeAreaView style={styles.sectionContainer}>
            {!data ? (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" color="#00ff00"/>
                </View>
            ) : (
                <>
                    <View style={styles.chatContainer}>
                        <View style={styles.defContainer}>
                            <View style={styles.circle}></View>
                            <Text style={styles.name}>
                                name {route.params.convId}
                            </Text>
                            <Text style={styles.def}>some definetion</Text>
                        </View>

                        {items &&
                            items.map((obj, index) => (
                                <SectionItem key={index} obj={obj} />
                            ))}
                    </View>
                    <TyppingBar
                        items={items}
                        setItems={setItems}
                        setImage={setImage}
                        setEmo={setEmo}
                    />
                    {emo && (
                        <EmojiSelector
                            category={Categories.emotion}
                            columns={4}
                        />
                    )}
                </>
            )}
        </SafeAreaView>
    );
};

export default ChatSection;

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        position: "relative",
    },
    chatContainer: {
        flex: 1,
    },
    defContainer: {
        paddingTop: 40,
        paddingBottom: 40,
        alignItems: "center",
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "brown",
        marginLeft: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 500,
    },
    def: {
        fontSize: 15,
        fontWeight: 400,
    },
});

// { who: "guest", type: "text", content: ["hi"] },
// { who: "hoster", type: "text", content: ["hello"] },
// {
//     who: "hoster",
//     type: "img",
//     content: [
//         "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540hamzardo%252Fdemo2/ImagePicker/7824c508-82c0-4cf4-8be2-bfcbd6058b83.jpeg",
//     ],
// },
