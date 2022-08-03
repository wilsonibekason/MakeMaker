// import for thirdparty and external depencies
import Navbar from "../components/Navbars/AdminNavbar";
import { useStateContextProduct } from "../oncontext/productContext/onProductContext";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "components/Footers/Footer";
import { urlFor } from "client";

// import for components
const Product = () => {
  const {
    BsArrowLeftSquare,
    BsArrowRightSquare,
    BsCart3,
    productBanner,
    productHeader,
  } = useStateContextProduct();
  console.log(productHeader);
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
                      <h1 className="text-4xl font-bold text-white">{name}</h1>
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
            <h3 className="text-2xl font-semibold mb-1 leading-normal">
              Search categories
            </h3>
            <div className="block pb-6">
              <span className="hover:text-blueGray-200 hover:bg-blueGray-900 text-sm font-semibold inline-block py-1 px-2 rounded-full text-blueGray-900 bg-blueGray-200 uppercase last:mr-0 mr-2 mt-4">
                Science Kits
              </span>
              <span className="hover:text-blueGray-200 hover:bg-blueGray-90 text-sm font-semibold inline-block py-1 px-2 rounded-full text-blueGray-900 bg-blueGray-200 uppercase last:mr-0 mr-2 mt-4">
                Science Kits
              </span>
            </div>
          </div>
        </div>
        {/** add products for makeMaker */}
        <section className="block relative z-1 bg-blueGray-600 ">
          <div className="container mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4 mt-24 mb-24">
                <div className="flex flex-wrap">
                  {/** product Items  */}
                  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500 ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        // src={urlFor(cardImgUrl)}
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
                        <h4 className="text-xl font-bold text-white">
                          okfokerofoergjerpg
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                          ekofepfrrrgrg
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500 ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        // src={urlFor(cardImgUrl)}
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
                        <h4 className="text-xl font-bold text-white">
                          okfokerofoergjerpg
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                          ekofepfrrrgrg
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500 ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        src="https://st2.depositphotos.com/5512422/8058/i/950/depositphotos_80588416-stock-photo-arduino-electronic-platform-for-hobbyists.jpg"
                        // src={urlFor(cardImgUrl)}
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
                        <h4 className="text-xl font-bold text-white">
                          okfokerofoergjerpg
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                          ekofepfrrrgrg
                        </p>
                      </blockquote>
                    </div>
                  </div>
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
