import styled from "styled-components";
import { Image } from "./CommonComponents";

export const WrapperCard = styled.div`
  background-color: #f1e6de;
  border-radius: 10px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  overflow: hidden;
  figure {
    border-radius: 5px;
    line-height: 0px;
    height: 40vh;
    overflow: hidden;
  }
`;

export const ImageCard = styled(Image)`
  object-fit: cover;
  object-position: top center;
`;

export const WrapperProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25vh;
  div:first-child {
    a {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
`;

export const InfoAuthorCard = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    alig-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
  }
  span {
    font-size: 1.1rem;
  
  }
  div {
    font-size: 1.2rem;
    font-weight: bold;
  }
  & > div:first-child {
    span{
      margin-right: 10px;
    }
  }
  & > div:last-child {
    span{
      margin-left: 5px;
    }
  }
`;
