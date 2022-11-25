import {React,useState} from 'react'
import { createContext } from 'react'

export const MyContext = createContext(null)


const AppContext = ({children}) => {

    const [ store, setStore ] = useState({
        darkToggle: false,
        isUserAuth: false,
        styleButton : 'bg-transparent w-24 hover:bg-blue-500 dark:hover:bg-slate-50 dark:bg-blue-500 text-blue-500 dark:hover:text-blue-500 dark:text-slate-50 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded',
        styleList : 'bg-transparent w-24 overflow-hidden absolute text-blue-500 dark:text-slate-50 font-semibold divide-y divide-solid divide-blue-500 border border-blue-500 rounded-b',
        styleItem : 'bg-white w-24 dark:bg-blue-500 bg-clip-border w-full hover:bg-blue-500 dark:hover:bg-slate-50 text-blue-500 dark:text-slate-50 dark:hover:text-blue-500 font-semibold hover:text-white py-2 px-4 hover:border-transparent',
        searchQuery : ''

    })

    return (
        <MyContext.Provider value={{store, setStore}}>
            {children}
        </MyContext.Provider>
    )
}

export default AppContext