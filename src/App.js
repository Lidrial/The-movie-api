import { useContext } from 'react';
import './App.css';
import { MyContext } from './components/AppContext';
import ListFilm from './components/ListFilm';
import Router from './components/Router';




function App() {
  const {store,setStore} = useContext(MyContext)


  return (
    <div className={`${store.darkToggle && 'dark'} flex flex-col h-screen`}>
      <Router/>
    </div>
  );
}

export default App;
