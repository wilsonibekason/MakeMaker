import React from "react";

const Cart = ({ popoverDropdownRef, dropdownPopoverShow }) => {
  return (
    <>
      <main
        className={` ${dropdownPopoverShow ? "block" : "hidden"} bg-gray-100`}
        ref={popoverDropdownRef}
      ></main>
    </>
  );
};

export default Cart;
