import React from 'react'
import Card from './Card'


const FilmItem = (props) => {

    const img = `https://image.tmdb.org/t/p/original/${props.img}`
    const url = `/films/${props.id}`

  return (
    <div className="w-1/5 max-h-4/5 bg-slate-200 dark:bg-gray-900">
        <Card
            img = {img}
            title = {props.title}
            release={props.release}
            note = {props.note}
        />
    </div>
  )
}

export default FilmItem
