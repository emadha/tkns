import {ProviderProps} from "react";

export interface WrapperFnInterface extends ProviderProps<any>{
    toggleDarkMode: Function | null,
}