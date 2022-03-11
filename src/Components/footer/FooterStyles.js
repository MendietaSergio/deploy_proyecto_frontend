import styled from "styled-components";

export const Footer = styled.footer`
  background-color: black;
  height: 200px;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .primary-footer {
    margin-top: 20;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    hr {
      width: 100%;
      height: 1px;
      margin-top: 30px;
      border: none;
      outline: none;
      background-color: white;
      opacity: 0.2;
    }
  }

  ul {
    display: flex;
    gap: 15px;
  }

  li {
    font-size: 16px;
    list-style: none;
    display: inline-block;

    a {
      padding: 0 !important;
    }

  }

  .secondary-footer {
    margin-top: 20;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .copy-right {
      font-family: Raleway,sans-serif;
      font-size: 0.9em;  
    }
  }

  @media only screen and (max-width: 439px) {

  .primary-footer  li{
    font-size: 14px;
  }

  .copy-right {
      font-size: 12px !important;  
    }

}
`;
