import React, { createContext } from 'react'
import TourContext from './TourContext'
import DestinationContext from './DestinationContext'
export const GlobalState = createContext()

export const DataProvider = ({ children }) => {

    const globalState = {
        tour: TourContext(),
        destination: DestinationContext(),
    }
    return (
        <GlobalState.Provider value={globalState}>
            {children}
        </GlobalState.Provider>
    )
}
