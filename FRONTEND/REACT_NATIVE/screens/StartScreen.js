import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { useAuth } from "../context/AuthContext";

export default function StartScreen({ navigation }) {
    const { tokens } = useAuth();


    return (
        <Background>
            <Logo />
            <Header>Login Template</Header>
            <Paragraph>
                The easiest way to start with your amazing application.
            </Paragraph>
            <Button
                mode="contained"
                onPress={() => {
                    navigation.navigate("LoginScreen");
                    console.log("check");
                }}
            >
                Login
            </Button>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate("RegisterScreen")}
            >
                Sign Up
            </Button>
        </Background>
    );
}
