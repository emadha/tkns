import React from "react";
import {metadata} from "@/app/dash/page";
import {getStaticInfoIncludingLayouts} from "next/dist/build/entries";
export async function getStaticProps() {
    return { props: { title: 'HomePsssage' } }
}
export default function Layout({children}: { children: React.ReactNode }) {

    return <>
        <h1>
        </h1>
        {children}
    </>
}