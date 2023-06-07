import React from "react";
import styled from "styled-components";

import IIICL from "./IIICL";
import IIICR from "./IIICR";
import Menu from "./Menu";

const Create = () => {
    return (
        <StyledCreate>
            <h4>new group</h4>
            <div className="searsh">
                <input type="text" />
            </div>
            <span className="header">new group</span>
            <div className="item">
                <div className="cyrcle"></div>
                <div className="address">
                    <span>create group</span>
                </div>
            </div>
        </StyledCreate>
    );
};

const IIICont = () => {
    return (
        <Styled>
            {/* <Create /> */}
            <IIICL>
                <Menu />
            </IIICL>
            <IIICR></IIICR>
        </Styled>
    );
};

const StyledCreate = styled.div`
    height: 450px;
    width: 280px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    position: absolute;
    z-index: 2;
    top: 10px;
    left: 240px;
    box-sizing: border-box;
    padding: 23px;

    display: flex;
    flex-direction: column;

    h4 {
        color: #3e3e3e;
        font-weight: bold;
    }
    .searsh {
        width: 80%;
        height: 30px;
        border-radius: 15px;
        background-color: #dbdada;
        overflow: hidden;
        margin-bottom: 20px;

        input {
            background-color: #dbdada;
            width: 100%;
            height: 100%;
            outline-style: none;
            border: none;
            padding-left: 10px;
        }
    }
    .item {
        display: flex;
        align-items: center;
        .cyrcle {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background-color: #cf5050;
        }
        .address {
            margin-left: 10px;

            span {
                color: #3e3e3e;
                font-size: 18px;
            }
        }
    }
    .header {
        color: #595959;
        font-size: 15px;
        margin-bottom: 10px;
    }
`;

export default IIICont;

const Styled = styled.div`
    flex: 11.9;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    border: none solid 4px;
    border-top-left-radius: 25px;

    position: relative;

    overflow: hidden;
`;
