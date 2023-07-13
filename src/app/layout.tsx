import '@/css/globals.css'
import type {Metadata} from 'next'
import {Navbar} from "@/components/Navbar";
import AppContext from "@/context/AppContext";


export default function RootLayout({children}: { children: React.ReactNode }) {
    const metadata: Metadata = {
        title: 'Test',
    };

    return (
        <AppContext>
            <html lang="en">
            <body className={''}>
            <Navbar/>
            <div className={'container mx-auto mt-32'}>
                {children}ss
            </div>
            </body>
            </html>
        </AppContext>
    )
}
