import { Formik, Form } from "formik";
import { Container, ContainerFlex, Image, Button, TitleSection, ContainerGrid } from "../../../styles/CommonComponents";
import Input from "../../login/Input";
import styled from "styled-components";
import * as Yup from "yup";
import FileInput from "./FileInput";
import { useEffect, useRef, useState, useContext } from "react";
import Url from "../../../constants/apiUrl";
import SUPPORTED_FORMATS from "../../../constants/fileFormats";
import Modal from "../../../Components/modal/Modal";
import useModal from "../../../hooks/useModal";
import Dialog from "../../../Components/modalDialogs/Dialog";
import Loader from "../../../Components/modalDialogs/Loader";
import UserContext from "../../../context/user/UserContext";
import { Navigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import SelectInput from "./SelectInput";

const PreImage = styled(Image)`
    background-color: #EFEFEF;
    box-shadow: 0px 2px 3px rgb(0,0,0,0.3);
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

const UploadImageContainer = styled(ContainerGrid)`
    @media (max-width: 767px) {
        grid-row: 1;
        padding: 0;
    }
`;

const UploadArt = () => {
    const {response} = useApi(Url.art.categories, {
        method: "GET"
    });
    const {user} = useContext(UserContext);
    const [isOpen, openModal, closeModal] = useModal();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState();
    const ref = useRef();
    const refInput = useRef();
    const reader = new FileReader();
    const handleSubmit = async (values) => {
        try {
            setIsLoading(true);
            const formData = new FormData();
            formData.append("file", refInput.current.files[0]);
            formData.append("upload_preset", "my_upload");
            const response = await fetch(Url.cloudinary, {
                method: "POST",
                body: formData
            })
            if(!response.ok) {throw new Error(response);}
            const data = await response.json();
            const newValues = {
                ...values,
                img_art: data.url,
                categoria: sessionStorage.getItem("category"),
                autor_producto: `${user.usuario._id}`,
                nombre_autor: `${user.usuario.nombre}`
            }
            const requestUpload = await fetch(Url.art.addart, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newValues)
            })
            if(!requestUpload.ok) {throw new Error(requestUpload);}
            const responseUpload = await requestUpload.json();
            console.log(responseUpload); 
        } catch(e) {
            console.log(e);
            setError(true);
        }
        finally {
            setIsLoading(false);
            openModal();
        }
    }
    const renderImage = (e) => {
        console.log(e.target.files[0]);
        e.target.files[0] ? reader.readAsDataURL(e.target.files[0]) : ref.current.src = "";
    }
    const refImage = () => {
        console.log("entre al ref image")
        ref.current.src = reader.result;
    }
    useEffect(() => {
        console.log("entre al use effectg")
        reader.addEventListener("load", refImage);
        return () => {
            reader.removeEventListener("load", refImage);
        }
    },[reader])
    return (
        <>
            {!user && <Navigate to="/login" />}
            <Formik
                initialValues={{ nombre: '', descripcion: '', categoria: '', precio: '', img_art: "" }}
                onSubmit={handleSubmit}
                validationSchema={Yup.object({
                    nombre: Yup.string().required("Este campo es obligatorio"),
                    descripcion: Yup.string().required("Este campo es obligatorio"),
                    categoria: Yup.string().required("Este campo es obligatorio"),
                    precio: Yup.number().required("Este campo es obligatorio"),
                    img_art: Yup.mixed().required("Este campo es obligatorio").
                    test('fileFormat', "Formato no soportado", value => value && SUPPORTED_FORMATS.includes(value.split('.').pop()))
                })}
            >   
                <Form>
                    <Container margin="25px auto">
                        <TitleSection>Publicar arte</TitleSection>
                        <ContainerGrid width="100%" height="100%" margin="0" gap="0">
                            <ContainerFlex direction="column" width="100%" height="fit-content" justifyContent="flex-start">
                                <Input name="nombre" type="text" label="Nombre de la obra" width="100%" />
                                <Input tag="textarea" name="descripcion" type="text" label="Descripcion" width="100%" height="200px" />
                                <SelectInput name="categoria" label="Categoria" width="100%" height="50px">
                                    <option disabled hidden value="" >Seleccione una categoria</option>
                                    {response &&
                                        response?.map((categorias) => {
                                            return (
                                                <option key={categorias._id} data-id={categorias._id}>{categorias.name}</option>
                                            )
                                        })
                                    }
                                </SelectInput>
                                <Input name="precio" type="number" label="Precio" width="100%" />
                            </ContainerFlex>
                            <UploadImageContainer width="100%" height="fit-content" gap="0" padding="0 50px" templateRows="auto">
                                <PreImage ref={ref} />
                                <FileInput refInput={refInput} name="img_art" label="SUBIR IMAGEN" accept="image/*" margin="32px 0 12px 0" width="100%" imageChange={renderImage} />
                            </UploadImageContainer>
                        </ContainerGrid>
                        <Button type="submit" width="100%" primary medium height="50px">PUBLICAR AHORA</Button>
                    </Container>
                </Form>
            </Formik>
            {isLoading && <Loader />}
            <Modal isOpen={isOpen} closeModal={closeModal} clickOutside={true}>
                <Dialog closeModal={closeModal} 
                title={error ? "Ooops!" : "Genial!"} 
                content={error ? "Algo salió mal. La publicacion no se subio" : "Tu obra fue publicada con exito!"}
                btnText={error ? "Intentar de nuevo" : "Ver publicacion"} 
                type={error ? "error" : "success"}
                />
            </Modal>
        </>
    )
}

export default UploadArt;
