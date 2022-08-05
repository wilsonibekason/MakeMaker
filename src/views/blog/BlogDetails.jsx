import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  let blogid;
  let Id = useParams();
  blogid = Id?.id;

  ///// defining states

  return <div>BlogDetails</div>;
};

export default BlogDetails;
