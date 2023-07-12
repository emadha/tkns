"use client"
import {createContext, ProviderProps, ReactNode, useEffect, useState} from 'react'
import {WrappedBuildError} from "next/dist/server/base-server";
import {WrappedFunction} from "scheduler/tracing";

export const AppContextContainer = createContext(null)

export default function AppContext({children}: { children: ReactNode }) {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {

        if (
            (localStorage.theme === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))) {

            document.documentElement.classList.add('dark')
            setDarkMode(true)
        } else {
            document.documentElement.classList.remove('dark')
            setDarkMode(false)
        }

    }, [])

    const toggleDarkMode = () => {

        // toggle Dark mode 0|1
        setDarkMode(prevState => !darkMode)

        // toggle Dark mode className on|off
        darkMode ? document.documentElement.classList.remove('dark')
            : document.documentElement.classList.add('dark')

        // toggle storage theme
        localStorage.theme = darkMode ? 'light' : 'dark'

        console.info('%c theme:', 'color:green', localStorage.theme)
    }

    const fn: WrappedFunction<any> = {
        toggleDarkMode: toggleDarkMode,
    };

    return <AppContextContainer.Provider value={{...fn}}>
        {children}
    </AppContextContainer.Provider>
}

