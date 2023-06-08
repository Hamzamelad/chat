import React from "react";
import styled from "styled-components";
import axios from "axios";

import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import ChatItem from "./ChatItem";
import image from "../../../assets/peakpx.jpg";
import pImage from "../../../assets/face of man.jpg";

// temp com
import { StyledMassageContainer } from "../StyledComponents";

const MassageContainer = ({ children, isSender }) => {
    const childrenCount = children.length;
    return (
        <StyledMassageContainer
            isSender={isSender}
            childrenCount={childrenCount}
        >
            {children}
        </StyledMassageContainer>
    );
};
//

const ChatBody = ({ ml }) => {
    const { currentConv, conversations } = useData();
    const [messages, setMessages] = React.useState([]);

    return (
        <Styled className="check">
            {conversations &&
                conversations[currentConv].messeges.map((el, ind) => (
                    <ChatItem key={ind} message={el} />
                ))}
        </Styled>
    );
};

export default ChatBody;

const Styled = styled.div`
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    /* background-image: url(${image}); */
    background-size: 100% 100%;
    position: relative;
    padding-bottom: 80px;

    .contect-def {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        padding-top: 60px;

        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;

            .c-img-div {
                height: 70px;
                width: 70px;
                border-radius: 50%;
                background-color: brown;
            }

            span {
                text-align: center;
            }
        }
    }
`;
