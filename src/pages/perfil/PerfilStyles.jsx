import styled from "styled-components";
import BackgroundPerfil from "../../public/images/logo.png"
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

export const ArrowLeft = styled(MdChevronLeft)`
  position: relative;
  right: 15px;
  width: 50px;
  height: 50px;
  background: #FFF;
  border: 1px solid #151515;
  border-radius: 50%;
  opacity: 0.5;
  &:hover {
      opacity: 1;
  }
`;

export const ArrowRight = styled(MdChevronRight)`
  position: relative;
  left: 15px;
  width: 50px;
  height: 50px;
  background: #FFF;
  border: 1px solid #151515;
  border-radius: 50%;
  opacity: 0.5;
  &:hover {
      opacity: 1;
  }
`;

export const ProfileName = styled.p`
    font-size: 24px;
    color: #15110E;
    line-height: 28px;
    letter-spacing: 0.03em;
`;

export const BgPerfil = styled.div`
    background: url(${BackgroundPerfil}) no-repeat center center fixed;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
`;