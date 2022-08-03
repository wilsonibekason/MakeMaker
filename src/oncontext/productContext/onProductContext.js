import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";
import { BsArrowLeftSquare, BsArrowRightSquare, BsCart3 } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineShopping, AiFillStar } from "react-icons/ai";
import { format } from "date-fns";
import { urlFor, client } from "../../client";
import { useParams } from "react-router-dom";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const categoryID = useParams();
  const [products, setProducts] = useState([]);
  const [productBanner, setProductsBanner] = useState([]);
  const [productHeader, setProductHeader] = useState([]);
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
    // querying for product header

    const productHeaderQuery = '*[_type == "productHeader"]';
    client.fetch(productHeaderQuery).then((data) => setProductHeader(data));
    // querying for product
    const productQuery = '*[_type == "product"]';
    client.fetch(productQuery).then((data) => setProducts(data));
  }, []);
  // destructuring and converting product published time
  const publishedAt = productBanner?.map((item) => item?.publishedAt);
  const convertedDate = publishedAt
    ? format(new Date(publishedAt), "p, dd/MM/YYYY")
    : "no date to show";
  return (
    <ProductContext.Provider
      value={{
        productBanner,
        productHeader,
        BsArrowLeftSquare,
        BsArrowRightSquare,
        BsCart3,
        AiOutlineLeft,
        AiOutlineShopping,
        AiFillStar,
        products,
        convertedDate,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useStateContextProduct = () => useContext(ProductContext);
