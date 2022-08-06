import React from "react";
import Header from "./Header";

const Loader = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Loader;
