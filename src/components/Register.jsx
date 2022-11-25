import  Axios  from 'axios'
import React, { useContext } from 'react'
import Button from './Button'
import Form from './Form'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MyContext } from './AppContext';



const URL = "https://api-ri7.herokuapp.com/api/users/register"



const Register = () => {
    const {store,setStore} = useContext(MyContext)

    const Navigate = useNavigate();
    const [user, setUser] = useState({
        email : '',
        password : '',
        firstname: '',
        lastname: '',
        city: '',
        postalCode: ''
    
    })

    const [ error,setError ] = useState(null);

    const handleUser = (e) => {
        const key = e.target.name;
        const value = e.target.value
        setUser({... user, [`${key}`] : value});
        console.log(key,value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('toto');

        console.log(user);
        
        Axios.post(URL, user)
        .then(resp => {
            console.log(resp);
            Navigate('/login')
        })
            .catch(error => setError(error.response.data.error))

    }


  return (
    <div className='h-full flex justify-center items-center'>
            <div className='flex flex-col gap-4 justify-center items-center  bg-slate-200 dark:bg-gray-900 max-w-xl p-5 rounded-xl'>
            <h3>Register</h3>
            <Form
                listInput = "text;text;text;text;text;text"
                listName = "email;password;firstname;lastname;city;postalCode"
                onSubmit = {handleSubmit}
                onChange = {handleUser}
            />
            <Button
                buttonText = "Register"
                style = {store.styleButton}
                onClick = {handleSubmit}
            />
            <Link to='/login' className=''>
                <Button
                    buttonText="Log In"
                    style={store.styleButton}              
                />
            </Link>
        </div>
    </div>
  )
}

export default Register