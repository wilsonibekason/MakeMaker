

// export const useStateContext = () => useContext(Context);
import React, { useState, useContext, createContext } from "react";

const Context = createContext({});

export const HomeContext = ({children}) => {
       const [header, setHeader] = useState([]);
       const [currentIndex, setCurrentIndex] = useState([]);
       const navComponents = ['Home', 'About Us', "Products", "Services", "Contact Us"];
    return(
        <Context.Provider value={{header, setHeader, currentIndex, setCurrentIndex, navComponents}}>
            {children}
        </Context.Provider>
    )
}
 
export const useStateContext = () => useContext(Context);

//export default Context();