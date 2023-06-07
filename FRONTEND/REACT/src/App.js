import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Container from "./components/Container";
import SignIn from "./components/registration/SignIn";
import { useAuth } from "./context/AuthContext";

import Picker from "emoji-picker-react";

function App() {
    const { token } = useAuth();
    return <>{!token ? <SignIn></SignIn> : <Container></Container>}</>;
}

export default App;
