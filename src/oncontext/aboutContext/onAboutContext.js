import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
import { client, urlFor } from "../../client";

const AboutContext = createContext({});

export const AboutProvider = ({ children }) => {
  const [aboutHeader, setAboutHeader] = useState();

  useEffect(() => {
    // querying for aboutHeader
    const headerQuery = '*[_type == "aboutHeader"]';
    client.fetch(headerQuery).then((data) => setAboutHeader(data));
  }, []);
  return (
    <AboutContext.Provider value={{ aboutHeader }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useStateContextAbout = () => useContext(AboutContext);
