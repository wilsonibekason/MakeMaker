import { useStateContextProduct } from "../../oncontext/productContext/onProductContext";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogDetailMoreQuery, blogDetailQuery } from "../../utils/data";
import { client } from "../../client";
import { useStateBlogContext } from "../../oncontext/blogContext/OnBlogContext";
import Navbar from "components/Navbars/AuthNavbar";
import { useStateContext } from "oncontext/OnLandingContext";

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
  const { BiLeftArrow, BiRightArrow } = useStateContext();
  ///// set global variables
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
  const showImg = "absolute top-0 w-full h-full bg-center bg-cover";
  const hideImg = "absolute top-0 w-full h-full bg-center bg-cover hidden";
  return (
    <>
      <Navbar />
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          //={index === current ? showImg : hideImg}
          className={showImg}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            //backgroundImage: `url(${urlFor(headerImage)})`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-bold text-4xl">{"sww"}</h1>
                <p className="mt-4 text-sm text-blueGray-200">{"swwww"}</p>
                <BiLeftArrow
                  className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
                  onClick={"prevSlide"}
                />
                <BiRightArrow
                  className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
                  onClick={"nextSlide"}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      {/** BLOGDETAILS COMPONENT */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/** BLOG DETAILS COMPONENT */}
          <div className="w-full md:w-6/12 lg:w-10/12 px-2 md:px-4 lg:px-4 mx-auto lg:mx-2 mt-12">
            <img
              src={require("assets/img/profile.jpg").default}
              className="shadow-lg rounded-lg"
            />
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">dididcdicdicde</div>
            </div>
          </div>
          {/** BLOG DETAILS COMPONENT */}

          {/** BLOG CATEGORY COMPONENT */}
          <div className="  w-full md:w-4/12 lg:w-4/12 px-4 mx-4 md:px-4 mt-32">
            <div className="border border-blueGray-400 border-solid p-4 my-4">
              {" "}
              w-full md:w-6/12 px-4w-full md:w-6/12 px-4w-full md:w-6/12
              px-4w-full md:w-6/12 px-4w-full md:w-6/12 px-4w-full md:w-6/12
              px-4w-full md:w-6/12 px-4w-full md:w-6/12 px-4w-full md:w-6/12
              px-4w-full md:w-6/12 px-4 w-full md:w-6/12 px-4 mx-4 md:px-4 mt
              -32
            </div>
          </div>
          {/** BLOG CATEGORY COMPONENT */}
        </div>
      </div>
      {/** BLOGDETAILS COMPONENT */}
    </>
  );
};

export default BlogDetails;
