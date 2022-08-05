import { useStateContextProduct } from "../../oncontext/productContext/onProductContext";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogDetailMoreQuery, blogDetailQuery } from "../../utils/data";
import { client } from "../../client";
import { useStateBlogContext } from "../../oncontext/blogContext/OnBlogContext";

const BlogDetails = () => {
  const {
    blogAuthor,
    moreBlogs,
    setMoreBlogs,
    loading,
    setLoading,
    BlogDetails,
    setBlogDetails,
  } = useStateBlogContext();
  let blogid;
  let query;
  let queryMore;
  let Id = useParams();
  blogid = Id?.id;

  ///// defining states
  const fetchBlogDetails = () => {
    setLoading(true);

    query = blogDetailQuery(blogid);
    if (query) {
      client.fetch(query).then((data) => {
        setBlogDetails(data);
        setLoading(false);
        if (data[0]) {
          queryMore = blogDetailMoreQuery(data[0]);
          client
            .fetch(queryMore)
            .then((moreData) => {
              setMoreBlogs(moreData);
              setLoading(false);
            })
            .catch((error) =>
              console.log(error?.response?.body?.error?.description)
            );
        }
      });
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, [blogid]);
  // LOGS
  console.log("====================================");
  console.log(blogAuthor);
  console.log(BlogDetails);
  console.log(moreBlogs);
  console.log("====================================");
  return <div>BlogDetails</div>;
};

export default BlogDetails;
