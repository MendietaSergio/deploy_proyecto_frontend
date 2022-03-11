import styled from "styled-components";
import { Image } from "../../styles/CommonComponents";
import logo from "../../public/images/logo.png"
import LoginForm from "./LoginForm";

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 767px) {
      display: flex;
      flex-direction: center;
      justify-content: center;
      height: 100vh;
      padding: ${props => props.mediaPadding ? props.mediaPadding : "0 0 150px 0"};
      img {
        display: none;
      }
  }
  @media (max-height: 668px) {
      button, input {
        height: 30px;
      }
      label {
        font-size: 12px;
      }
  }
`;

const LoginPage = () => {
    return (
        <LoginContainer>
            <Image src={logo} alt="logo" />
            <LoginForm />
        </LoginContainer>
    );
}

export default LoginPage;