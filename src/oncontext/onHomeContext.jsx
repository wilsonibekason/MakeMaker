

import { useState, useEffect, useContext, createContext } from "react";

const Context = createContext();

export const homeContext = ({children}) => {
       const [header, setHeader] = useState('');
    return(
        <Context.Provider value={{header, setHeader}}>
            {children}
        </Context.Provider>
    )
}