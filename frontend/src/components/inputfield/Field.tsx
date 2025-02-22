import React from "react";

import Input from "./Input";
import Label from "./Label";

interface inputFieldProps {
    className?: string;
    type?: string;
    content?: string;
    placeholder?: string;
    defaultValue?: string;
    children?: string;
}
  
const InputField: React.FC<inputFieldProps> = ({type, content, placeholder, defaultValue}) => {
    return (
            <div className="d-flex-m flex-nowrap justify-content-between p-2">
                <div className="form-floating mb-1 w-100">
                <Input className="form-control" type={type} name={content} id={content} placeholder={placeholder} defaultValue ={defaultValue} />
                <Label htmlFor={content}>{placeholder}</Label>
                </div>
            </div>
        )
};

export default InputField;