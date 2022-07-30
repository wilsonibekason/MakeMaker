/*eslint-disable*/
// create imports for internal dependencies
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// create import for external dependencies

/**
 *
 *    CREATE IMPORTS FOR SANITY INTEGRATION
 *
 */

import { client, urlFor } from "../client";
// import home context
//import {homeContext } from '../../onContext/onHomeContext';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer";
//import { HomeContext } from "oncontext/OnHomeContext";
import { useStateContext } from "../oncontext/OnLandingContext";
import Context from "../oncontext/OnLandingContext";
import MotionWrap from "../wrapper/MotionWrap";
// CSS COMPONENTS  DEFINITIONS
const cssComponent = [
  "Buttons",
  "Index",
  "Labels",
  "Menus",
  "Navbars",
  "Pagination",
  "ProgressBar",
  "Typography",
];
const Index = () => {
  const {
    header,
    setHeader,
    currentIndex,
    navComponents,
    sections,
    setSections,
    sectionContents,
    setSectionContents,
    aboutContents,
    setAboutContents,
    aboutTitle,
    aboutDesc,
    aboutImageUrl,
    aboutTitleIcon,
    strengthContent,
    strengthTitle,
    strengthDesc,
    strengthHREF,
    strengthTitleIcon,
    strengthImage,
    strengthTopic,
    strengthImageCheck,
    inspireContentImage,
    inspireContentDesc,
    inspireContentTitle,
    reachImg,
    reachTitle,
    reachDesc,
  } = useStateContext();

  console.log(header);
  useEffect(() => {
    // sanity fetch headers
    const headerQuery = '*[_type == "header"]';
    // sanity fetch sections
    const sectionsQuery = '*[_type == "section"]';
    // sanity fetch sectionscontent
    const sectionContentQuery = '*[_type == "sectionContent"]';
    // fetching headers from sanity stidio headerImage?.asset?._ref
    try {
      client?.fetch(headerQuery)?.then((headerData) => {
        setHeader(headerData);
        console.log(headerData);
      });
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
    try {
      client?.fetch(sectionsQuery)?.then((sectionData) => {
        setSections(sectionData);
        console.log(sectionData);
      });
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
    try {
      client?.fetch(sectionContentQuery)?.then((itemData) => {
        setSectionContents(itemData);
        console.log(itemData);
        console.log(itemData[0]);
        console.log(sectionContents[3]?.description);
      });
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
  }, []);
  console.log(aboutContents);
  console.log(
    aboutContents?.map((item, index) => (
      <img alt=".." src={urlFor(item?.sectionImage)} />
    ))
  );
  console.log(aboutContents?.map((item, index) => urlFor(item?.sectionIcons)));
  console.log(aboutContents.map((item, index) => item?.description));
  console.log(urlFor(aboutImageUrl?.sectionIcons));
  console.log(aboutImageUrl?.sectionIcons?.asset?._ref);
  const sectionImg = aboutImageUrl?.sectionIcons?.asset?._ref;
  const sectionImage = urlFor(aboutImageUrl?.sectionIcons);
  const sectionImageURL = aboutContents?.map((item, index) =>
    urlFor(item?.sectionIcons)
  );
  {
    /** creating log for strengthContent components */
  }
  // defining strengthItems
  // const strengthItem1 = strengthHREF[2];
  // const strengthItem2 = strengthHREF[1];
  // const strengthItem3 = strengthHREF[2];
  // const strengthItem4 = strengthHREF[3];

  console.log(strengthDesc);
  console.log(strengthHREF?.forEach((item) => item));
  console.log(strengthImage);
  console.log(strengthHREF);
  console.log(strengthHREF?.length);
  console.log(strengthHREF?.map((item) => item));
  console.log(strengthTitle);
  console.log(strengthTitleIcon);
  console.log(strengthTopic);
  console.log(strengthImageCheck);
  console.log(strengthContent);
  const strengthHREFs = strengthContent[0]?.linkUrl?.map((item, index) => item);
  console.log(strengthHREFs);
  {
    /**fgrr */
  }
  const headers = header[currentIndex];
  const aboutSectionItems = aboutContents[0]?.categoriesItem;
  const sectionItem1 = sectionContents[0];
  const sectionItem2 = sectionContents[1];
  const sectionItem3 = sectionContents[2];
  const sectionItem4 = sectionContents[3];
  console.log(strengthContent);
  // checkbox for inspireContents
  console.log(inspireContentDesc);
  console.log(inspireContentImage);
  console.log(inspireContentTitle);
  // checkout for reachout Schema
  console.log(reachDesc);
  console.log(reachTitle);
  console.log(reachImg);

  return (
    <>
      <IndexNavbar fixed />
      <>
        {header.map((item, index) => (
          <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
            <div className="container mx-auto items-center flex flex-wrap">
              <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-semibold text-4xl text-blueGray-600">
                    {item?.title}.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {item?.description}{" "}
                    <a
                      href="https://tailwindcss.com/?ref=creativetim"
                      className="text-blueGray-600"
                      target="_blank"
                    >
                      Makemaker
                    </a>
                  </p>
                  <div className="mt-12">
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                      target="_blank"
                      className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Get started
                    </a>
                    <a
                      href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                      className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                      target="_blank"
                    >
                      Join Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
              src={urlFor(item?.headerImage)}
              alt="..."
            />
          </section>
        ))}
        <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
                className="text-blueGray-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          {/** sections componnets  */}

          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              {sections?.map((item, index) => (
                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                    <img
                      alt="..."
                      src={urlFor(item?.sectionImage)}
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-lightBlue-500 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        {item?.title}
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        {item?.description}
                      </p>
                    </blockquote>
                  </div>
                </div>
              ))}
              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className={`fas ${sectionItem1?.icons} `}></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          {sectionItem1?.title}
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          {sectionItem1?.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className={`fas ${sectionItem2?.icons}`}></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          {sectionItem2?.title}
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          {sectionItem2?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className={`fas ${sectionItem3?.icons}`}></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          {" "}
                          {sectionItem3?.title}
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          {sectionItem3?.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className={`fas ${sectionItem4?.icons}`}></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          {sectionItem4?.title}
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          {sectionItem4?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** end of sections components  */}
          <div className="container mx-auto overflow-hidden pb-20">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className={`fas ${aboutTitleIcon} text-xl`}></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {aboutTitle}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {aboutDesc}
                </p>
                <div className="block pb-6">
                  {aboutSectionItems?.map((cssItem, index) => (
                    <span
                      className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
                      key={index + cssItem}
                    >
                      {cssItem}
                    </span>
                  ))}
                </div>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                  target="_blank"
                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                >
                  View All{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </div>

              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                  <img
                    className=" w-full align-middle rounded-lg absolute shadow-2xl max-w-800-px -left-0-px -top-225-px "
                    //src={sectionImage}
                    //src={require("assets/img/pattern_react.png").default}
                    src={sectionImageURL}
                    // src={urlFor(aboutImageUrl?.sectionIcons)}
                    //src={sectionImg}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 pb-32 pt-48">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-file-alt text-xl"></i>
                  </div> */}
                  <h3 className="text-3xl font-semibold">
                    {inspireContentTitle}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {inspireContentDesc}
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Built by Developers for Developers
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted code for Components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic Javascript Components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-xl"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                  }}
                  src={inspireContentImage}
                />
              </div>
            </div>
          </div>

          <div className="justify-center text-center flex flex-wrap mt-24">
            <div className="w-full md:w-6/12 px-12 md:px-4">
              <h2 className="font-semibold text-4xl">
                Beautiful Example Pages
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                Notus React is a completly new product built using our past
                experience in web templates. Take the examples we made for you
                and start playing with them.
              </p>
            </div>
          </div>
        </section>

        <section className="block relative z-1 bg-blueGray-600">
          <div className="container mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4  -mt-24">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Login Page
                    </h5>
                    <Link to="/auth/login">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={require("assets/img/login.jpg").default}
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Profile Page
                    </h5>
                    <Link to="/profile">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={inspireContentImage}
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Landing Page
                    </h5>
                    <Link to="/landing">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={require("assets/img/landing.jpg").default}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blueGray-600 overflow-hidden">
          <div className="container mx-auto pb-64">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-code-branch text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                  Open Source
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Since{" "}
                  <a
                    href="https://tailwindcss.com/?ref=creativetim"
                    className="text-blueGray-300"
                    target="_blank"
                  >
                    Tailwind CSS
                  </a>{" "}
                  is an open source project we wanted to continue this movement
                  too. You can give this version a try to feel the design and
                  also test the quality of the code!
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                  Get it free on Github and please help us spread the news with
                  a Star!
                </p>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  target="_blank"
                  className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Github Star
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
                <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 bg-blueGray-200 relative pt-32">
          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
              <div className="w-full text-center lg:w-8/12">
                <img
                  className="shadow-md rounded-lg max-w-full w-16 mx-auto p-1 bg-white h1"
                  src={reachImg}
                  alt="reach_image"
                />
                {/*
                <p className="text-4xl text-center">
                 
                  <span role="img" aria-label="love">
                    {reachImg}
                  </span> 
                </p>
                */}
                <h3 className="font-semibold text-3xl">{reachTitle}</h3>
                <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                  {reachDesc}
                </p>
                <div className="sm:block flex flex-col mt-10">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Get started
                  </a>
                  <a
                    href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                    target="_blank"
                    className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                    <i className="fab fa-github text-lg mr-1"></i>
                    <span>Help With a Star</span>
                  </a>
                </div>
                <div className="text-center mt-16"></div>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </>
  );
};

export default MotionWrap(Index);
