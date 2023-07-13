"use client"
import {Key, ReactNode, useEffect, useState} from "react";
import axios from "axios";
import {int} from "yaml/dist/schema/core/int";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSearch, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {ModulesInterface} from "@/Interfaces/ModulesInterface";

export default function ModulesList() {
    const [loaded, setLoaded] = useState(false)
    const [modulesList, setModulesList] = useState(Object)

    useEffect(() => {
        axios.get('https://onlinetool.loc/api/modules/list').then((r) => {
            setModulesList(() => {
                return Object.entries(r.data.data);
            })
        }).finally(() => {
            setLoaded(true);
        })


    }, [])

    return <>
        {!loaded ? <div className={'flex space-x-2'}>
            <FontAwesomeIcon className={'w-4 aspect-square'}
                             icon={faSpinner}
                             spin={true}/>
            <span>Loading Modules list...</span>
        </div> : <div className={'w-4/12 bg-indigo-900/20 p-5'}>
            {modulesList ?
                <div className={'my-2'}>
                    <div
                        className={'flex items-center bg-black border border-neutral-800 rounded p-2 py-0 mb-5 shadow'}>
                        <FontAwesomeIcon icon={faSearch}/>
                        <input className={'p-2 bg-black text-white ' +
                            'placeholder:text-neutral-800'}
                               placeholder={'Search...'}/>
                    </div>

                    {modulesList?.length && modulesList?.map((e: [[], []], key: Key) => {
                        return <div key={key}
                                    className={'cursor-pointer group py-1 hover:bg-white/5 transition-all px-2 rounded ' +
                                        'text-sm hover:font-bold'}>
                            <span><FontAwesomeIcon icon={faPlus} className={'transition-all mr-2 -ml-2 opacity-0 ' +
                                'group-hover:opacity-100 group-hover:ml-0'}/></span>
                            <span>{e[0].length ? e[0] : 'Uncategorized'}</span>
                            <span className={'ml-2 text-xs text-neutral-500'}>{e[1].length}</span>
                            <div className={'ml-5 opacity-20'}>
                                {e[1].map((i: ModulesInterface) => {
                                    return <div key={i.title}>{i.title}</div>
                                })}
                            </div>
                        </div>
                    })}
                </div>
                : <></>
            }
        </div>
        }
    </>
}