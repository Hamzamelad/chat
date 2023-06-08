import React, { useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { SlOptions } from "react-icons/sl";
import { AiFillLike, AiFillPicture } from "react-icons/ai";
import { RiFileGifFill } from "react-icons/ri";
import { BsEmojiSmileFill } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import { StyledLike, StyledSendBar } from "./StyledComponents";

import ChatHead from "./ChatHead";
import ChatBody from "./chatBody/ChatBody";
import EmojiPickerComp from "./EmojiPicker";

import ContenctProfile from "./ContenctProfile";
import TypeBar from "./TypeBar";
import ChatItem from "./chatBody/ChatItem";
import { StyledMassageContainer } from "./StyledComponents";

import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

export const MassageContainer = ({ children, isSender }) => {
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

const Like = ({ children }) => {
    const li = React.useRef();
    return (
        <StyledLike>
            <AiFillLike ref={li} style={{ marginBottom: 3 }} />
        </StyledLike>
    );
};
const SendBar = () => {
    const [ep, setEp] = React.useState(false);
    const [isInp, setIsInp] = React.useState();
    const [likeSize, setLikeSize] = React.useState();
    let mouseUp = false;
    const inpRef = React.useRef();
    const likeRef = React.useRef();

    const handleEmo = (emo) => {
        inpRef.current.value = inpRef?.current.value + emo.emoji;
    };

    const sendMessage = () => {
        axios
            .post(
                "http://localhost:8000/api/messages/create/",
                {
                    text: inpRef?.current?.value,
                    sender: 3,
                    receiver: 4,
                },
                {}
            )
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
    };

    const handleIsInp = (v) => {
        console.log(v.nativeEvent.data);
        if (v.nativeEvent.data) {
            setIsInp(true);
        } else {
            setIsInp(false);
        }
    };

    const handleLike = () => {};
    return (
        <StyledSendBar>
            <div className="left">
                <div className="icon-container">
                    <AiFillPicture size={25} />
                </div>
                <div className="icon-container">
                    <RiFileGifFill size={25} />
                </div>
            </div>
            <div className="middle">
                <input type="text" ref={inpRef} onChange={handleIsInp} />
                <BsEmojiSmileFill
                    className="emo"
                    style={{ position: "absolute" }}
                    size={22}
                    onClick={() => setEp((c) => !c)}
                />
                {ep && (
                    <div className="ep-container">
                        <EmojiPicker onEmojiClick={handleEmo} />
                    </div>
                )}
            </div>
            <div className="right">
                ~
                <div className="icon-container" onClick={sendMessage}>
                    {isInp ? (
                        <MdSend size={28} />
                    ) : (
                        <>
                            <AiFillLike
                                style={{ marginBottom: 3 }}
                                size={28}
                                onMouseDown={handleLike}
                            />
                            <Like size={likeSize} />
                        </>
                    )}
                </div>
            </div>
        </StyledSendBar>
    );
};

const Chat = () => {
    const { show, setShow } = useAuth();
    const { currentConv, conversations, setConversations } = useData();
    const [showEm, setShowEm] = React.useState(false);
    const [showImC, setShwoImC] = React.useState(false);
    const [newM, setNewM] = React.useState("");
    const [chosenEmoji, setChosenEmoji] = React.useState(null);
    const [file, setFile] = React.useState({
        imagePreviewUrl: "",
        picFile: null,
    });

    let isSender;

    const [ml, setMl] = React.useState([
        [...new Array(40)].map(() => {
            const x = Math.floor(Math.random() * 2);
            return (
                <ChatItem isSender={x == 1}>
                    <div className="single-contect">
                        {isSender && (
                            <div className="contecter">
                                <div className="c-img-div"></div>
                            </div>
                        )}
                        <MassageContainer isSender={x == 1}>
                            <p className="text-message tm-s">
                                hello world hello world hello world hello world
                                hello world hello world hello world
                            </p>
                        </MassageContainer>
                    </div>
                </ChatItem>
            );
        }),
    ]);

    React.useEffect(() => {
        if (conversations) {
            setMl([
                [...conversations[currentConv].messeges].map(() => {
                    const x = Math.floor(Math.random() * 2);
                    return (
                        <ChatItem isSender={x == 1}>
                            <div className="single-contect">
                                {isSender && (
                                    <div className="contecter">
                                        <div className="c-img-div"></div>
                                    </div>
                                )}
                                <MassageContainer isSender={x == 1}>
                                    <p className="text-message tm-s">
                                        hello world hello world hello world
                                        hello world hello world hello world
                                        hello world
                                    </p>
                                </MassageContainer>
                            </div>
                        </ChatItem>
                    );
                }),
            ]);
        }
    }, [conversations]);

    React.useEffect(() => {
        if (newM !== "") {
            setMl((c) => [
                ...c,
                <ChatItem isSender={1 == 1}>
                    <div className="single-contect">
                        <MassageContainer isSender={1 == 1}>
                            <p className="text-message tm-s">{newM}</p>
                        </MassageContainer>
                    </div>
                </ChatItem>,
            ]);
        }
    }, [newM]);

    const sendIm = () => {
        if (file.imagePreviewUrl) {
            const conv = [...conversations];
            // console.log(conv[currentConv])
            const convMesseges = [
                ...conv[currentConv].messeges,
                { sender: 1, text: "", img: file.imagePreviewUrl },
            ];
            conv[currentConv].messeges = convMesseges;
            setConversations(conv);
            // console.log(conversations)
        }
        setShwoImC(false);
    };

    return (
        <Styled className="chat">
            {!show.shutAll && show.menuName === "cpmenu" && <ContenctProfile />}
            <ChatHead setShow={setShow}></ChatHead>
            <ChatBody ml={ml}></ChatBody>
            <TypeBar
                setShowEm={setShowEm}
                setNewM={setNewM}
                chosenEmoji={chosenEmoji}
                setFile={setFile}
                setShwoImC={setShwoImC}
            />
            {showEm && !show.shutAll && show.menuName === "em-menu" && (
                <EmojiPickerComp setEm={setChosenEmoji} />
            )}
            {showImC && (
                <div className="im-container">
                    <div className="top"></div>
                    <div className="middle">
                        <img src={file.imagePreviewUrl} alt="photo" />
                    </div>
                    <div className="bottom">
                        <div className="send" onClick={sendIm}></div>
                    </div>
                </div>
            )}
        </Styled>
    );
};

export default Chat;

export const Styled = styled.div`
    flex: 3;
    height: 100%;
    border: solid 1px #ebe8e8;
    display: flex;
    flex-direction: column;
    position: relative;

    .ep-container {
        position: absolute;
        right: 180px;
        top: 90px;
        margin-bottom: 550px;
    }
    .im-container {
        width: 500px;
        height: 500px;
        background-color: #a14c4c;
        position: absolute;
        right: 240px;
        bottom: -480px;
        margin-bottom: 550px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;

        .top {
            height: 55px;
            width: 100%;
            background-color: #c5c5c5;
        }
        .middle {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 460px;
            }
        }
        .bottom {
            height: 55px;
            width: 100%;
            background-color: #c5c5c5;
            display: flex;
            align-items: center;
            padding: 0 10px;
            box-sizing: border-box;

            .send {
                margin-left: auto;

                height: 40px;
                width: 40px;
                background-color: #3fcc7c;
            }
        }
    }
`;
