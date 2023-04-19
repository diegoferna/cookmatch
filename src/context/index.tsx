import React, { createContext, useContext, useState } from 'react'
import { Recipes } from '../page/Home/components/reciepeItem'
// import { taskProp } from '../page/home'

type Props ={
    children: React.ReactElement
}

interface contextProp  {
    database: Recipes[]
    setDatabase: React.Dispatch<React.SetStateAction<Recipes[]>>
}

export const DatabaseContext = createContext<contextProp>({
    database: [],
    setDatabase: () => console.log
})

export const DatabaseContextProvider = ({children}: Props) => {
    const [database, setDatabase] = useState<Array<Recipes>>([])

    return(
        <DatabaseContext.Provider value={{database, setDatabase}}>
            {children}
        </DatabaseContext.Provider>
    )
}