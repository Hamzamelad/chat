import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthContextProvider from "./context/AuthContext";
import DataContextProvider from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <AuthContextProvider>
        <DataContextProvider>
            <GoogleOAuthProvider clientId="236835452498-0m40msc08eo4spulp87q83mblt6ic3mf.apps.googleusercontent.com">
                <App />
            </GoogleOAuthProvider>
        </DataContextProvider>
    </AuthContextProvider>
    // {/* </React.StrictMode> */}
);
