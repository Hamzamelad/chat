import React from "react";
import styled from "styled-components";
import { AiFillSetting } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

import image from "../assets/Untitled-1.png";
import { useAuth } from "../context/AuthContext";

const TopBar = () => {
    const { account, setting, setAccount, setSetting, setShow } = useAuth();

    const handle = (payload) => {
        setShow({ shutAll: false, menuName: payload });
    };

    return (
        <Styled>
            <div className="left"></div>
            <div className="middle">
                <img src={image} style={{ display: "flex" }} />
            </div>
            <div className="right">
                <MdAccountCircle
                    size={30}
                    onClick={handle.bind(null,'profile')}
                />
                <AiFillSetting
                    size={26}
                    onClick={handle.bind(null,'setting')}
                />
            </div>
        </Styled>
    );
};

export default TopBar;

const Styled = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
    }
    .middle {
        width: 150px;
        height: 40px;

        img {
            width: 100%;
            height: 100%;
        }
    }
    .right {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100px;
    }
`;
