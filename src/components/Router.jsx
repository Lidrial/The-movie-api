import React, { useContext, useEffect } from 'react'
import { 
    BrowserRouter, 
    Routes, 
    Route,
    useNavigate,
    Navigate,
    Outlet
} from "react-router-dom";
import App from '../App';
import { useToken } from '../utils/useToken';
import AppContext, { MyContext } from './AppContext';
import Disney from './Disney';
import Header from './Header';
import Home from './Home';
import Kid from './Kid';
import ListFilm from './ListFilm';
import ListSerie from './ListSerie';
import LogIn from './LogIn';
import Pixar from './Pixar';
import Register from './Register';

const AuthRoutes = () => {
  
  const {store,setStore} = useContext(MyContext)
  
  return(
        store.isUserAuth ?
          <Outlet/>
        :
          <Navigate to={'/'}/>
  )

}

const Router = () => {
  return (
    <BrowserRouter>
        <Header
          home='/home'
          list='/list'
        />
        <div className='bg-slate-100 dark:bg-gray-800 dark:text-slate-50  h-full '>
          <Routes>
              {/* ROUTES PUBLIQUE */}
              <Route path='/' element={<Register/>}></Route>
              <Route path='/login' element={<LogIn/>}>Log In</Route>
              <Route path='/register' element={<Register/>}>Register</Route>
              {/* ROUTE PRIVEES */}
              <Route element={<AuthRoutes/>}>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/film' element={<ListFilm/>}>Liste de film populaires</Route>
                <Route path='/serie' element={<ListSerie/>}>List de series populaires</Route>
                <Route path='/kids' element={<Kid/>}></Route>
                <Route path='/pixar' element={<Pixar/>}></Route>
                <Route path='/disney' element={<Disney/>}></Route>
              </Route>
          </Routes>
        </div>
    </BrowserRouter>
    
  )
}

export default Router