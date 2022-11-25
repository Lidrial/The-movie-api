import React from 'react'

const Form = (props) => {
    const listInput = props.listInput.split(';')

    const listName = props.listName.split(';')

    // const listValue = props.listValue.split(';')

    const buildList = () => {
        const items = []
        for( let i=0 ; i<listInput.length ; i++){
            items.push(
                <input
                    className="border-2 rounded-md dark:border-transparent dark:bg-slate-700" 
                    type={listInput[i]} 
                    placeholder={listName[i]}
                    name={listName[i]}
                    // value = {listValue[i]}
                    onChange={props.onChange}
                />
            )
        }
        return( items )
    }
  return (
    <form onSubmit={props.onSubmit} className="flex flex-col gap-4 justify-center items-center dark:text-slate-50">
        {buildList()}
    </form>
  )
}

export default Form