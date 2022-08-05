import { client } from "../../client";
import { useState, useEffect, useContext, createContext } from "react";
import { postBlogQuery } from "../../utils/data";

const BlogContext = createContext({});

export const BlogContextProvider = ({ children }) => {
  const [blogAuthor, setBlogAuthor] = useState([]);

  // fetching blogAuthorQuery
  useEffect(() => {
    client
      .fetch(postBlogQuery)
      .then((data) => {
        setBlogAuthor(data);
      })
      .catch((error) => {
        console.log(error?.response?.body?.error?.description);
      });
  }, [postBlogQuery]);

  /////
  console.log("====================================");
  console.log(blogAuthor);
  console.log("====================================");
  return (
    <BlogContext.Provider value={{ blogAuthor }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useStateBlogContext = () => useContext(BlogContext);
