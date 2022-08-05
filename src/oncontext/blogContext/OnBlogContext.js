import { useState, useEffect, useContext, createContext } from "react";

const BlogContext = createContext({});

export const BlogContextProvider = ({ children }) => {
  return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>;
};

export const useStateBlogContext = () => useContext(BlogContext);
