import { GoSearch } from 'react-icons/go'
import Button from './Button';
import React, { useEffect, useState, useRef, useContext } from 'react'
import { MyContext } from './AppContext';

const SearchBar = () => {

    const {store,setStore} = useContext(MyContext)

    const handleFill = event => {
        setStore({...store, searchQuery : event.target.value})
    }

    const Expand = () => {
        console.log('expand');
    }

    // const Search = () => {
    //     console.log('search');
    //     setQuery(fillSearch)
    //     console.log(query);

    // }

    const ref = useRef(null)

    const handleClick = (event) =>{
        event.preventDefault();
        ref.current.focus()
    }




  return (
    <div className='flex dark:bg-blue-500 justify-around gap-2 px-2 items-center border border-blue-500 rounded'>
        <input 
            ref={ref}
            type='search' 
            id='search'
            className={`bg-transparent text-blue-500 dark:text-slate-50 focus:outline-none float-right w-0 focus:w-40 transition-all duration-500 ease`}
            onChange={handleFill}
            value = {store.searchQuery}
        />
        <Button
            buttonText={<GoSearch className='fill-blue-500 dark:fill-slate-50'/>}
            onClick={handleClick}
        />
    </div>
  )
}

export default SearchBar