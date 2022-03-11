import { LoginContainer } from "../LoginPage";
import { Image } from "../../../styles/CommonComponents";
import logo from "../../../public/images/logo.png";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
    return (
        <LoginContainer mediaPadding="0 0 0 0">
            <Image src={logo} alt="logo" />
            <RegisterForm />
        </LoginContainer>
    );
}

export default RegisterPage;
