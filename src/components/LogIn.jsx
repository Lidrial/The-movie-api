import  Axios  from 'axios'
import React, { useContext } from 'react'
import Button from './Button'
import Form from './Form'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useToken } from '../utils/useToken'
import { useError } from '../utils/useError'
import { MyContext } from './AppContext'



const LogIn = () => {
    const Navigate = useNavigate();

    const URL = "https://api-ri7.herokuapp.com/api/users/login"

    const [user, setUser] = useState({
        email : '',
        password : ''
    })

    const {saveToken} = useToken()

    const {store, setStore} = useContext(MyContext)

    const {myError, saveError} = useError()


    const token = sessionStorage.getItem("token")

    const handleUser = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setUser({... user, [`${key}`] : value});
        // console.log(key,value);
        // console.log(user);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user);
        Axios
            .post(URL, user)
            .then(resp => {
                saveToken(resp.data.token)
                setStore({...store, isUserAuth : true})
                console.log(store.isUserAuth);
                // sessionStorage.setItem('token', resp.data.token)
                Navigate('/home')
                console.log(resp);
            }) 
            .catch(err => {
                // console.log(err)
                saveError(err.response.data.error)
            })
    }

     return (
        <div className='h-full flex justify-center items-center'>
            <div className='flex flex-col gap-4 justify-center items-center  bg-slate-200 dark:bg-gray-900 max-w-xl p-5 rounded-xl'>
                <h3>Log IN</h3>
                <Form
                    listInput = "email;password"
                    listName = "email;password"
                    onChange = {handleUser}
                    // listValue = {user.email + ';' + user.password}  
                />
                {myError !=null &&
                    <p>{myError}</p>
                
                }
                <Button
                    buttonText = "Log In"
                    style = {store.styleButton}
                    onClick = {handleSubmit}
                />
            </div>
        </div>
    )
}

export default LogIn