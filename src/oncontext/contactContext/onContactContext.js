import React, { useState, useContext, createContext, useEffect } from "react";
import { urlFor, client } from "../../client";

const ContactContext = createContext({});
export const ContactProvider = ({ children }) => {
  const [contactHeader, setContactHeader] = useState();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contactCard, setContactCard] = useState();

  useEffect(() => {
    /// querying for the contacthEADER schema
    const contactHeaderQuery = '*[_type == "contactHeader"]';
    client.fetch(contactHeaderQuery).then((data) => setContactHeader(data));
    // querying for the contacts schema
    const contactQuery = '*_type == "contact"';
    client.fetch(contactQuery).then((data) => setContacts(data));
    // querying for the contactCard schema
    const contactCardQuery = '*[_type == "contactCard"]';
    client.fetch(contactCardQuery).then((data) => setContactCard(data));
    // querying for
  }, []);
  return (
    <ContactContext.Provider value={{ contactHeader, contacts, contactCard }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useStateContextContact = () => useContext(ContactContext);
