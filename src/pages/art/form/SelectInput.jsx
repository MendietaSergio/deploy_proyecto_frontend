import {
    Control,
    Label,
    MyInput,
    ErrorMessage,
} from "../../login/Input";

import { useField } from "formik";
import { useEffect, useRef } from "react";

const SelectInput = ({label, ...props}) => {
    const [field, meta, helpers] = useField({...props, type: 'select'});
    const {setValue} = helpers;
    const ref = useRef();
    const handleChange = (e) => {
        const options = Array.from(e.target.children);
        const selected = options.filter((option) => {
            return option.value === e.target.value;
        })
        console.log(e.target.value);
        console.log(selected[0]);
        sessionStorage.setItem("category", selected[0].getAttribute("data-id"));
        setValue(e.target.value);
    }
    useEffect(() => {
        if(meta.touched && meta.error) {
            ref.current.focus();
        }
    }, [meta.touched, meta.error])
    return (
        <Control>
            <Label>{label}</Label>
            <MyInput as="select" ref={ref} focusColor={meta.touched && meta.error ? "#f00" : "#61ccff"} {...field} onChange={handleChange} {...props} />
            {meta.touched && meta.error ? (<ErrorMessage>{meta.error}</ErrorMessage>) : null}
        </Control>
    );
}

export default SelectInput;