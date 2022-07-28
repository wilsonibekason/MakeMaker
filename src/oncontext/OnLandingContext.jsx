// export const useStateContext = () => useContext(Context);
import { client, urlFor } from "../client";
import React, { useState, useContext, useEffect, createContext } from "react";

const Context = createContext({});

export const HomeContext = ({ children }) => {
  const [header, setHeader] = useState([]);
  const [currentIndex, setCurrentIndex] = useState([]);
  const [sections, setSections] = useState([]);
  const [sectionContents, setSectionContents] = useState([]);
  const [aboutContents, setAboutContents] = useState([]);
  const navComponents = [
    "Home",
    "About Us",
    "Products",
    "Services",
    "Contact Us",
  ];

  useEffect(() => {
    if (currentIndex.length > 0) {
      setCurrentIndex(currentIndex);
    } else {
      setCurrentIndex(0);
    }
    return () => {
      if (currentIndex.length > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(0);
      }
    };

    return () => {
      if (currentIndex.length > 0) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    };
  }, []);
  useEffect(() => {
    const aboutQuery = '*[_type == "aboutContent"]';
    try {
      client.fetch(aboutQuery).then((data) => setAboutContents(data));
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
  }, []);
  const aboutTitle = aboutContents.map((item, index) => item?.title);
  const aboutDesc = aboutContents.map((item, index) => item?.description);
  const aboutImageUrl = aboutContents[0];
  const aboutTitleIcon = aboutContents.map((item, index) => item?.icons);
  return (
    <Context.Provider
      value={{
        header,
        setHeader,
        currentIndex,
        setCurrentIndex,
        navComponents,
        sections,
        setSections,
        sectionContents,
        setSectionContents,
        aboutContents,
        setAboutContents,
        aboutDesc,
        aboutTitle,
        aboutImageUrl,
        aboutTitleIcon,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

//export default Context();
