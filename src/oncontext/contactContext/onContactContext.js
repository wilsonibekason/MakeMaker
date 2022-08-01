import React, { useState, useContext, createContext, useEffect } from "react";
import { urlFor, client } from "../../client";

const ContactContext = createContext({});
export const ContactProvider = ({ children }) => {
  const [contactHeader, setContactHeader] = useState();

  useEffect(() => {
    /// querying for the contacthEADER schema
    const contactHeaderQuery = '*[_type == "contactHeader"]';
    client.fetch(contactHeaderQuery).then((data) => setContactHeader(data));
  }, []);
  return (
    <ContactContext.Provider value={{ contactHeader }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useStateContextContact = () => useContext(ContactContext);
