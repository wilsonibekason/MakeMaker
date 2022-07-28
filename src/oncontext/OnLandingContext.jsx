// import { useState, createContext,  } from "react";


// const LandingContext =  createContext({});

// export const LandingProvider = ({children}) => {
//     return (
//         <LandingContext.Provider value={{

//         }}>
//            {children}
//         </LandingContext.Provider>
//     )
// }

// //export default LandingContext;

// export const useStateContext = () => useContext(Context);
import React, { useState, useContext, createContext } from "react";

const Context = createContext({});

export const HomeContext = ({children}) => {
       const [header, setHeader] = useState('');
    return(
        <Context.Provider value={{header, setHeader}}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);

//export default Context();