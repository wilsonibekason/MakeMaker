import { useStateContextProduct } from "../../oncontext/productContext/onProductContext";
import React from "react";
import { useParams } from "react-router-dom";
import { blogDetailQuery } from "../../utils/data";
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
  } = useStateBlogContextt();
  let blogid;
  let Id = useParams();
  blogid = Id?.id;

  ///// defining states
  const fetchBlogDetails = () => {
    let query;
    query = blogDetailQuery(blogid);
    if (query) {
      client.fetch(query).then((data) => {});
    }
  };
  return <div>BlogDetails</div>;
};

export default BlogDetails;
