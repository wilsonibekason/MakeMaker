import React, { useState, useContext, createContext, useEffect } from "react";
import { urlFor, client } from "../../client";

const ContactContext = createContext({});
export const ContactProvider = ({ children }) => {
  const [contactHeader, setContactHeader] = useState();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    /// querying for the contacthEADER schema
    const contactHeaderQuery = '*[_type == "contactHeader"]';
    client.fetch(contactHeaderQuery).then((data) => setContactHeader(data));
    // querying for the contacts schema
    const contactQuery = '*_type == "contact"';
    client.fetch(contactQuery).then((data) => setContacts(data));
  }, []);
  return (
    <ContactContext.Provider value={{ contactHeader, contacts }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useStateContextContact = () => useContext(ContactContext);
