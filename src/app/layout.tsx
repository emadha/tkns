import '@/css/globals.css'
import type {Metadata} from 'next'
import {Navbar} from "@/Components/Navbar";
import AppContext from "@/Context/AppContext";



export default function RootLayout({children}: { children: React.ReactNode }) {
    let metadata = {};
    return (
        <AppContext>
            <html lang="en">
            <body className={''}>
            <Navbar/>
            <div className={'container mx-auto mt-32'}>
                <h1>{metadata && metadata?.title}</h1>
                {children}
            </div>
            </body>
            </html>
        </AppContext>
    )
}
