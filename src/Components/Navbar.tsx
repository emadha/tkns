"use client"

import {ThemeSwitcher} from "@/Components/ThemeSwitcher";
import {Input} from "@/Components/Form/Input";
import React, {useEffect, useState} from "react";
import {faExclamationTriangle, faSearch, faSpinner} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {ModulesInterface} from "@/Interfaces/ModulesInterface";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Navbar = () => {

    const [query, setQuery] = useState('')

    const [modulesList, setModulesList] = useState({})
    const [filteredModules, setFilteredModules] = useState({})
    const [loaded, setLoaded] = useState(false)

    const searchModules = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target?.value)
    }

    const searchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            e.currentTarget.blur()
            e.currentTarget.value = "";
            setTimeout(() => setQuery(''), 500);
        }
    }

    useEffect(() => {
        axios.get('https://onlinetool.loc/api/modules/list').then((r) => {
            setModulesList((prevState) => {
                return r.data?.data;
            })
        }).finally(() => {
            setLoaded(true);
        })


    }, []);

    useEffect(() => {
        filterModules(query);
    }, [query])

    // When Modules List Change, updates filteredList as well
    useEffect(() => {

    }, [modulesList])

    const filterModules = (query: String) => {
        let filtered: Array<any> = [];

        modulesList && Object.entries(modulesList).forEach((modules: Array<any>, key) => {
            let ml: [] = modules[1];
            let found: Array<any> = (ml.filter((f: ModulesInterface) => {
                return f.title.toLowerCase().includes(query.toLowerCase())
            }));

            if (found.length) {
                filtered[modules[0]] = found;
            }

            setFilteredModules(filtered)
        });
    }

    // @ts-ignore
    return <div className={'h-32 p-2 w-full fixed top-0 bg-black z-40 group'}>
        <div className={'container mx-auto flex justify-between items-center'}>
            <a href={'/'} className={'w-3/12 select-none cursor-pointer px-4 py-2 rounded shadow'}>
                <h5 className={'font-black text-5xl'}>
                    toolk.ist
                </h5>
                <small className={'-mt-1.5 block'}>speedy tools</small>
            </a>
            <div className={'transition-all duration-300 w-4/12 focus-within:w-8/12 flex items-center justify-end'}>
                <a className={'w-2/12'}>Browse</a>
                <Input placeholder={loaded ? 'Search here...' : 'Loading modules...'}
                       leftIcon={loaded ? faSearch : faSpinner}
                       className={'relative z-[1] w-10/12'}
                       leftIconSpin={!loaded}
                       onChange={searchModules}
                       defaultValue={query}
                       onKeyDown={searchKeyDown}
                />
            </div>
            <div className={'w-1/12 text-right'}>
                <ThemeSwitcher/>
            </div>
        </div>
        <div tabIndex={1}
             className={'container z-0 scale-y-0 duration-[700ms] -mt-96 opacity-0 transition-all mx-auto ' +
                 'bg-indigo-900 p-10 rounded-xl shadow overflow-auto max-h-[calc(100vh-200px)] ' +
                 'group-focus-within:scale-y-100 group-focus-within:mt-10 group-focus-within:opacity-100'}
             style={{scrollbarWidth: 'thin'}}>
            <div className={'flex flex-wrap'}>
                {filteredModules && Object.entries(filteredModules).length ? Object.entries(filteredModules).map((filtered: Array<any>) => {
                    let categoryTitle: string = filtered[0];
                    let categoryModules: Array<ModulesInterface> = filtered[1]
                    return <div key={filtered[0]} className={'w-1/2 md:w-1/3 lg:w-1/6'}>
                        <h3 className={'font-bold'}>{categoryTitle.length ? categoryTitle : 'Uncategorized'}</h3>
                        <div>
                            {categoryModules.map(module => {
                                // @ts-ignore
                                return <div key={module.id} className={'text-sm'}>
                                    <a href={'#'} className={'hover:font-bold'}>{module.title}</a>
                                </div>
                            })}
                        </div>
                    </div>
                }) : <div className={'flex items-center justify-center w-full select-none'}>
                    <div className={'w-full text-center mx-auto'}>
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        <span>Nothing Found</span>
                    </div>
                </div>}
            </div>
        </div>

    </div>
}
