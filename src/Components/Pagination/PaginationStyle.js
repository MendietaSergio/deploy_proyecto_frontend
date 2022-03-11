import styled, { css } from "styled-components";

export const ContentPageCount = styled.div`
  display: flex;
  margin: 0 1rem;
  span {
    display: block;
    padding: 1rem;
  }
`;
export const ContentPagination = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  button {
    cursor: pointer;
  }
`;

export const PaginationItemsCss = css`
  & {
    background-color: ${({ theme }) => theme.palette.primary};
  }
`;

export const PaginationItems = styled.span`
  color: ${({ theme }) => theme.palette.textDark};
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      ${PaginationItemsCss}
    `};
`;
