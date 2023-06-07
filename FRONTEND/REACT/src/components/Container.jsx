import React from "react";
import styled from "styled-components";

import IICont from "./IICont";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Chat from "./chat/Chat";
import Setting from "./Setting";
import Profile from "./Profile";

import { useAuth } from "../context/AuthContext";

const Container = () => {
    const [list, setList] = React.useState([1]);
    const { account, setting, setShow, show } = useAuth();

    const handleShow = (ev) => {
        if (ev.target.nodeName === "path" || ev.target.nodeName === "svg") {
            return;
        }
        if (
            !show.shutAll &&
            !String(ev.target.className).includes(show.menuName)
        ) {
            setShow({ shutAll: true, menuId: "" });
        }
    };

    const handle = () => {
        setList((cl) => [...cl, "detData"]);
    };
    React.useEffect(() => {
        localStorage.setItem("listy", "a");
    }, []);
    return (
        <StyledImageCon onClick={handleShow}>
            <Styled>
                {!show.shutAll && show.menuName === "setting" && <Setting />}
                {!show.shutAll && show.menuName === "profile" && <Profile />}
                <Navbar />
                <IICont>
                    <Menu></Menu>
                    <Chat></Chat>
                </IICont>
            </Styled>
        </StyledImageCon>
    );
};

export default Container;

const Styled = styled.div`
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    overflow: hidden;
    display: flex;
`;

const StyledImageCon = styled.div`
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100vh;
    background-color: #fafafa;
    position: relative;
`;
