import React, { createContext, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = React.useState(
        localStorage.getItem("access") ? localStorage.getItem("access") : null
    );
    const [show, setShow] = React.useState({ shutAll: true, menuName: "" });

    // remove later
    const [user, setUser] = React.useState("hamz");
    const [menu, setMenu] = React.useState("chats");
    const [account, setAccount] = React.useState(false);
    const [setting, setSetting] = React.useState(false);

    const signin = (user) => {
        axios
            .post("http://localhost:8000/api/token/", user, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                setToken(res.data);
                localStorage.setItem("access", res.data.access);
                localStorage.setItem("refresh", res.data.refresh);
            })
            .catch((er) => console.log(er));
    };

    const logout = () => {
        setToken(null);
        localStorage.setItem("access", "");
        localStorage.setItem("refresh", "");
    };

    const getUser = () => {
        axios
            .get("http://127.0.0.1:8000/api/dj/user/", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => console.log(err));
    };

    React.useEffect(() => {
        getUser();
    }, []);

    const values = {
        token: token,
        setToken: setToken,
        user: user,
        setUser: setUser,
        menu: menu,
        setMenu: setMenu,
        account: account,
        setAccount: setAccount,
        setting: setting,
        setSetting: setSetting,
        show: show,
        setShow: setShow,
        signin: signin,
        logout: logout,
    };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;
