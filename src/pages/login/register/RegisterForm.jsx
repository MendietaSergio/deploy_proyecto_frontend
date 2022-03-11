import {Formik, Form} from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { ContainerFlex, Button, TitleSection } from "../../../styles/CommonComponents";
import Input from "../Input";
import { LinkRegister } from "../LoginForm";
import { useState } from "react";
import Url from "../../../constants/apiUrl";
import { SubmitError } from "../LoginForm";
import { mapObject } from "../../../utils/Utils";
import {Navigate} from "react-router-dom";
import Loader from "../../../Components/modalDialogs/Loader";

const LinkLogin = styled(LinkRegister)`
    margin-bottom: 25px;
`;

const FormRegister = styled(Form)`
    height: 100%;
`;

const RegisterForm = () => {
    const [error, setError] = useState();
    const [sucess, setSucess] = useState(false);
    const [isLoading, setIsLoading] = useState();
    const handleSubmit = async (values) => {
        setIsLoading(true);
        const response = await fetch(Url.login.register, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        });
        const data = await response.json();
        if(data.ok) {
            setSucess(true);
        }
        else {
            setError(data.errors);
        }
        setIsLoading(false);
    }
    return (
        <>
        {sucess && <Navigate to="/login" />}
        <Formik
            initialValues={{ email: '', password: '', password2: "", nombre: ''}}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
                email: Yup.string().email("Ingrese un correo válido").required("Este campo es obligatorio"),
                password: Yup.string().min(6, "El password debe ser más de 6 caracteres").max(8).required("Este campo es obligatorio"),
                password2: Yup.string().min(6, "El password debe ser más de 6 caracteres").max(8).oneOf([Yup.ref('password'), null], "Las contraseñas no coinciden").required("Este campo es obligatorio"),
                nombre: Yup.string().required("Este campo es obligatorio")
            })}
        >
            <ContainerFlex direction="column">
                <ContainerFlex alignItems="flex-start" width="347px" margin="0 0 24px 0">
                    <TitleSection fontSize="30px" lineHeight="35px" margin="25px 0 0 0">Regístrate</TitleSection>  
                </ContainerFlex>
                <FormRegister>
                    <Input name="nombre" placeholder="John Doe" type="text" label="Nombre Completo" />
                    <Input name="password" placeholder="********" type="password" label="Contraseña" />
                    <Input name="password2" placeholder="********" type="password" label="Confirmar contraseña" />
                    <Input name="email" placeholder="JohnDoe@gmail.com" type="email" label="Correo" />
                    <ContainerFlex direction="column" justifyContent="space-between" margin="27px 0 0 0">
                        <Button type="submit" width="347px" height="50px" radius="5px" primary medium>Regístrate</Button>
                        <LinkLogin to='/login'>Ya tienes cuenta? Inicia sesión</LinkLogin>
                    </ContainerFlex>
                </FormRegister>
                <ContainerFlex direction="column" height="100%" justifyContent="flex-start">
                    {error && mapObject(error)?.map((value) => {
                        return (
                            <SubmitError key={value.param}>{value.msg}</SubmitError>
                        )
                    }
                    )}
                </ContainerFlex>
            </ContainerFlex>
        </Formik>
        {isLoading && <Loader />}
        </>
    );
}

export default RegisterForm;
