import React from "react";
import styled from "styled-components";
import { MassageContainer } from "../Chat";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import img from "../../../assets/face of man.jpg";

const ChatItem = ({ key, message }) => {
    const { user } = useAuth();
    const [isSender, setIsSender] = React.useState();

    React.useEffect(() => {
        setIsSender(message.sender == user.pk)
        console.log(message)
    }, [])
    return (
        <Styled isSender={true}>
            {message.sender == 1 && (
                <div className="contecter">
                    <div className="c-img-div"></div>
                </div>
            )}

            {!message.img && (
                <div className="text-message">
                    <p>{message.text}</p>
                </div>
            )}

            {message.img && (
                <div className="img-message">
                    <img src={message.img} alt="img" />
                    {message.text && (
                        <div className="text">
                            <p>{message.text}</p>
                        </div>
                    )}
                </div>
            )}
        </Styled>
    );
};

export default ChatItem;

const Styled = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${({isSender}) => isSender && 'flex-end'};
    padding: 10px;
    box-sizing: border-box;

    .date {
        span {
            text-align: center;
        }
    }

    p {
        margin: 0;
    }

    .text-message {
        align-self: ${({ isSender }) => (isSender ? "flex-end" : "flex-start")};
        max-width: 400px;
        width: fit-content;
        padding: 8px 12px;
        margin: 3px 0;
        border-radius: 5px;
        ${({ isSender }) => isSender && "border-right: solid #3fcc7c 5px;"}
        background-color: #e0dfdf;
    }

    .img-message {
        width: 350px;
        height: fit-content;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        ${({ isSender }) => isSender && "border-right: solid #3fcc7c 5px;"}
        background-color: #e0dfdf;
        overflow: hidden;
        padding: 8px;

        img {
            width: 100%;
            border-radius: 5px;
        }

        .text {
            padding: 5px 0px;

            p {
                margin: 0;
            }
        }
    }
`;

// Lorem Ipsum is simply dummy text of the printing and
// typesetting industry. Lorem Ipsum has been the industry's
// standard dummy text ever since the 1500s, when an unknown
// printer took a galley of type and scrambled it to make a
// type specimen book. It has survived not only five centuries,
// but also the leap into electronic typesetting, remaining
// essentially unchanged
