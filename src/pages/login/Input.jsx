import styled from "styled-components";
import {useField} from "formik";
import {useRef, useEffect} from "react";

export const Control = styled.div`
    margin-bottom: 20px;
    width: 100%;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 12px;
    @media (max-height: 668px) {
        font-size: 14px !important;
    }
`;

export const MyInput = styled.input`
    outline: none;
    padding: 8px;
    border: 1px solid #C49A7C;
    border-radius: 5px;
    width: ${props => props.width ? props.width : "350px"};
    margin-bottom: 12px;
    height: ${props => props.height ? props.height : "50px"};
    &:focus {
        border-color: ${props => props.focusColor};
    }
`;

export const ErrorMessage = styled.div`
    color: #f00;
    @media (max-height: 668px) {
        margin: ${props => props.mediaMargin && props.mediaMargin};
        font-size: 12px;
    }
`;

const Input = ({label, tag, ...props}) => {
    const [field, meta] = useField(props);
    const ref = useRef();
    useEffect(() => {
        if(meta.touched && meta.error) {
            ref.current.focus();
        }
    }, [meta.touched, meta.error])
    return (
    <Control>
        <Label>{label}</Label>
        <MyInput as={tag || null} ref={ref} focusColor={meta.touched && meta.error ? "#f00" : "#61ccff"} {...field} {...props} />
        {meta.touched && meta.error ? (<ErrorMessage>{meta.error}</ErrorMessage>) : null}
    </Control>
    )
};

export default Input;