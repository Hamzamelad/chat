import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile, BsFillMicFill } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillLike, AiFillPicture } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

const TypeBar = ({ setShowEm, setNewM, chosenEmoji, setFile, setShwoImC }) => {
    const [value, setValue] = React.useState({});
    const [isOpened, setIsOpened] = React.useState(false);
    const [showAD, setShowAD] = React.useState(false);
    const ref = React.useRef(null);
    const fref = React.useRef(null);
    const { show, setShow } = useAuth();

    const { setConversations, conversations, currentConv } = useData();

    const handleClick = (ev) => {
        console.log(ev.clientY)
    }
    const send = () => {
        //todo
        const conv = [...conversations]
        // console.log(conv[currentConv])
        const convMesseges = [
            ...conv[currentConv].messeges,
            { sender: 1, text: ref.current.value, img: null },
        ];
        conv[currentConv].messeges = convMesseges;
        setConversations(conv);
        // console.log(conversations)
    };

    // const onEmojiClick = (event, emojiObject) => {
    //     ref.current.value = ref.current.value + "j";
    //     console.log(emojiObject);
    // };

    const handleOpen = () => {
        if (!isOpened) {
            setIsOpened(true);
        }
    };

    const atatchFile = () => {
        fref.current.click();
    };
    const onChoiceFile = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let inFile = e.target.files[0];
        reader.onloadend = () => {
            setFile({
                picFile: inFile,
                imagePreviewUrl: reader.result,
            });
        };
        reader.readAsDataURL(inFile);
        setShwoImC(true);
    };

    React.useEffect(() => {
        if (isOpened) {
            setValue({
                height: "150px",
                borderBottomRightRadius: 26,
                borderTopRightRadius: 26,
                borderTopLeftRadius: 26,
                borderBottomLeftRadius: 26,
            });
            setShow({ shutAll: false, menuName: "du" });
        }
    }, [isOpened]);

    React.useEffect(() => {
        if (show.shutAll) {
            setValue({
                rotate: 0,
                borderBottomRightRadius: 26,
                borderTopRightRadius: 26,
            });
            setShowAD(false);
            setTimeout(() => {
                setIsOpened(false);
            }, 300);
        }
        if (!show.shutAll && show.menuName === "du") {
            setTimeout(() => {
                setShowAD(true);
            }, 300);
        }
    }, [show]);

    React.useEffect(() => {
        if (chosenEmoji) {
            ref.current.value = ref.current.value + chosenEmoji;
        }
    }, [chosenEmoji]);

    const handle = () => {
        setShowEm((c) => !c)
        setShow({ shutAll: false, menuName: "em-menu" });

    };
    return (
        <Styled>
            <div className="bar-container">
                <div className="input-con">
                    <input ref={ref} type="text" />
                    <div className="send" onClick={handleClick}>
                        <MdSend size={28} color="#3fcc7c" />
                    </div>
                </div>
                <motion.div
                    className="du tools-con"
                    onClick={handleOpen}
                    initial={{
                        rotate: 0,
                        borderBottomRightRadius: 26,
                        borderTopRightRadius: 26,
                    }}
                    animate={value}
                    transition={{ delay: 0, ease: "linear" }}
                >
                    {!isOpened && (
                        <div className="dropup">
                            <IoMdArrowDropdown
                                className="down"
                                color="black"
                                size={27}
                                style={{ transform: "rotate(180deg)" }}
                            />
                        </div>
                    )}
                    {showAD && (
                        <>
                            <div
                                className="du item"
                                onClick={handle}
                            >
                                <BsEmojiSmile
                                    style={{ pointerEvents: "none" }}
                                    color="black"
                                    size={25}
                                />
                            </div>
                            <div className="du item">
                                <AiFillPicture
                                    color="black"
                                    size={25}
                                    onClick={atatchFile}
                                />
                            </div>
                            <div className="du item mic" style={{}}>
                                <BsFillMicFill color="black" size={25} />
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
            <input
                className="pfile"
                ref={fref}
                type="file"
                style={{ display: "none" }}
                onChange={onChoiceFile}
            />
        </Styled>
    );
};

export default TypeBar;

const Styled = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;

    .bar-container {
        width: 537px;
        height: 60%;
        position: relative;

        .input-con {
            height: 100%;
            width: 487px;
            border-top-left-radius: 26px;
            border-bottom-left-radius: 26px;
            overflow: hidden;
            box-shadow: rgba(74, 74, 74, 0.2) 0px 2px 8px 0px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
                width: 100%;
                height: 100%;
                background-color: #e0e0e0;
                outline-style: none;
                border: none;
                padding-left: 18px;
                overflow-wrap: break-word;
            }
            .send {
                width: 40px;
                height: 80%;
                position: absolute;
                right: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .tools-con {
            width: 8.5%;
            height: 100%;
            background-color: #3fcc7c;
            border-top-right-radius: 26px;
            border-bottom-right-radius: 26px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            position: absolute;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;

            .dropup {
                height: 30px;
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-right: 5px;
                box-sizing: border-box;

                &:hover {
                    /* background-color: #fff; */
                }
            }

            .item {
                width: 90%;
                height: 34px;
                background-color: #3fcc7c;
                border-radius: 3px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                margin: 5px 0;

                &:hover {
                    filter: brightness(1.1);
                }

                .pfile {
                    width: 100%;
                    height: 100%;
                }
            }
            .ep-containe {
                position: absolute;
                right: 0;
                bottom: 1000px;
                margin-bottom: 550px;
            }

            .mic {
                &:hover {
                    cursor: not-allowed ;
                }
            }
        }
    }
`;
