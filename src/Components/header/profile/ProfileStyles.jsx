import styled from "styled-components";
import { Link } from "react-router-dom";

export const Name = styled.p`
  color: #333333;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
`;

export const ProfileModal = styled.div`
    height: 100%;
    width: 100%;
    &:before {
        content: "";
        border: 10px solid transparent;
        border-left-color: #fff;
        border-top-color: #fff;
        position: absolute;
        border-radius: 3px;
        top: -8px;
        right: 15px;
        box-shadow: -5px -5px 12px -2px rgb(0 0 0 / 30%);
        transform: rotate(45deg);
        z-index: 1002;
    }
`;

export const Welcome = styled.h4`
    color: #0E0E2C;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 5px;
`;

export const Menu = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    list-style: none;
`;

export const MenuItem = styled.li`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const MenuItemLink = styled(Link)`
    text-decoration: none !important;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.color ? props.color : "#001036"};;
    font-size: 16px;
    padding-left: 16px;
    font-weight: 500;
    width: 100%;
    height: 42px;
    &:hover {
        background: rgba(0,16,54,0.1);
    }

`;

export const Bar = styled.hr`
    width: 100%;
    margin: ${props => props.margin ? props.margin : "15px 0"};;
    border: 1px solid rgb(227, 229, 235);
    outline: none;
`;