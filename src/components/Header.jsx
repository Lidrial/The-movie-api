import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Button from './Button';
import DropDown from './DropDown';
import { GoSearch } from 'react-icons/go'
import SearchBar from './SearchBar';
import { MyContext } from './AppContext';
 

const netflix_img = "https://image.tmdb.org/t/p/w200/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"


const Header = (props) => {

    const {store,setStore} = useContext(MyContext)

    const LogOut = () => {
        sessionStorage.clear()
        setStore({...store, isUserAuth : false})
    }

    const setDark = () =>{
        if( store.darkToggle == false){
            setStore({...store, darkToggle : true})
        }else{
            setStore({...store, darkToggle : false})
        }
    }

  return (
    <div className={`flex flex-row justify-between p-1.5 bg-slate-50 dark:bg-gray-700 `}>
        <div className="flex gap-4 items-center">
        <img src={netflix_img}/>
            <label class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" onClick={setDark} value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 transition-all">Dark Mode</span>
            </label>
        </div>
        <ul className="flex gap-4 justify-end">
            <li className='flex items-center'>
                <SearchBar/>
            </li>
            <li className='flex items-center'>
                <Link to={props.home} className=''>
                    <Button
                        buttonText='Home'
                        style={store.styleButton}
                    />  
                </Link>

            </li>
            <li className='flex items-center'>
                <DropDown
                    listStyle={store.styleList}
                    styleItem={store.styleItem}
                    nameButton='Type'
                    listItem ='Films;Séries'
                    link = '/film;/serie'
                />
            </li>
            <li className='flex items-center'>
                <DropDown
                    listStyle={store.styleList}
                    styleItem={store.styleItem}
                    nameButton='Genre'
                    listItem ='Enfant;Pixar;Disney;ETC'
                    link = '/kids;/pixar;/disney;/etc'
                />                
            </li>
            <li className='flex items-center'>
                <Button
                    buttonText='Log Out'
                    style={store.styleButton}
                    onClick={LogOut}
                />                            
            </li>
        </ul>
    </div>
  )
}

export default Header