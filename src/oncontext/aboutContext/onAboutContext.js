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
  const [aboutSection, setAboutSection] = useState();

  useEffect(() => {
    // querying for aboutHeader
    const headerQuery = '*[_type == "aboutHeader"]';
    client.fetch(headerQuery).then((data) => setAboutHeader(data));
    // querying for sectionHeader
    const sectionContentQuery = '*[_type == "sectionContent"]';
    client.fetch(sectionContentQuery).then((data) => setSectionContents(data));
    // querying fot about section contents
    const aboutSectioonQuery = '*[_type == "aboutSection"]';
    client.fetch(aboutSectioonQuery).then((data) => setAboutSection(data));
  }, []);

  // destructuring for section contents
  const sectionItem1 = sectionContents[0];
  const sectionItem2 = sectionContents[1];
  const sectionItem3 = sectionContents[2];
  const sectionItem4 = sectionContents[3];
  // destructuring for about section
  const sectionTitle = aboutSection?.map((item) => item?.articleTitle);
  const sectionDesc = aboutSection?.map((item) => item?.articleDesc);
  const sectionImage = aboutSection?.map((item) => urlFor(item?.cardImgUrl));
  const sectionAuthor = aboutSection?.map((item) => item?.companyName);
  const cardTitle = aboutSection?.map((item) => item?.cardTitle);
  const cardDesc = aboutSection?.map((item) => item?.cardDesc);
  return (
    <AboutContext.Provider
      value={{
        aboutHeader,
        sectionItem1,
        sectionItem2,
        sectionItem3,
        aboutSection,
      }}
    >
      {children}
    </AboutContext.Provider>
  );
};

export const useStateContextAbout = () => useContext(AboutContext);
