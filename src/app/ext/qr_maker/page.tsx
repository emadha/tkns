import ModulePage from "@/components/ModulePage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Qr Code Generator',
    description: 'Generated by create next app',
}
export default function QrMaker() {

    return <ModulePage title={metadata.title}>
        
    </ModulePage>
}