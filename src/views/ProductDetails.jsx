//import for thirdparty dependencies

import Navbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";

const {
  useStateContextProduct,
} = require("oncontext/productContext/onProductContext");

// import for internal dependencies

const ProductDetails = () => {
  const {} = useStateContextProduct();
  return (
    <>
      <Navbar Transparent />
    </>
  );
};

export default ProductDetails;
