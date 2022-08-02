// import for thirdparty and external depencies
import Navbar from "components/Navbars/AdminNavbar";
import { useStateContextProduct } from "../oncontext/productContext/onProductContext";
import React from "react";

// import for components
const Product = () => {
  const { BsArrowLeftSquare, BsArrowRightSquare } = useStateContextProduct();

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url("https://st2.depositphotos.com/5512422/8058/i/950/depositphotos_80588416-stock-photo-arduino-electronic-platform-for-hobbyists.jpg")`,
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
                  <h1 className="text-4xl font-bold text-white">Arduino Kit</h1>
                  <p className="text-base leading-relaxed text-gray-900">
                    {" "}
                    This is a powerful arduino kit that have unleased creativity
                    for so many students
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-20"
            style={{ transform: "translate3d(50, 50 , 40)" }}
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
          <div
            className="top-auto bottom-0 left-0 right-auto w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateY()" }}
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
                className="text-blueGray-700 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
