import React from "react";
import styled from "styled-components";
import { MassageContainer } from "../Chat";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";

const ChatItem = ({ massage }) => {
    const { user } = useAuth();

    return (
        <Styled>
            <div className="single-contect">
                {massage.map((el, ind) => {
                    console.log(el.sender,user.pk)
                    return (
                        <>
                            {el.sender == 1 && (
                                <div className="contecter">
                                    <div className="c-img-div"></div>
                                </div>
                            )}
                            <div
                                className="container"
                                isSender={el?.sender === user.pk}
                            >
                                {el.text && (
                                    <p className={`text-message `}>{el.text}</p>
                                )}
                                {el.img && (
                                    <div className="photo-message">
                                        <div className="img">
                                            <img
                                                src={`http://localhost:8000${el.img}`}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    );
                })}
            </div>
        </Styled>
    );
};

export default ChatItem;

const Styled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .date {
        span {
            text-align: center;
        }
    }
    .single-contect {
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px;

        .contecter {
            width: 60px;
            height: 100%;
            display: flex;
            justify-content: center;

            .c-img-div {
                height: 30px;
                width: 30px;
                border-radius: 50%;
                margin-top: 4px;
                background-color: brown;
            }
        }

        .container {
            display: flex;
            flex-direction: column;
            margin-right: ${(props) => (props.isSender ? "10px" : "0")};

            .text-message {
                align-self: ${({ isSender }) =>
                    isSender ? "flex-end" : "flex-start"};
                max-width: 200px;
                width: fit-content;
                padding: 8px 12px;
                margin: 3px 0;
                border-radius: 2px;
                background-color: ${(props) =>
                    props.isSender ? "rgb(0, 132, 255)" : "#e0dfdf"};
            }

            .photo-message {
                height: 400px;
                width: 400px;
                border-radius: 10px;
                background-color: #c7c6c6;
                margin: 0 10px;
                padding: 10px;

                .img {
                    height: 100%;
                    width: 100%;
                    border-radius: 5px;
                    background-color: #fff;
                    overflow: hidden;

                    img {
                        height: 100%;
                        width: 100%;
                    }
                }
            }
            .tm-s {
                border-radius: 18px;
            }
            .tm-f {
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
            }
            .tm-l {
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
            }
        }
    }
`;
