import { useEffect, useState } from "react"


export const useToken = () => {

    const [ hasToken,setHasToken ] = useState(false)
    const [ token,setToken ] = useState()

    const saveToken = (newToken) => {
        sessionStorage.setItem('token', newToken)
    }

    useEffect(() => {
        const token =sessionStorage.getItem('token')
        if (token != null){
          setHasToken(true)
        }
    }, [token])
    
    return{
        saveToken: saveToken,
        hasToken: hasToken
    } 

}