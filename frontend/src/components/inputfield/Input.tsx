import React from "react";

interface inputProps{
    type?: string;
    name?: string;
    id?: string;
    className?: string;
    placeholder?: string;
    defaultValue?: string;
}

const Input: React.FC<inputProps> = ({
    className, type, name, id, placeholder, defaultValue
}) => {
    return(
        <input className={className} type={type} name={name} id={id} placeholder={placeholder} defaultValue={defaultValue}/>
    );
};

export default Input;
