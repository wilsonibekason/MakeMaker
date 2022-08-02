import { useStateContextProduct } from "oncontext/productContext/onProductContext";
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ popoverDropdownRef, dropdownPopoverShow }) => {
  const { AiOutlineLeft, AiOutlineShopping } = useStateContextProduct();
  return (
    <>
      <main
        className={` ${dropdownPopoverShow ? "block" : "hidden"} bg-gray-100`}
        ref={popoverDropdownRef}
      >
        <div className="w-6/12 bg-blueGray-400 fixed right-0 top-0 z-100 ease-linear transition-all duration-150">
          <div className="w-full h-full bg-white float-right p-3 relative">
            <button className="flex center text-sm font-bold gap-2 ml-2 border-none bg-transparent">
              <AiOutlineLeft />
              <span className="ml-2">Your Cart</span>
              <span className="ml-2 text-gray-600">10</span>
            </button>

            {/** render the empty cart content */}
            {/* <p className="text-base text-gray-600 dark:text-gray-300">
              There are no items in your cart.
            </p> */}
            {false && (
              <div className="m-24 text-center align-center">
                <AiOutlineShopping size={150} className="" />
                <h3 className="font-bold text-xl">
                  Your Shopping Cart Is Empty
                </h3>
                <Link to={"/"}>
                  <button className="w-full mx-w-screen-2xl hover:max-w-prose p-2 rounded-full border-none text-md mx-12 uppercase bg-lightBlue-500 hover:bg-lightBlue-200 active:bg-teal-600 cursor-pointer transition-all scale-100 hover:scale-105 mt-12">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            )}
            {/** render the empty cart content */}
            {/**product container */}
            <div className="flex flex-wrap justify-center gap-2 mt-6 w-full">
              <div className="flex g-2 p-6">
                <img
                  src="https://www.pngitem.com/pimgs/m/521-5216062_shopping-cart-transparent-background-shopping-cart-icon-png.png"
                  alt=""
                  className="w-16 h-16 rounded-md bg-teal-500"
                />
              </div>
            </div>
            {/**product container */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
