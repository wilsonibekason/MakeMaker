import React, { useState, useEffect, createContext, useContext } from "react";

const EcomContext = createContext({});

export const EcomProvider = ({ children }) => {
  const renderMoreProductsItems1 = ["M", "o", "r", "e"];
  const renderMoreProductsItems2 = ["p", "r", "o", "d", "u", "c", "t", "s"];
  return (
    <EcomContext.Provider
      value={{ renderMoreProductsItems1, renderMoreProductsItems2 }}
    >
      {children}
    </EcomContext.Provider>
  );
};
export const useStateContextEcom = () => useContext(EcomContext);
