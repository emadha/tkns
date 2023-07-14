"use_client";
import React from "react";
import {InputInterface} from "@/Interfaces/InputInterface";

export default function TextArea({
                                     className,
                                     id,
                                     name,
                                     type,
                                     label,
                                     icon,
                                     clearable,
                                     defaultValue,
                                     placeholder = "Enter data here...",
                                     leftIconSpin,
                                     leftIcon,
                                     onChange,
                                     onKeyDown,
                                 }: InputInterface) {

    return <>
        {label ? <label htmlFor={id}>{label}</label> : <></>}
        <textarea
            className={'' + (className ? ' ' + className : '')}
            id={id}
            defaultValue={defaultValue}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    </>
}