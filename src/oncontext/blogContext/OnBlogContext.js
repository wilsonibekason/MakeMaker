import { client } from "../../client";
import { useState, useEffect, useContext, createContext } from "react";
import { postBlogQuery } from "../../utils/data";

const BlogContext = createContext({});

export const BlogContextProvider = ({ children }) => {
  const [blogAuthor, setBlogAuthor] = useState([]);
  const [moreBlogs, setMoreBlogs] = useState();
  const [loading, setLoading] = useState(true);
  const [BlogDetails, setBlogDetails] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [isCommented, setIsCommented] = useState(false);
  const [tags, setTags] = useState([]);
  const [isError, setIsError] = useState(null);
  /// global for fetching recent and ralated blogsat
  const [formData, setFormData] = useState({
    fullName: "",
    message: "",
    email: "",
  });
  // handkeChange for blog comment
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsCommented(true);
    const contacted = {
      _type: "contacts",
      fullName,
      email,
      message,
    };

    client
      .create(contacted)
      .then(() => {
        setLoading(false);
        setIsCommented(false);
        setIsError(null);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error?.response?.body?.error?.description);
        setIsError(error?.response?.body?.error?.description);
      });
  };
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
        handleSubmit,
        handleChange,
        isError,
        setIsError,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useStateBlogContext = () => useContext(BlogContext);
