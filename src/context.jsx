import React, {createContext, useState, useEffect} from 'react'

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