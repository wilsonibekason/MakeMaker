import React, { useState, useContext, createContext, useEffect } from "react";
import { urlFor, client } from "../../client";

const ContactContext = createContext({});
export const ContactProvider = ({ children }) => {
  const [contactHeader, setContactHeader] = useState();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contactCard, setContactCard] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // destruturing  formData variables
  const { name, email, message } = formData;
  // handle submitting contact form logic
  const handleSubmit = () => {
    setLoading(true);

    const contacted = {
      _type: "contact",
      name,
      email,
      message,
    };

    client
      .create(contacted)
      .then(() => {
        setLoading(false);
        setError(null);
        // setContactHeader(contacted);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        setContactHeader(contacted);
      });
  };

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
    <ContactContext.Provider
      value={{
        contactHeader,
        contacts,
        contactCard,
        handleSubmit,
        error,
        isFormSubmitted,
        name,
        message,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useStateContextContact = () => useContext(ContactContext);
