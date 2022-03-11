import styled, { keyframes } from "styled-components";
import { WrapperHeaderSection } from "./HomeViewStyle";


export const load = keyframes`
  100%{transform: rotate(360deg)}
`;

export const WrapperHeaderSectionMarket = styled(WrapperHeaderSection)`
  & > div {
    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      select {
        margin-top: 0.5rem;
      }
    }
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  span {
    border-color: #333131;
    border-top-color: transparent;
    border-style: solid;
    border-width: 5px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation-name: ${load};
    animation-duration: 1.2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;