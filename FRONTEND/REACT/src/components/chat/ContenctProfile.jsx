import React from 'react'
import styled from 'styled-components'
import {SlExclamation} from "react-icons/sl"
import img from '../../assets/face of man.jpg'

const ContenctProfile = () => {
  return (
    <Styled className='cpmenu'>
        <div className="cpmenu left">
            <div className="cpmenu item">
                < SlExclamation className="cpmenu" color='black' size={20}/>
                <span className="cpmenu">hello</span>
            </div>
            <div className="cpmenu item">
                < SlExclamation className="cpmenu" color='black' size={20}/>
                <span className="cpmenu">hello</span>
            </div>
            <div className="cpmenu item">
                < SlExclamation className="cpmenu" color='black' size={20}/>
                <span className="cpmenu">hello</span>
            </div>
        </div>
        <div className="cpmenu right">
            <div className="cpmenu image">
                <img className="cpmenu" src={img} alt="profile picture" />
            </div>
            <div className="cpmenu name">
                <span className="cpmenu">name</span>
            </div>
        </div>
    </Styled>
  )
}

export default ContenctProfile

const Styled = styled.div`
    height: 480px;
    width: 400px;
    border-radius: 15px;
    background-color: #fff;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .left {
        flex: 1.5;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px 5px;
        border-right: solid #dad9d9 1px ;
        

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
        padding-left: 40px;

        .image {
            height: 80px;
            width: 80px;
            border-radius: 50%;
            background-color: #fff;
            margin: 20px 0px;
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
             }
        }
        .name {
            span {
                color: black;
                font-size: 26px;
            }
        }
    }
`