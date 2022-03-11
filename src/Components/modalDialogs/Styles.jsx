import styled from "styled-components";
import { ContainerFlex, Button } from "../../styles/CommonComponents";
import {MdDone} from "react-icons/md";
import {AiOutlineArrowRight, AiOutlineClose} from "react-icons/ai";

const handleColorType = color => {
    switch (color) {
      case "success":
        return "#47c9a2";
      case "error":
        return "#e85e6c";
      default:
        return "#fff";
    }
};

export const ArrowIcon = styled(AiOutlineArrowRight)`
    font-size: 20px;
`;

export const ErrorIcon = styled(AiOutlineClose)`
    font-size: 50px;
`;

export const ModalHeader = styled(ContainerFlex)`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: ${props => handleColorType(props.background)};;
`;

export const IconBox = styled.div`
    color: #fff;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    border: 5px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalTitle = styled.h4`
    font-size: 36px;
    font-weight: 500px;
    color: #434e65;
    margin: 10px 0;
    text-align: center;
    line-height: 1.2;
`;

export const P = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: center;
    color: #434e65;
    font-weight: 400;
`;

export const Span = styled.span`
    margin: ${props => props.margin && props.margin};
    font-size: 18px;
`;

export const ExploreButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CorrectIcon = styled(MdDone)`
    font-size: 50px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    color: #fff;
    opacity: 0.5;
    text-shadow: none;
    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    border-radius: 0;
    text-transform: none;
    &:hover {
        opacity: 0.75;
    }
`;