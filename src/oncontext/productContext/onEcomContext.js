import { client } from "../../client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { productDetailQuery, productDetailMoreQuery } from "../../utils/data";

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
  const [productDetailMore, setProductDetailMore] = useState();
  const [error, setError] = useState(null);

  // DEFINE STATES

  // fetching productDetails
  const fetchProductDetails = () => {
    const query = productDetailQuery(productId);
    if (query) {
      client
        .fetch(`${query}`)
        .then((data) => {
          setProductDetails(data[0]);
          console.log(data);
          setLoading(false);
          if (data[0]) {
            const queryMore = productDetailMoreQuery(data[0]);
            client
              .fetch(queryMore)
              .then((data) => {
                setProducts(data);
              })
              .catch((error) => {
                console.log("====================================");
                console.log(error);
                console.log("====================================");
                setError(error?.response?.message);
              });
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setError(error?.response?.message);
        });
    }
  };

  // CALL FUNCTIONS
  useEffect(() => {
    fetchProductDetails();
  }, [productId]);
  // CALL FUNCTIONS

  // LOGS
  console.log("====================================");
  console.log(products);
  console.log(productDetails);
  console.log(productId);
  console.log("====================================");
  // LOGS

  return (
    <EcomContext.Provider
      value={{
        renderMoreProductsItems1,
        renderMoreProductsItems2,
        productDetails,
        products,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};
export const useStateContextEcom = () => useContext(EcomContext);
