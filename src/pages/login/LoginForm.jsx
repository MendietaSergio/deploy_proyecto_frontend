import {Formik, Form} from "formik";
import * as Yup from "yup";
import Input from "./Input";
import styled from "styled-components";
import { ContainerFlex, Button, TitleSection } from "../../styles/CommonComponents";
import {Link} from "react-router-dom";
import Checkbox from "./Checkbox";
import { useState, useContext } from "react";
import { ErrorMessage } from "./Input";
import Url from "../../constants/apiUrl";
import UserContext from "../../context/user/UserContext";
import { Navigate } from "react-router-dom";
import Loader from "../../Components/modalDialogs/Loader";

const Welcome = styled.h3`
    font-size: 16px;
    line-height: 19px;
    @media (max-height: 668px) {
        font-size: 14px;
    }
`;

export const LinkRegister = styled(Link)`
    font-size: 16px;
    line-height: 19px;
    color: #616161;
    position: absolute;
    bottom: 0;
    margin-bottom: 50px;
    @media (max-height: 668px) {
        font-size: 14px;
    }
`;

const LinkForget = styled(Link)`
    font-size: 14px;
    line-height: 16px;
    color: #4E3245;
    @media (max-height: 668px) {
        font-size: 12px;
    }
`;

export const SubmitError = styled(ErrorMessage)`
    margin: ${props => props.margin ? props.margin : "20px 0 0 0"};
`;

const LoginForm = () => {
    const [error, setError] = useState();
    const {user, setUser} = useContext(UserContext);
    const [isLoading, setIsLoading] = useState();
    const handleSubmit = async (values) => {
        setIsLoading(true);
        const response = await fetch(Url.login.login, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        });
        const data = await response.json();
        console.log(data);
        if(data.ok) {
            setUser(data);
        }
        else {
            setError(data);
        }
        setIsLoading(false);
    }
    return (
        <>
        {user && <Navigate to="/" />}
        <Formik
            initialValues={{ email: '', password: '', remember: false}}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
                email: Yup.string().email("Ingrese un correo válido").required("Este campo es obligatorio"),
                password: Yup.string().min(6, "El password debe ser más de 6 caracteres").max(8).required("Este campo es obligatorio")
            })}
        >
            <ContainerFlex direction="column">
                <ContainerFlex direction="column" alignItems="flex-start" width="347px" margin="0 0 24px 0">
                    <Welcome>Bienvenido de nuevo</Welcome>  
                    <TitleSection fontSize="30px" lineHeight="35px">Ingresa con tu cuenta</TitleSection>  
                </ContainerFlex>
                <Form>
                    <Input name="email" placeholder="JohnDoe@gmail.com" type="email" label="Correo" />
                    <Input name="password" placeholder="********" type="password" label="Contraseña" />
                    <ContainerFlex width="347px" justifyContent="space-between">
                        <Checkbox name="remember">Recuérdame</Checkbox>
                        <LinkForget to='/recover'>Olvidaste tu contraseña?</LinkForget>
                    </ContainerFlex>
                    <ContainerFlex direction="column" justifyContent="space-between" margin="27px 0 0 0">
                        <Button type="submit" width="347px" height="50px" radius="5px" primary medium>Iniciar sesión</Button>
                        <LinkRegister to='/register'>No tienes cuenta? Registrate</LinkRegister>
                    </ContainerFlex>
                </Form>
                {error && <SubmitError>{error.msg}</SubmitError>}
            </ContainerFlex>
        </Formik>
        {isLoading && <Loader />}
        </>
    )
};

export default LoginForm;