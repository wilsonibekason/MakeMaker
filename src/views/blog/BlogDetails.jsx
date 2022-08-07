import { useStateContextProduct } from "../../oncontext/productContext/onProductContext";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogDetailMoreQuery, blogDetailQuery } from "../../utils/data";
import { client } from "../../client";
import { useStateBlogContext } from "../../oncontext/blogContext/OnBlogContext";
import Navbar from "components/Navbars/AuthNavbar";
import { useStateContext } from "oncontext/OnLandingContext";
import Footer from "../../components/Footers/Footer";
import { CommentForm } from "../../views/blogs";

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
      <div className="container mx-auto my-4 bg-blueGray-200">
        <div className="flex justify-between items-center flex-col  lg:flex-row md:flex-row sm:flex-col">
          {/** BLOG DETAILS COMPONENT */}
          <div className="w-full md:w-6/12 lg:w-10/12 px-2 md:px-4 lg:px-4 mx-auto lg:mx-2 mt-12">
            <img
              src={require("assets/img/profile.jpg").default}
              className="shadow-lg rounded-lg"
            />

            <div className="md:pr-12 mx-4">
              <h3 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h3>
              <p className="mt-4 text-xs leading-relaxed text-blueGray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                debitis animi impedit in id unde ipsum dolores asperiores, quam
                magnam nam ullam voluptas fuga magni saepe quod nobis quisquam
                ex quibusdam repellat eius. Consectetur quam dolorem unde minus
                quo soluta? Id, iusto numquam! Sapiente accusamus voluptas qui
                odit velit provident quia? Aliquid reprehenderit possimus
                sapiente distinctio ad tenetur commodi ex cum quos,
                necessitatibus totam doloribus nobis aspernatur, id dolores,
                doloremque veritatis voluptates vero quis. Quod vel possimus
                nihil molestiae aut beatae mollitia tempora culpa debitis? Error
                dolore dicta consequuntur iste. Reiciendis, sit id maiores
                laborum iusto voluptatem voluptates! Laborum, earum!
              </p>
            </div>
          </div>
          {/** BLOG DETAILS COMPONENT */}

          {/** BLOG CATEGORY COMPONENT */}
          <div className="  w-full md:w-4/12 lg:w-4/12 px-4 mx-4 md:px-4 mt-32 sticky bg-white">
            <div className="border border-blueGray-400 border-solid p-4 my-4 ">
              {" "}
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-white dark:hover:text-white dark:bg-blueGray-200 dark:text-white dark:hover uppercase text-center font-semibold ">
                  newsletter
                </p>
                <div className="border-t bg-blueGray-300 mt-2"></div>
                {/**email input for newletters */}
                <div class="relative flex w-full flex-wrap items-stretch mb-3 mt-4">
                  <input
                    type="email"
                    placeholder="Send us your email to receive daily newsletters"
                    class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600
                      bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                    name="email"
                    // value={email}
                    required
                    // onChange={handleChange}?
                  />
                  <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              {/**Recent post section */}
              <div className="mb-4 ">
                <div className="border-t bg-blueGray-300 mt-2"></div>
                <div className="border border-solid shadow-md ">
                  <p className="text-sm text-gray-600 dark:text-white dark:hover:text-white dark:bg-blueGray-200 dark:text-white dark:hover uppercase text-center font-semibold mt-2">
                    recent post
                  </p>
                  {/**Recent post section */}

                  <div className="border-t bg-blueGray-300 mt-2"></div>
                  <div className="flex flex-col  items-center mx-auto">
                    <h4 className="text-sm uppercase font-semibold  text-lightBlue-400  ">
                      web development
                    </h4>
                    <p className="text-xs text-lightBlue-400 font-semibold">
                      {" "}
                      Bringing science to reality is very important
                    </p>
                    <div className="border-t bg-lightBlue-300 mt-2"></div>
                    <div className="flex mr-4  mb-2">
                      <div className="w-1/6 h-4 px-2  font-semibold">
                        <p className="text-xs ">20/3/2004 </p>
                      </div>
                      <div className="border-t bg-lightBlue-300 mt-2"></div>
                      <div className="w-1/6 h-4 px-2 font-semibold">
                        <p className="text-xs">3mins read</p>
                      </div>
                    </div>
                  </div>

                  {/**Recent post section */}
                </div>
              </div>
              {/**Recent post section */}
              {/**tags and categories section */}
              <div className="mb-4 ">
                <div className="border-t bg-blueGray-300 mt-2"></div>
                <div className="border border-solid shadow-md ">
                  <p className="text-sm text-gray-600 dark:text-white dark:hover:text-white dark:bg-blueGray-200 dark:text-white dark:hover uppercase text-center font-semibold mt-2">
                    tags and categories
                  </p>
                  {/**Recent post section */}

                  <div className="border-t bg-blueGray-300 mt-2"></div>
                  <div className="flex flex-col  items-center mx-auto">
                    <div className="block mb-2">
                      <span className="text-xs font-semibold inline-block py-1 px-2  rounded-lg bg-lightBlue-400 text-white uppercase last:mr-0 mr-2 ml-2 mt-2">
                        hdhhd
                      </span>
                      <span className="text-xs font-semibold inline-block py-1 px-2  rounded-lg bg-lightBlue-400 text-white uppercase last:mr-0 mr-2 ml-2 mt-2">
                        hdhhd
                      </span>
                    </div>
                  </div>

                  {/**Recent post section */}
                </div>
              </div>
              {/**tags and categories section */}
            </div>
          </div>
          {/** BLOG CATEGORY COMPONENT */}
        </div>
      </div>
      {/* <CommentForm /> */}
      <CommentForm />
      {/** BLOGDETAILS COMPONENT */}
      <Footer />
    </>
  );
};

export default BlogDetails;
