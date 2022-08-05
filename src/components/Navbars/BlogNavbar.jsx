import React from "react";

const BlogNavbar = () => {
  return (
    <>
      <div className="flex items-center space-x-5">
        <a href="/">
          <img
            src="https://pbs.twimg.com/profile_images/1222114575384256/T1J4XU0I7_400x400.jpg"
            alt=""
            className="w-44 object-contain cursor-pointer"
          />
        </a>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3 className="">About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
        {/*******************************COMTAINER3******************* */}
        {/*******************************COMTAINER3******************* */}
        <div>
          <h3>SignIn</h3>
          <h3>Get Started</h3>
        </div>
        {/*******************************COMTAINER3******************* */}
      </div>
    </>
  );
};

export default BlogNavbar;
