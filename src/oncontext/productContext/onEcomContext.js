import React, { useState, useEffect, createContext, useContext } from "react";

const EcomContext = createContext({});

export const EcomProvider = ({ children }) => {
  return <EcomContext.Provider value={{}}>{children}</EcomContext.Provider>;
};
export const useStateContextEcom = () => useContext(EcomContext);
