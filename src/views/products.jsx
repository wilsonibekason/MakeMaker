// import for thirdparty and external depencies
import Navbar from "../components/Navbars/AdminNavbar";
import { useStateContextProduct } from "../oncontext/productContext/onProductContext";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "components/Footers/Footer";
import { urlFor } from "client";
import ProductItem from "./ProductItem";
import moment from "moment";

// import for components
const Product = () => {
  // const [products, setProducts] = useStateContextProduct();

  // const product = products.find((p) => p.id === Math.floor(Math.random() * 1000));
  const navigate = useHistory();
  const {
    BsArrowLeftSquare,
    BsArrowRightSquare,
    BsCart3,
    productBanner,
    productHeader,
    products,
    convertedDate,
    handleProductFilter,
    activeFilterBtn,
    inActiveFilterBtn,
    animateFilter,
    productBannerID,
  } = useStateContextProduct();
  console.log(productHeader);
  console.log(productBannerID);
  console.log(convertedDate);
  console.log(productBanner);
  return (
    <>
      <Navbar transparent BsCart3={BsCart3} />
      <main>
        {productHeader?.map((item, index) => {
          const { name, desc, image } = item;
          return (
            <div
              className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
              key={index + name}
            >
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: `url(${urlFor(image)})`,
                }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-75 bg-black"
                ></span>
              </div>
              <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                      <h1 className="text-2xl font-bold text-white">{name}</h1>
                      <p className="text-base leading-relaxed text-white">
                        {" "}
                        {desc}
                      </p>
                      <BsArrowLeftSquare className="absolute left-0 text-3xl md:text-xl sm:text-sm inset-y-1/2 text-white hover:bg-lightBlue-300 cursor-pointer" />
                      <BsArrowRightSquare className="absolute right-0 text-3xl md:text-xl sm:text-sm inset-y-1/2 text-white cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-20"
                style={{ transform: "translate3d(50, 50, 70)" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-blueGray-200 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 px-6 md:px-4 ml-auto mr-auto mt-6">
            <h3 className="text-2xl  text-blueGray-900 font-semibold mb-1 leading-normal align-center uppercase">
              Filter categories
            </h3>
            <div className="block pb-6">
              {["All", "Arduino", "CAD", "Electronics"]?.map((item, index) => (
                <span
                  className={`${
                    animateFilter === item ? activeFilterBtn : inActiveFilterBtn
                  }`}
                  key={index}
                  onClick={() => handleProductFilter(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/** add products for makeMaker */}
        <section className="block relative z-1 bg-blueGray-600 ">
          <div className="container mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4 mt-24 mb-24">
                <div className="flex flex-wrap">
                  {productBanner?.map((item, index) => {
                    const {
                      title,
                      discount,
                      description,
                      price,
                      product,
                      publishedAt,
                      image,
                    } = item;

                    const desc = `${description?.slice(0, 10)}..`;
                    const displayDate = publishedAt
                      ? moment(publishedAt).utc().format("YYYY-MM-DD")
                      : "";
                    return (
                      <div
                        className="w-full md:w-4/12 px-4 mr-auto ml-auto"
                        key={index}
                      >
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500 ease-linear transition-all duration-150">
                          <img
                            alt="..."
                            src={urlFor(image)}
                            className="w-full align-middle rounded-t-lg"
                          />
                          <blockquote className="relative p-8 mb-4">
                            <svg
                              preserveAspectRatio="none"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 583 95"
                              className="absolute left-0 w-full block h-95-px -top-94-px"
                            >
                              <polygon
                                points="-30,95 583,95 583,65"
                                className="text-lightBlue-500 fill-current"
                              ></polygon>
                            </svg>
                            <div className="flex justify-between sm:flex-row">
                              <div className="px-4 ">
                                <h4 className="text-xl font-bold text-white">
                                  {title}
                                </h4>
                                <p className="text-md font-light mt-2 text-white">
                                  {`$${price}`}
                                </p>
                              </div>
                              <div className="">
                                <h4 className="text-xl font-bold text-white">
                                  {desc}
                                </h4>
                                <p className="text-md font-light mt-2 text-white">
                                  {displayDate}
                                </p>
                              </div>
                            </div>
                          </blockquote>
                        </div>
                      </div>
                    );
                  })}

                  {/** end of product item */}

                  {/** end of product Items */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Product;
