import FilmItem from './FilmItem'
import Axios from 'axios'
import React, { useEffect,useState } from 'react'
import Header from './Header'
import { useContext } from 'react'
import { MyContext } from './AppContext'


const ListFilm = () => {
  const API_KEY = 'f4e3e9de32f0397b6afde7af5b629eee'

  const {store,setStore} = useContext(MyContext)

  if ( store.searchQuery.length === 0){
    var URL  = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1&region=FR`
  }else{
    var URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&page=1&include_adult=false&query=${store.searchQuery}`
  }

  // const URL  = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1&region=FR`
  // const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&page=1&include_adult=false&query=${store.searchQuery}`

  const [ dataLoad, setDataLoad ] = useState(false);

  const [ list, setList ] = useState([]);

  const getFilm = () => {
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
      getFilm();
  }, [store.searchQuery]);


  return (
    <div>
      <h2>Liste de film</h2>
      <div className='flex flex-row flex-wrap gap-y-5 justify-evenly bg-slate-100 dark:bg-gray-800'>
        {dataLoad ? 
          list.map((item, index) =>
            <FilmItem
              key={item.id}
              title={item.title}
              img={item.poster_path}
              release={item.release_date}
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

export default ListFilm


