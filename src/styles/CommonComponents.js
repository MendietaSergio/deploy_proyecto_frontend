import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 1200px;
  margin: ${props => props.margin ? props.margin : "0 auto"};
`;

export const ContainerFluid = styled.div`
  width: 100%;
`;

export const ContainerFlex = styled.div`
  display: flex;
  background: ${props => props.background && props.background};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  gap: ${(props) => props.gap && props.gap};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  padding: ${(props) => props.padding && props.padding};
  margin: ${(props) => props.margin && props.margin};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  border-radius: ${props => props.borderRadius && props.borderRadius};
  position: ${props => props.position && props.position};
  right: ${props => props.right && props.right};
  overflow-y: ${props => props.overflowY && props.overflowY};
  overflow-x: ${props => props.overflowX && props.overflowX};
  scrollbar-width: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  min-width: ${props => props.minWidth && props.minWidth};
  max-width: ${props => props.maxWidth && props.maxWidth};
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.templateColumns ? props.templateColumns : "repeat(auto-fit, minmax(300px, 1fr))"};
  grid-template-rows: ${props => props.templateRows && props.templateRows};
  grid-gap: ${props => props.gap ? props.gap : "20px"};
  padding: ${(props) => props.padding && props.padding};
  margin: ${(props) => props.margin && props.margin};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
`;

export const TitleSection = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "3rem")};
  font-weight: bold;
  letter-spacing: ${props => props.letterSpacing ? props.letterSpacing : "0.1rem"};
  line-height: ${props => props.lineHeight ? props.lineHeight : "6.313rem"};
  margin: ${props => props.margin && props.margin};
  ${({ primary, theme }) => primary && css`
    & {
      color: ${theme.palette.primary}
    }
  `}
  ${({ secondary, theme }) => secondary && css`
    & {
      color: ${theme.palette.secondary}
    }
  `}
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : "center")};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0.1rem"};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "6.313rem")};
  ${({ primary, theme }) =>
    primary &&
    css`
      & {
        color: ${theme.palette.primary};
      }
    `}
  ${({ secondary, theme }) =>
    secondary &&
    css`
      & {
        color: ${theme.palette.secondary};
      }
    `}
`;

export const SubTitleSection = styled.h2`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
  font-weight: bold;
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0.1rem"};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "6.313rem")};
  ${({ primary, theme }) =>
    primary &&
    css`
      & {
        color: ${theme.palette.primary};
      }
    `}
  ${({ secondary, theme }) =>
    secondary &&
    css`
      & {
        color: ${theme.palette.secondary};
      }
    `}
`;

export const Image = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100vh")};
  border-radius: ${props => props.radius && props.radius};
  border: ${props => props.border && props.border};
  grid-row: 1 / 2;
  z-index: 1;
`;

export const PrimaryButton = css`
  & {
    background-color: ${({ theme }) => theme.palette.primary};
    border-color: ${({ theme }) => theme.palette.primary};
    font-family: ${({ theme }) => theme.fonts[0]};
    color: ${({ theme }) => theme.palette.text};
    padding: 0.5rem 1rem;
  }
`;

export const SecondaryButton = css`
  & {
    background-color: ${({ theme }) => theme.palette.secondary};
    border-color: ${({ theme }) => theme.palette.secondary};
    font-family: ${({ theme }) => theme.fonts[0]};
    color: ${({ theme }) => theme.palette.text};
  }
`;

export const SmallButton = css`
  & {
    padding: 0.5rem 2rem;
    font-size: ${({ theme }) => theme.size.sm};
  }
`;
export const MediumButton = css`
  & {
    padding: 0.5rem 2rem;
    font-size: ${({ theme }) => theme.size.md};
  }
`;

export const Button = styled.button`
  outline: 0;
  cursor: pointer;
  color: ${(props) => props.color && props.color};
  background: ${(props) => props.background && props.background};
  border: ${(props) => props.border && props.border};
  border-radius: ${(props) => props.radius && props.radius};
  margin: ${(props) => props.margin && props.margin};
  box-shadow: ${(props) => props.boxShadow && props.boxShadow};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  ${(props) =>
    props.primary &&
    css`
      ${PrimaryButton}
    `}
  ${(props) =>
    props.secondary &&
    css`
      ${SecondaryButton}
    `};
  ${(props) =>
    props.small &&
    css`
      ${SmallButton}
    `};
  ${(props) =>
    props.medium &&
    css`
      ${MediumButton}
    `};
`;
