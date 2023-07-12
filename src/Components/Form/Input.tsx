import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import React, {KeyboardEventHandler} from "react";

interface Input {
    className?: undefined | string,
    id?: string,
    name?: string,
    type?: string,
    label?: string,
    icon?: string,
    clearable?: boolean,
    placeholder?: string,
    leftIcon?: IconProp,
    leftIconSpin?: boolean,
    defaultValue?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined
}

export const Input = ({
                          className,
                          id,
                          name,
                          type,
                          label,
                          icon,
                          clearable,
                          defaultValue,
                          placeholder,
                          leftIconSpin,
                          leftIcon,
                          onChange,
                          onKeyDown,
                      }: Input) => {
    return <div className={'relative group ' +
        (className ? ' ' + className : '')}>
        {leftIcon && <FontAwesomeIcon
          className={'absolute left-3 group-focus-within:text-white duration-1000 text-neutral-800 top-3.5 h-3'}
          spin={leftIconSpin}
          icon={leftIcon}
        />}
        <input
            className={'p-2 rounded w-full transition-all ' +
                (leftIcon ? ' pl-10 ' : '') +
                'border border-neutral-800 ' +
                'focus:outline-blue-600 focus:outline-none ' +
                'dark:placeholder:text-neutral-700 ' +
                'dark:bg-black'}
            defaultValue={defaultValue}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
        /></div>
}