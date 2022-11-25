import * as React from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from './AppContext'
import Button from './Button'

const DropDown = (props) => {
    const [open, setOpen] = React.useState(false)

    const {store,setStore} = React.useContext(MyContext)

    const handleOpen = () => {
        setOpen(!open)
    }

    const listItem = props.listItem.split(';')
    // console.log(listItem);
    // console.log(listItem.length);

    const listLink = props.link.split(';')

    const buildList = () => {
        const items = []
        for( let i=0 ; i<listItem.length ; i++){
            console.log(i,'i');
            items.push(
                <li>
                    <Link to={listLink[i]} className=''>
                        <Button
                            buttonText={listItem[i]}
                            style={`${props.styleItem}`}
                            
                        />
                    </Link>
                </li>
            )
            console.log(items);   
        }
        return( items )
    }

  return (
    <div className='relative'>
        <Button
            onClick={handleOpen}
            buttonText={props.nameButton}
            style={`px-7 ${store.styleButton}`}
        
        />
        {open ? (
            <ul className={`w-full ${props.listStyle}`}>
                {buildList()}
            </ul>
        ) : null}
    </div>
  )
}

export default DropDown