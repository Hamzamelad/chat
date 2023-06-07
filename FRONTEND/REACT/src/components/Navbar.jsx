import React from "react";
import styled from "styled-components";
import { BsFillPeopleFill, BsChatFill } from "react-icons/bs";
import { RiInboxArchiveFill } from "react-icons/ri";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { RiLogoutBoxFill } from "react-icons/ri";

import { useAuth } from "../context/AuthContext";

const NavItem = ({ children, coll, handle }) => {
    return (
        <StyledItem coll={coll} onClick={handle}>
            {children}
        </StyledItem>
    );
};

const NavFooter = (props) => {
    const {logout} = useAuth();

    return (
        <StyledFooter coll={props.coll}>
            <div className="logout" onClick={logout}>
                <RiLogoutBoxFill size={30} />
                {!props.coll && <span>logout</span>}
            </div>
            <div className="coll" onClick={() => props.setColl((c) => !c)}>
                <TbLayoutSidebarLeftCollapse size={30} />
            </div>
        </StyledFooter>
    );
};

const Navbar = () => {
    const [coll, setColl] = React.useState(false);
    const { menu, setMenu } = useAuth();

    const handle = (para) => {
        setMenu(para);
        // console.log(para)
    };

    return (
        <Styled coll={coll}>
            <div className="navitem-container">
                <NavItem coll={coll} handle={handle.bind(null, "chats")}>
                    <BsChatFill size={28} />
                    {!coll && <span>chats</span>}
                </NavItem>
                <NavItem coll={coll} handle={handle.bind(null, "people")}>
                    <BsFillPeopleFill size={28} />
                    {!coll && <span>people</span>}
                </NavItem>
                <NavItem coll={coll} handle={handle.bind(null, "archive")}>
                    <RiInboxArchiveFill size={28} />
                    {!coll && <span>archive</span>}
                </NavItem>
            </div>
            <NavFooter setColl={setColl} coll={coll} />
        </Styled>
    );
};

export default Navbar;

const StyledItem = styled.div`
    width: 90%;
    height: 45px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    justify-content: ${(props) => props.coll && "center"};
    align-items: center;
    gap: 15px;

    &:hover {
        background-color: #928e8e;
    }

    span {
        font-weight: bold;
        font-size: 18px;
    }
`;
const StyledFooter = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0px 10px;
    display: flex;
    flex-direction: ${({ coll }) => coll && "column"};
    gap: 8px;
    justify-content: space-between;
    align-items: center;

    .logout {
        margin-bottom: 4px;
        margin-left: ${({ coll }) => !coll && "8px"};
        display: flex;
        justify-content: ${({ coll }) => (coll ? "center" : "space-between")};
        align-items: center;
        border-radius: 3px;
        padding: ${({ coll }) => (!coll ? "3px 6px 3px 1px" : "5px")};

        &:hover {
            background-color: #cfcdcd;
            cursor: default;
        }

        span {
            font-size: 20px;
            font-weight: bold;
        }
    }

    .coll {
        transform: ${(props) => props.coll && "rotate(180deg)"};
    }
`;

const Styled = styled.div`
    flex: 1;
    max-width: ${(props) => (props.coll ? "70px" : "none")};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding-top: 66px;
    padding-bottom: 8px;

    .navitem-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;
