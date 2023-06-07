import React, { createContext, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import { acc } from "react-native-reanimated";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [tokens, setTokens] = React.useState(null);

    const save = async (access, refresh) => {
        await SecureStore.setItemAsync("access", access);
        await SecureStore.setItemAsync("refresh", refresh);
    };

    const login = (user) => {
        axios
            .post("http://10.0.2.2:8000/api/dj/login/", user, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                setTokens({
                    access: res.data.access_token,
                    refresh: res.data.refresh_token
                });
                save(res.data.access_token, res.data.refresh_token);
            })
            .catch((er) => console.log(er));
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync("access")
        await SecureStore.deleteItemAsync("refresh")
        setTokens(null);
    }

    const value = {
        tokens: tokens,
        login: login,
        logout: logout
    };

    React.useEffect(() => {
        (async () => {
            const access = await SecureStore.getItemAsync("access");
            const refresh = await SecureStore.getItemAsync("refresh");

            if (access !== null) {
                setTokens({
                    access: access,
                    refresh: refresh
                });
            }
        })();
    });

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
