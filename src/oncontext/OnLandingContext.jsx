

// export const useStateContext = () => useContext(Context);
import React, { useState, useContext, createContext } from "react";

const Context = createContext({});

export const HomeContext = ({children}) => {
       const [header, setHeader] = useState([]);
       const [currentIndex, setCurrentIndex] = useState([]);
       const [sections, setSections] = useState([]);
       const [sectionContents, setSectionContents] = useState([]);
       const navComponents = ['Home', 'About Us', "Products", "Services", "Contact Us"];
       const sectionsItems = [
        {
            title: 'Home',
            icons: "fas fa-"
        }
       ]
    return(
        <Context.Provider value={{header, setHeader, currentIndex, setCurrentIndex, navComponents, sections, setSections, sectionContents, setSectionContents}}>
            {children}
        </Context.Provider>
    )
}
 
export const useStateContext = () => useContext(Context);

//export default Context();