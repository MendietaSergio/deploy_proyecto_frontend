import { useField } from "formik";
import styled from "styled-components";
import { ContainerFlex } from "../../styles/CommonComponents";

const Label = styled.label`
    font-size: 14px;
    line-height: 16px;
    color: #4E3245;
    @media (max-height: 668px) {
        font-size: 12px !important;
    }
`;

const Input = styled.input`
    background: #F7FAFC;
    border: 1px solid #E8E8E8;
    width: 15px;
    height: 15px;
    margin-right: 11px;
    border-radius: 50%;
`;

const Checkbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: "checkbox"});
    return (
        <ContainerFlex>
            <Input type="checkbox" {...field} {...props} />
            <Label>{children}</Label>
        </ContainerFlex>
    );
}

export default Checkbox;