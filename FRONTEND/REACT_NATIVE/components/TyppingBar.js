import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Audio,
    Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";

import { Audio as Audu } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import SectionItem from "./SectionItem";

const TyppingBar = ({ items, setItems, setImage, setEmo }) => {
    const [inp, setInp] = React.useState();
    const [hasGPerm, setHasGPerms] = React.useState();
    const [sound, setSound] = React.useState();

    const inpRef = React.useRef(null);

    const send = () => {
        setItems((c) => [
            ...c,
            {
                who: "host",
                type: "text",
                content: [inp],
            },
        ]);

        inpRef.current.clear();
        Keyboard.dismiss();
    };

    async function playSound() {
        console.log("Loading Sound");
        const { sound } = await Audu.Sound.createAsync(
            require("../assets/hello.mp3")
        );
        setSound(sound);

        console.log("Playing Sound");
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                  console.log("Unloading Sound");
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    useEffect(() => {
        (async () => {
            const res = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGPerms(res.status === "granted");
        })();
    }, []);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconDef} onPress={pickImage}>
                <FontAwesome name="picture-o" size={24} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconDef} onPress={playSound}>
                <FontAwesome name="microphone" size={24} color="blue" />
            </TouchableOpacity>

            <View style={styles.inpDev}>
                <TextInput
                    ref={inpRef}
                    style={styles.inp}
                    onChangeText={(v) => setInp(v)}
                />
                <View style={{ ...styles.iconDef, ...styles.emo }}>
                    <MaterialIcons
                        name="emoji-emotions"
                        size={28}
                        color="blue"
                        onPress={() => setEmo((c) => !c)}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.iconDef} onPress={send}>
                <AntDesign name="like1" size={24} color="blue" />
            </TouchableOpacity>
        </View>
    );
};

export default TyppingBar;

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        width: "100%",
        height: 50,
        backgroundColor: "lightgrey",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
    },
    iconDef: {
        height: 35,
        width: 35,
        borderRadius: 17.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    inpDev: {
        flex: 1,
        height: "75%",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    inp: {
        width: "100%",
        height: "100%",
        borderRadius: 25,
        backgroundColor: "gray",
    },
    emo: {
        position: "absolute",
        right: 10,
        height: 28,
        width: 28,
    },
    emoPicker: {
        position: "absolute",
        top: -500,
        left: 0,
        height: 200,
        width: 300,
    },
});
