import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

const AppContext = createContext()

const AppProvider = ({children}) => {

    const [array, setArray] = useState([])

    useEffect(() => {
    
    }, [])
    
    return (
        <AppContext.Provider value={{array}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }