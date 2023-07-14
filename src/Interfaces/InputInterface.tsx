export interface InputInterface {
    className?: undefined | string,
    id?: string,
    name?: string,
    type?: string,
    label?: string,
    label_description?: string,
    icon?: string,
    clearable?: boolean,
    placeholder?: string,
    leftIcon?: IconProp,
    leftIconSpin?: boolean,
    defaultValue?: string,
    children?: ReactNode,
    onChange?: ChangeEventHandler<any> | undefined
    onKeyDown?: KeyboardEventHandler<any> | undefined
    onBlur?: FocusEventHandler<any> | undefined
    onFocus?: FocusEventHandler<any> | undefined
}

import {IconProp} from "@fortawesome/fontawesome-svg-core";
import React, {ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, ReactNode} from "react";
