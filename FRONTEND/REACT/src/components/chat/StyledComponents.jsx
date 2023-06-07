import styled from "styled-components";

export const StyledMassageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: ${(props) => (props.isSender ? "10px" : "0")};

    .text-message {
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
`;

export const StyledBody = styled.div`
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    background-color: #fff;
    display: flex;
    flex-direction: column;

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

export const StyledLike = styled.div`
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: #e48e8e;
    top: -120px;
    right: 20px;
`

export const StyledSendBar = styled.div`
    width: 100%;
    height: 65px;
    border: solid 1px #ebe8e8;
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    padding: 0 20px;

    svg {
        color: rgb(0, 132, 255);
        fill: rgb(0, 132, 255);
    }

    .icon-container {
        height: 33px;
        width: 33px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &:hover {
            background-color: #c7c6c6;
        }
    }

    .left {
        flex: 1;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .middle {
        flex: 4;
        height: 55px;
        display: flex;
        align-items: center;
        position: relative;

        input {
            background-color: #e0dfdf;
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

        .emo {
            position: absolute;
            right: 0;
            margin-right: 12px;
        }
    }
    .right {
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`;
