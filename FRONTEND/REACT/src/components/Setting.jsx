import React from "react";
import styled from "styled-components";
import { GoSettings } from "react-icons/go";
import { GoKey } from "react-icons/go";
import { MdNotificationsActive } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { BsSunFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

// svg,path

const Setting = () => {
    const [show, setShow] = React.useState({ shutAll: true, menuName: "" });
    const [mode, setMode] = React.useState("light");
    const ref = React.useRef(null);

    const handle = (ev) => {
        if (String(ev.target.className).includes("dd-button")) {
            setShow({ shutAll: false, menuName: "dd-button" });
        } else if (String(ev.target.className).includes("other")) {
        } else {
            setShow({ shutAll: true, menuName: "" });
        }
    };

    const setCN = (para) => {
        try {
            para.className += " setting";
        } catch {}
        [...para.children].map((el) => {
            if (el.children.length > 0) {
                setCN(el);
            } else {
                try {
                    el.className += " setting";
                } catch {}
            }
        });
    };

    React.useEffect(() => {
        setCN(ref.current);
    }, []);
    return (
        <Styled onClick={handle} ref={ref}>
            <div className="left " style={{ pointerEvents: "none" }}>
                <div className="item ">
                    <GoSettings color="black " size={20} />
                    <span>general</span>
                </div>
                <div className="item ">
                    <GoKey color="black " size={20} />
                    <span>account</span>
                </div>
                <div className="item ">
                    <MdNotificationsActive color="black " size={20} />
                    <span>notification</span>
                </div>
                <div className="item ">
                    <IoIosHelpCircleOutline color="black " size={20} />
                    <span>help</span>
                </div>
                {/* <hr style={{margin: '5px'}}/>
                <div className="item">
                    <BiLogOut color="black" size={20} />
                    <span>logout</span>
                </div> */}
            </div>
            <div className="right ">
                <h3>general</h3>
                <span className="header ">theme</span>
                <span className="dis ">app color theme</span>
                <div className="dropdown  dd-button">
                    <div className="cl dd-button" onClick={handle}/>
                    {mode === "light" ? (
                        <BsSunFill
                            className=" dd-button"
                            color="black"
                            size={22}
                        />
                    ) : (
                        <MdDarkMode color="black" size={22} />
                    )}
                    <span className=" dd-button">{mode}</span>
                    <IoMdArrowDropdown
                        className="down  dd-button"
                        color="black"
                        size={22}
                    />
                    {!show.shutAll && show.menuName === "dd-button" && (
                        <div className="menu setting">
                            <div
                                className="item setting"
                                onClick={() => setMode("light")}
                            >
                                <BsSunFill
                                    className="setting"
                                    color="black"
                                    size={22}
                                />
                                <span className="setting">light</span>
                            </div>
                            <div
                                className="item setting"
                                onClick={() => setMode("dark")}
                            >
                                <MdDarkMode
                                    className="setting"
                                    color="black"
                                    size={22}
                                />
                                <span className="setting">dark</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Styled>
    );
};

export default Setting;

const Styled = styled.div`
    height: 480px;
    width: 400px;
    border-radius: 15px;
    background-color: #fff;
    position: absolute;
    top: 4px;
    right: 10px;
    z-index: 2;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    &:hover {
        cursor: default;
    }

    .left {
        flex: 1.5;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px 5px;
        border-right: solid #dad9d9 1px;

        .item {
            display: flex;
            align-items: center;
            padding-left: 8px;
            border-radius: 5px;
            margin-bottom: 3px;
            span {
                margin: 5px 15px;
            }

            &:hover {
                background-color: #e1dcdc;
            }
        }
    }
    .right {
        flex: 3;
        flex-direction: column;
        box-sizing: border-box;
        padding: 20px 20px;

        .header {
            display: block;
            font-size: 23px;
            margin-top: 20px;
        }
        .dis {
            display: block;
        }
        .dropdown {
            width: 150px;
            height: 33px;
            border-radius: 5px;
            background-color: #e9e6e6;
            display: flex;
            align-items: center;
            padding: 0 10px;
            position: relative;

            .cl {
                width: 100%;
                height: 100%;
                background-color: transparent;
                position: absolute;
                right: 0;
            }

            span {
                margin-left: 10px;
                font-size: 16px;
            }
            .down {
                margin-left: 45px;
            }
            .menu {
                /* height: 100px; */
                width: 150px;
                border-radius: 5px;
                position: absolute;
                top: -5px;
                left: 0px;
                background-color: #f2f3f2;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 5px;

                .item {
                    display: flex;
                    box-sizing: border-box;
                    padding: 5px 20px;

                    &:hover {
                        background-color: #fff;
                        cursor: default;
                    }
                }
            }
        }
    }
`;
