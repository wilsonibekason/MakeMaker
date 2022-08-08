import { client } from "../../client";
import { useState, useEffect, useContext, createContext } from "react";
import { postBlogQuery } from "../../utils/data";

const BlogContext = createContext({});

export const BlogContextProvider = ({ children }) => {
  const [blogAuthor, setBlogAuthor] = useState([]);
  const [moreBlogs, setMoreBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [BlogDetails, setBlogDetails] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  /// global for fetching recent and ralated blogs
  let blogQuery;

  // fetching bloguthorQuery
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
    <BlogContext.Provider
      value={{
        blogAuthor,
        moreBlogs,
        setMoreBlogs,
        loading,
        setLoading,
        BlogDetails,
        setBlogDetails,
        // blogQuery,
        recentBlogs,
        setRecentBlogs,
        tags,
        setTags,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useStateBlogContext = () => useContext(BlogContext);
