import React, { useState, useEffect, useContext, createContext } from "react";
import { urlFor } from "client";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};

export const useStateContextProduct = () => useContext(ProductContext);
