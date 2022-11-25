import FilmItem from './FilmItem'
import Axios from 'axios'
import React, { useContext, useEffect,useState } from 'react'
import Header from './Header'
import { MyContext } from './AppContext'

const ListTV = () => {
  const API_KEY = 'f4e3e9de32f0397b6afde7af5b629eee'

  const {store,setStore} = useContext(MyContext)
  
  if ( store.searchQuery.length === 0){
    var URL  = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=fr-FR&page=1&region=FR`
  }else{
    var URL = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=fr-FR&page=1&include_adult=false&query=${store.searchQuery}`
  }

  const [ dataLoad, setDataLoad ] = useState(false);

  const [ list, setList ] = useState([]);

  const getTV = () => {
      Axios
          .get(URL)
          .then(res => {
              setList(res.data.results);
              setDataLoad(true);
          })
          .catch(err => console.log("err => ", err))
  };

  console.log(list);

  useEffect(() => {
      getTV();
  }, [store.searchQuery]);


  return (
    <div className=''>
      <h2>Liste de serie</h2>
      <div className='flex flex-row flex-wrap gap-y-5 justify-evenly bg-slate-100 dark:bg-gray-800'>
        {dataLoad ? 
          list.map((item, index) =>
            <FilmItem
              key={item.id}
              title={item.name}
              img={item.poster_path}
              release={item.first_air_date}
              note={item.vote_average}

            />
          )
        :
        <p>...Loading</p>
        }
      </div>
    </div>

  )
}

export default ListTV