import React from "react";
import styled from "styled-components";
import { SlOptions } from "react-icons/sl";
import {FaVideo} from "react-icons/fa"
import {FaPhone} from "react-icons/fa"
import { useAuth } from "../../context/AuthContext";

const ChatHead = () => {
    const {setShow} = useAuth();

    const handle = () => {
        setShow({shutAll: false, menuName: 'cpmenu'})
    }
    return (
        <Styled>
            <div className="head-left" onClick={handle}>
                <div className="contect">
                    <div className="c-img-div"></div>
                    <span>chats</span>
                </div>
            </div>
            <div className="head-right">
                <div className="icon">
                    <FaVideo />
                </div>
                <div className="icon">
                    <FaPhone />
                </div>
            </div>
        </Styled>
    );
};

export default ChatHead;

const Styled = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
    border-bottom: #d1d1d1 solid 1px;

    .head-left {
        display: flex;
        box-sizing: border-box;
        padding: 5px;

        &:hover {
            cursor: default;
        }

        .contect {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 5px;
            border-radius: 3px;


            &:hover {
                background-color: lightgray;
            }

            .c-img-div {
                height: 30px;
                width: 30px;
                border-radius: 50%;
                background-color: brown;
            }
        }
    }
    .head-right {
        display: flex;
        align-items: center;

        .icon {
            width: 40px;
            height: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            margin-left: 10px;

            &:hover {
                background-color: #ece9e9;
            }
        }
    }
`;
