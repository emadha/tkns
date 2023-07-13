import {ReactNode} from "react";

export default function ModulePage({title, children}: { title?: string, children: ReactNode }) {
    return <>
        {title ? <h1>{title}</h1> : <></>}
        {children}
    </>
}