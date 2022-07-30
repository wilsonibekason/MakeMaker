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
  const [sectionContents, setSectionContents] = useState([]);

  useEffect(() => {
    // querying for aboutHeader
    const headerQuery = '*[_type == "aboutHeader"]';
    client.fetch(headerQuery).then((data) => setAboutHeader(data));
    // querying for sectionHeader
    const sectionContentQuery = '*[_type == "sectionContent"]';
    client.fetch(sectionContentQuery).then((data) => setSectionContents(data));
  }, []);

  // destructuring for section contents
  const sectionItem1 = sectionContents[0];
  const sectionItem2 = sectionContents[1];
  const sectionItem3 = sectionContents[2];
  const sectionItem4 = sectionContents[3];

  return (
    <AboutContext.Provider
      value={{ aboutHeader, sectionItem1, sectionItem2, sectionItem3 }}
    >
      {children}
    </AboutContext.Provider>
  );
};

export const useStateContextAbout = () => useContext(AboutContext);
