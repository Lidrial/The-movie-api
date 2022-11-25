import React from 'react'
import { MyContext } from './AppContext'
import Button from './Button'


const Card = (props) => {
  const {store,setStore} = React.useContext(MyContext)
  return (
    <div className="card h-full flex flex-col justify-between text-center">
        <div className="card_image">
            <img src={props.img} alt={props.title}></img>
        </div>
        <div className="card_body flex flex-col gap-2.5 h-48 p-2 justify-between items-center">
            <h3 className="card_title font-semibold uppercase">{props.title}</h3>
            <div className="card_date">{props.release}</div>
            <div className="card_note">{props.note}/10</div>
            <Button
                buttonText = "Details"
                style={store.styleButton}
            />
        </div>
    </div>
  )
}

export default Card