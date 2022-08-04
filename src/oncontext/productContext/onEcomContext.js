import React, { useState, useEffect, createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { productDetailQuery, productDetailMoreQuery } from "utils/data";

const EcomContext = createContext({});

export const EcomProvider = ({ children }) => {
  const renderMoreProductsItems1 = ["M", "o", "r", "e"];
  const renderMoreProductsItems2 = ["p", "r", "o", "d", "u", "c", "t", "s"];
  const { productId } = useParams();
  // DEFINE STATES
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState();
  const [productDetailsMore, setProductDetailsMore] = useState();
  const [productDetail, setProductDetail] = useState();

  // DEFINE STATES

  // fetching productDetails
  const fetchProuctDetails = () => {
    const query = productDetailQuery(productId);
  };
  return (
    <EcomContext.Provider
      value={{ renderMoreProductsItems1, renderMoreProductsItems2 }}
    >
      {children}
    </EcomContext.Provider>
  );
};
export const useStateContextEcom = () => useContext(EcomContext);
