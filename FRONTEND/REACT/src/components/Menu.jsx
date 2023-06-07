import React from "react";
import styled from "styled-components";
import { MdEmergencyRecording } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";

import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";

const MenuHead = () => {
    const { menu } = useAuth();

    return (
        <StyledHead menu={menu}>
            <div className="head-top">
                <span>{menu}</span>
                {menu === "chats" && (
                    <div className="head-top-right">
                        {/* <div className="icon-container" style={{boxSizing: "border-box", paddingTop: 2}}>
                        <MdEmergencyRecording size={25}/>
                    </div> */}
                        <div className="icon-container">
                            <IoIosCreate size={25} />
                        </div>
                    </div>
                )}
            </div>
            {menu === "chats" && (
                <div className="head-bottom">
                    <div className="search-div">
                        <input type="text" />
                    </div>
                </div>
            )}
            {menu === "people" && (
                <div className="head-bottom">
                    <span>Active contacts (0)</span>
                </div>
            )}
        </StyledHead>
    );
};

const MenuBodyItem = ({data, ind}) => {
    const {user} = useAuth();
    const {setCurrentConv} = useData();
    const name = data.members.filter((el) => el !== user.username)
    const lastMassge = data.messeges[data.messeges.length - 1]

    return (
        <StyledBodyItem onClick={setCurrentConv.bind(null, ind)}>
            <div className="c-img-div"></div>
            <div className="conf-info">
                <span className="name">{name}</span>
                <span>{lastMassge.text}</span>
            </div>
            <div className="end">
                <span>12:15</span>
                <span>vv</span>
            </div>
        </StyledBodyItem>
    );
};

const MenuBody = () => {

    const { conversations } = useData();

    React.useEffect(() => {
        // console.log("conver");
        // console.log(conversations);
    }, []);
    return (
        <StyledBody>
            {conversations && conversations.map((el,key) => <MenuBodyItem data={el} ind={key}/>)}
        </StyledBody>
    );
};

const Menu = () => {
    return (
        <Styled>
            <MenuHead></MenuHead>
            <MenuBody></MenuBody>
        </Styled>
    );
};

export default Menu;

const StyledHead = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .head-top {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 10px;

        span {
            font-size: 35px;
            font-weight: 700;
        }

        .head-top-right {
            display: flex;
            align-items: center;
            gap: 13px;
            margin-right: 5px;

            svg {
                color: #2d2d2d;
            }

            .icon-container {
                height: 33px;
                width: 33px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    background-color: #c7c6c6;
                }
            }
        }
    }
    .head-bottom {
        width: 100%;
        display: flex;
        justify-content: ${({ menu }) =>
            menu === "chats" ? "center" : "default"};
        align-items: center;
        padding: 12px 10px;

        .search-div {
            width: 80%;

            input {
                background-color: #e2e1e1;
                height: 35px;
                width: 100%;
                border-radius: 25px;
                border: none;
                box-sizing: border-box;
                padding-left: 10px;

                &:focus {
                    outline: none;
                }
            }
        }
    }
`;
const StyledBody = styled.div`
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 5px;
`;

const StyledBodyItem = styled.div`
    width: 100%;
    height: 55px;
    box-sizing: border-box;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
        background-color: whitesmoke;
    }
    .c-img-div {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: brown;

        img {
            height: 100%;
            width: 100%;
        }
    }

    .conf-info {
        display: flex;
        flex-direction: column;

        .name {
            font-size: 18px;
            font-weight: 700;
        }
    }

    .end {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
    }
`;

const Styled = styled.div`
    flex: 2;
    height: 100%;
    border: solid 1px #ebe8e8;
    display: flex;
    flex-direction: column;
    position: relative;
`;
