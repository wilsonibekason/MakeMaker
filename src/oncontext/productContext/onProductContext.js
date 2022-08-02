import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";
import { urlFor } from "client";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productBanner, setProductsBanner] = useState([]);
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productIsLoading, setProductIsLoading] = useState(false);
  const [productIsLoaded, setProductIsLoaded] = useState(false);
  const [productError, setProductError] = useState(false);
  const [productSuccess, setProductSuccess] = useState(false);
  const [productErrorMsg, setProductErrorMsg] = useState("");
  const [productSuccessMsg, setProductSuccessMsg] = useState("");
  // declaring reducer actions
  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };
  const { INCREMENT, DECREMENT } = ACTIONS;
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + 1 };
        break;
      case DECREMENT:
        return { count: state.count };
    }
  };
  // TRYING OUT THE USErEDUUCER
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // calling the function
  dispatch({ type: DECREMENT });
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};

export const useStateContextProduct = () => useContext(ProductContext);
