import React from "react";
import { Provider } from "react-native-paper";
import { SafeAreaView, View, Text, Button, StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as SecureStore from "expo-secure-store";

import { AuthContextProvider, useAuth } from "./context/AuthContext";
import { ControlerContextProvider } from "./context/ControlersContext";
import { theme } from "./core/theme";

// screens
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";
import Dashboard from "./screens/Dashboard";
import RegisterScreen from "./screens/RegisterScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";

const Stack = createStackNavigator();

const Loading = ({ route }) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View>
                <Text>loading</Text>
            </View>
        </SafeAreaView>
    );
};

const App = () => {
    const [loading, setLoading] = React.useState(true);
    const [isAuth, setIsAuth] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            const access = await SecureStore.getItemAsync("access");

            if (access !== null) {
                setIsAuth(true);
            }
            setLoading(false);
        })();
    }, []);

    React.useEffect(() => {
        console.log(isAuth)
    }, [isAuth])

    
    if (false) {
        return <Loading />;
    }
    return (
        <AuthContextProvider>
            <ControlerContextProvider>
                <Provider theme={theme}>
                    {/* <StatusBar backgroundColor={'blue'} /> */}
                    <NavigationContainer>
                        <Stack.Navigator
                            screenOptions={{
                                headerShown: false,
                            }}
                        >
                            {true ? (
                                <Stack.Screen
                                    name="Dashboard"
                                    component={Dashboard}
                                    initialParams={{
                                        setIsAuth: setIsAuth,
                                    }}
                                />
                            ) : (
                                <>
                                    <Stack.Screen
                                        name="StartScreen"
                                        component={StartScreen}
                                    />
                                    <Stack.Screen
                                        name="LoginScreen"
                                        component={LoginScreen}
                                        initialParams={{
                                            setIsAuth: setIsAuth,
                                        }}
                                    />
                                    <Stack.Screen
                                        name="RegisterScreen"
                                        component={RegisterScreen}
                                    />
                                    <Stack.Screen
                                        name="ResetPasswordScreen"
                                        component={ResetPasswordScreen}
                                    />
                                </>
                            )}
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
            </ControlerContextProvider>
        </AuthContextProvider>
    );
};

export default App;
