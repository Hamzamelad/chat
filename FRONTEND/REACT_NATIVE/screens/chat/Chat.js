import React from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";

import ChatsList from "./ChatsList";
import { useControler } from "../../context/ControlersContext";

export const Chat = ({ navigation }) => {
    const [data, setData] = React.useState();

    const getData = async () => {
        axios
            .get("http://10.0.2.2:8000/api/conversation/list")
            .then((res) => {
                const ar = res.data;
                ar.push({
                    id: 23,
                    members: ["admin", "testy"],
                    messeges: [
                        {
                            img: null,
                            sender: 1,
                            text: "hello",
                        },
                    ],
                });
                setData(res.data);
                console.log(data[0]);
            })
            .catch((er) => console.log(er));
    };
    React.useEffect(() => {
        getData();
    }, []);
    return (
        <View>{!data ? <Text>loading</Text> : <ChatsList data={data} />}</View>
    );
};
