import React, { createContext } from 'react'
import TourContext from './TourContext'
export const GlobalState = createContext()

export const DataProvider = ({ children }) => {

    const globalState = {
        tourContext: TourContext()
    }
    return (
        <GlobalState.Provider value={globalState}>
            {children}
        </GlobalState.Provider>
    )
}
