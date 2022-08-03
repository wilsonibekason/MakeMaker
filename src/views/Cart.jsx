import { useStateContextProduct } from "oncontext/productContext/onProductContext";
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({
  popoverDropdownRef,
  dropdownPopoverShow,
  openDropdownPopover,
  closeDropdownPopover,
  btnDropdownRef,
}) => {
  const { AiOutlineLeft, AiOutlineShopping } = useStateContextProduct();
  return (
    <>
      <main
        className={` ${dropdownPopoverShow ? "block" : "hidden"} bg-gray-100`}
        ref={popoverDropdownRef}
      >
        <div className="w-4/12 h-full bg-blueGray-400 fixed right-0 top-0 z-100 ease-linear transition-all duration-150">
          <div className="w-full h-full bg-white float-right p-3 relative">
            <button
              className="flex center text-sm font-bold gap-2 ml-2 border-none bg-transparent mt-4"
              ref={btnDropdownRef}
              onClick={(e) => {
                e.preventDefault();
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <AiOutlineLeft size={30} />
              <span className="ml-2 font-base text-xl sm:text-sm md:text-md">
                Your Cart
              </span>
              <span className="ml-2 text-gray-600 text-xl sm:text-sm md:text-md">
                (10)
              </span>
            </button>

            {/** render the empty cart content */}

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
            {/**container */}
            <div className="container px-4 mx-auto mt-12">
              <div className="flex justify-between">
                <div className="w-1/3 px-4">
                  <div className="w-full sm:w-4/12 p-4 bg-blueGray-500">
                    <img
                      //className="shadow-lg rounded-xl max-w-full h-auto align-middle border-none"
                      className="w-20 h-20 rounded-lg bg-lightBlue-400"
                      src="https://image.shutterstock.com/image-vector/phone-controls-diy-robot-car-260nw-1624097389.jpg"
                      alt="Shopping Cart"
                    />
                  </div>
                </div>

                <div class="flex">
                  <div class="w-1/6 bg-gray-400 h-12 px-4 border border-solid  shadow-md  my-4 py-3 ">
                    +
                  </div>
                  <div class="w-1/6 bg-gray-500 h-12 px-4 border border-solid   shadow-md my-4 py-3 ">
                    4
                  </div>
                  <div class="w-1/6 bg-gray-400 h-12 px-4 border border-solid  shadow-md my-4 py-3 ">
                    -
                  </div>
                </div>
                <div className=" flex flex-col px-4 ml-16">
                  <div class="w-1/6 bg-gray-400 h-12 px-4 border border-solid  shadow-md my-1 py-3 rounded-tr-full text-center">
                    $30
                  </div>
                  <div class="w-1/6 bg-gray-500 h-12 px-4 border border-solid  shadow-xl my-1 py-3 rounded-tr-full">
                    cancel
                  </div>
                </div>
              </div>
            </div>
            {/**container */}

            {/** cart bottom */}
            <div className="absolute bottom-0 right-2  w-full p-16 text-center my-4">
              <div className="flex justify-between">
                <h3 className="text-md sm:text-sm text-blueGray-900 font-bold">
                  Subtotal
                </h3>
                <h3 className="text-md sm:text-sm text-blueGray-900 mr-4 font-bold">
                  $30
                </h3>
              </div>
              <div className="w-40 m-auto ">
                <button
                  className=" w-1/2 text-lightBlue-500 bg-transparent border border-solid border-lightBlue-500 hover:bg-lightBlue-500 hover:text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  pay with stripe
                </button>
              </div>
            </div>
            {/** cart bottom */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
