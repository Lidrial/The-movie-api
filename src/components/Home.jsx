import  Axios  from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useError } from '../utils/useError';
import { useToken } from '../utils/useToken';
import Header from './Header'

const Home = () => {

  const URL = 'https://api-ri7.herokuapp.com/api/users/profile';

  const token = sessionStorage.getItem('token');

  const {hasToken} = useToken(token)
  const {myError} = useError()

  const [user, setUser] = useState({
    email : '',
    firstname: '',
    lastname: '',
    city: '',
    postalCode: ''
  })

  const getProfile = () => {
    Axios
      .get(URL,  {
        headers:
        {
        Authorization : `Bearer ${token}`
        }
      })
      .then(resp => {
        setUser({
          email: resp.data.email,
          prenom: resp.data.firstname,
          nom: resp.data.lastname,
          ville: resp.data.city,
          code_postal: resp.data.postalCode
        })
        console.log(resp);
      })
      .catch(error => console.log(error))
    console.log(user);
  }

  

  useEffect(() => {
    if( hasToken ){ 
      console.log('load')
      getProfile();

    }
  }, [hasToken]);


  return (
    <>
      {!hasToken ? 
          <h3>Veuillez vous connecter afin d'acceder a la page</h3>  
        :
          <>
            <div className='flex flex-col gap-2 items-center'>
              {(Object.keys(user)).map((key, index) => {
                return (
                  <div key={index}>
                    <h2>
                      {key.replace('_', ' ')} : 
                    </h2>
                    <textarea type='text' value={user[key]}
                      className='h-7 resize-none text-center border-2 rounded-md dark:border-transparent dark:bg-slate-700'
                    >{user[key]}</textarea>
                  </div>
                );
              })}
              <div className=''>{myError}</div>
            </div>
          </>
      }
    </>
  );
}

export default Home