import styled from "styled-components";
import { ContainerFlex } from "./CommonComponents";

export const ContainerFlexHome = styled(ContainerFlex)`
  position: relative;
  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
    padding: ${(props) => props.paddingDesktop && props.paddingDesktop};
    align-items: ${(props) =>
      props.alignItemsDesktop ? props.alignItemsDesktop : "center"};
    justify-content: ${(props) =>
      props.justifyContentDesktop ? props.justifyContentDesktop : "center"};
  }
`;

export const WrapperHeroInfo = styled.div`
  padding: 2rem 0rem 5rem 0rem;
  @media (min-width: 767px) {
    padding: 0rem;
    width: 50%;
  }
`;

export const WrapperCardsection = styled.div`
  margin: ${(props) => props.margin && props.margin};
  @media (min-width: 767px) {
    width: ${(props) => props.width && props.width};
  }
`;

export const WrapperHeroButton = styled.div`
  padding-top: 1rem;
`;

export const WrapperHeaderSection = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
`;

export const HomeSection = styled.section`
  padding: ${(props) =>
    props.padding ? props.padding : "1rem 0rem 1rem 0rem"};
`;

export const backgroundCardHero = styled.span`
  position: absolute;
`;

export const StatCardWrapper = styled(WrapperCardsection)`
  text-align: center;
  div:first-child {
    font-size: 2.2rem;
    font-weight: bold;
  }
`;