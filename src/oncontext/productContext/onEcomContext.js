import { client } from "../../client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { productDetailQuery, productDetailMoreQuery } from "../../utils/data";
import { useParams } from "react-router-dom";

const EcomContext = createContext({});

export const EcomProvider = ({ children }) => {
  const renderMoreProductsItems1 = ["r", "e", "l", "a", "t", "e", "d"];
  const renderMoreProductsItems2 = ["p", "r", "o", "d", "u", "c", "t", "s"];
  let id = useParams();
  let productId = id?.id;
  // DEFINE STATES
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState();
  const [productDetailsMore, setProductDetailsMore] = useState();
  const [productDetail, setProductDetail] = useState();
  const [productDetailMore, setProductDetailMore] = useState();
  const [error, setError] = useState(null);
  // products hover state
  const [index, setIndex] = useState(0);

  // LOGIC STATES
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);
  // LOGIC STATES

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
  ////////// ***************************************************************************************    PRODUCTS MAIN LOGIC ***************************************** ////////////////

  let itemIndex;
  let foundProduct;

  ////////// ***************************************************************************************    PRODUCTS MAIN LOGIC ***************************************** ////////////////

  return (
    <EcomContext.Provider
      value={{
        renderMoreProductsItems1,
        renderMoreProductsItems2,
        productDetails,
        products,
        productId,
        index,
        setIndex,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};
export const useStateContextEcom = () => useContext(EcomContext);
