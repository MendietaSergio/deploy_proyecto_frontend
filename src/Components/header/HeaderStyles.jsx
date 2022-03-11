import styled from "styled-components";
import {BsSearch} from "react-icons/bs";
import { Button, MediumButton } from "../../styles/CommonComponents";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  height: ${props => props.height ? props.height : "70px !important"};
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 2px 3px rgb(0,0,0,0.3);
  background: ${props => props.background ? props.background : "#FFF"};;
  z-index: 999;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection && props.flexDirection};
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: ${props => props.gap ? props.gap : "40px"};
  margin: ${props => props.margin ? props.margin : "0 auto"};
`;

export const NavItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(Link)`
  white-space: nowrap;
  text-decoration: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-weight: 500;
  font-size: 16px;
  height: 100%;
  width: 90px;
  &:hover {
    color: #555;
    border-bottom: 5px solid #22B9CA;
  }
  &:focus {
    color: #555;
    border-bottom: 5px solid #22B9CA;
  }
`;

export const BtnLink = styled(Link)`
  ${MediumButton}
  outline: 0;
  cursor: pointer;
  color: ${props => props.color && props.color};
  background: ${props => props.background && props.background};
  border-radius: ${props => props.radius ? props.radius : "6px"};
  text-decoration: none !important;
  &:hover {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`;

export const Search = styled.input`
  padding: 0.375rem 0.75rem;
  padding-left: 2rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  margin-right: 0.5rem !important;
  display: inline-block;
  width: auto;
  vertical-align: middle;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`;

export const Find = styled(BsSearch)`
  color: #495057;
`;

export const ButtonSearch = styled(Button)`
  position: relative;
  right: 40px;
`;