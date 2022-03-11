import styled, { css } from "styled-components";
import { useField } from "formik";
import { ContainerFlex, MediumButton, PrimaryButton, Button } from "../../../styles/CommonComponents";
import { ErrorMessage } from "../../login/Input";
import { useEffect } from "react";

const MyFile = styled.input`
    display: none;
`;

const FileButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
`;

const FileInput = ({refInput, label, imageChange, ...props}) => {
    const [field, meta, helpers] = useField({...props, type: 'file'});
    const {setValue} = helpers;
    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
        imageChange(e);
    }
    return (
        <ContainerFlex direction="column" >
            <FileButton as="label" primary medium height="50px" width="100%" margin="32px 0 12px 0">{label}<MyFile ref={refInput} type="file" {...field} onChange={handleChange} {...props}  /></FileButton>
            {meta.error ? (<ErrorMessage mediaMargin="0 0  20px 0">{meta.error}</ErrorMessage>) : null}
        </ContainerFlex>
    )
}

export default FileInput;
