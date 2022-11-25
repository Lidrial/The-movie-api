import { useState } from "react"

export const useError = () => {
    const [error, setError] = useState('mon erreur')

    return {
        myError: error,
        saveError: setError
    }
}