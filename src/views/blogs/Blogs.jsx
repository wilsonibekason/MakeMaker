import React from "react";
import { Route, Routes } from "react-router-dom";
import { Categories, Layout, PostCard, PostWidget } from ".";
import { FeaturedPosts } from "./section";

const Blog = () => {
  return (
    <>
      <Layout>
        <FeaturedPosts />
        <PostCard />
        <PostWidget />
        <Categories />
      </Layout>
    </>
  );
};

export default Blog;
