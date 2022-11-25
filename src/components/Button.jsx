import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={props.style}>
        {props.buttonText}
    </button>
  )
}

export default Button