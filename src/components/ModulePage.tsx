import {ReactNode} from "react";
import {TemplateString} from "next/dist/lib/metadata/types/metadata-types";

export default function ModulePage(
    {
        title,
        children,
        description,
    }: {
        title?: string | TemplateString | null | undefined,
        children: ReactNode,
        description?: string | null,
    }) {
    return <>
        {title ? <h1>{title.toString()}</h1> : <></>}
        {description ? <p className={'rounded my-5 p-5 bg-neutral-800'}>{description}</p> : <></>}
        {children}
    </>
}