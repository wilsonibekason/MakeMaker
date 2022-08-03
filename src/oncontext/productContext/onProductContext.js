import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";
import { BsArrowLeftSquare, BsArrowRightSquare, BsCart3 } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineShopping, AiFillStar } from "react-icons/ai";
import { urlFor, client } from "../../client";

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
  //
  // declaring acti
  // const [product, dispatch] = useReducer(reducer, { count: 0 });
  // // calling the function
  // dispatch({ type: DECREMENT });
  useEffect(() => {
    const productBannerQuery = '*[_type == "banner"]';
    client.fetch(productBannerQuery).then((data) => setProductsBanner(data));
  }, []);
  return (
    <ProductContext.Provider
      value={{
        BsArrowLeftSquare,
        BsArrowRightSquare,
        BsCart3,
        AiOutlineLeft,
        AiOutlineShopping,
        AiFillStar,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useStateContextProduct = () => useContext(ProductContext);
