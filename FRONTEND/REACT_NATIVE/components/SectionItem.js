import { StyleSheet, View, Text, Image, Keyboard } from "react-native";
import React from "react";


const SectionItem = ({ obj }) => {
    return (
        <View
            style={{
                ...styles.container,
                justifyContent: obj.who === "host" ? "flex-end" : "flex-start",
            }}
        >
            {obj.who === 'guest' && (
                <View style={styles.imgContainer}>
                    <View style={styles.imgDev}></View>
                </View>
            )}
            <View style={{ ...styles.messContainer }}>
                {obj.content.map((e, index) =>
                    obj.type === "text" ? (
                        <View
                            key={index}
                            style={{
                                ...styles.mess,
                                backgroundColor:
                                    obj.who === "host"
                                        ? "lightblue"
                                        : "lightgrey",
                            }}
                        >
                            <Text style={{ textAlign: "center" }}>{e}</Text>
                        </View>
                    ) : (
                        <>
                            <Image source={{ uri: `http://10.0.2.2:8000/${e}` }} style={styles.img} />
                        </>
                    )
                )}
            </View>
        </View>
    );
};

export default SectionItem;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        paddingVertical: 4,
        paddingHorizontal: 10
    },
    imgContainer: {
        flex: 1,
        maxWidth: 35,
        display: "flex",
        justifyContent: "flex-end",
    },
    imgDev: {
        height: 35,
        width: 35,
        borderRadius: 17.5,
        backgroundColor: "red",
    },
    messContainer: {
        gap: 10,
    },
    mess: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        maxWidth: 280,
        minWidth: 50,
        borderRadius: 20,
        alignSelf: "flex-start",
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 10
    }
});
