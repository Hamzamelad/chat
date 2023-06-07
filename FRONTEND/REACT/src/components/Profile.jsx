import React from "react";
import styled from "styled-components";
import img from "../assets/face of man.jpg";
import gif from '../assets/viciadoemcodar.gif'

const Profile = () => {
    return (
        <Styled className="profile">
            <div className="image profile">
                <img className="profile" src={img} alt="image" />
            </div>
            <div className="name profile">
                <h3 className="profile">name</h3>
            </div>
            <hr />
            <div className="gif-sw profile">
                <img className="profile" src={gif} alt="gif discrips that we still working on it" />
                <span className="profile">we still working on it!</span>
            </div>
        </Styled>
    );
};

export default Profile;

const Styled = styled.div`
    height: 480px;
    width: 350px;
    border-radius: 15px;
    background-color: #fff;
    position: absolute;
    top: 5px;
    right: 10px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .image {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0px auto;
        margin-top: 50px;

        img {
            width: 100%;
            height: 100%;
        }
    }
    .name {
        margin: 10px auto;
    }
    .gif-sw {
        height: 250px;
        width: 300px;
        margin: 0px auto;
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }
        span {
            position: absolute;
            color: #fff;
            top: 10px;
            left: 77px;
        }
    }
`;
