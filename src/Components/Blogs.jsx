import React from "react";

import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import Button from "../Layouts/Button";
import BlogCard from "../Layouts/BlogCard";

const Blogs = () => {
  return (
    <div className=" flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center  justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-center">
            Career
          </h1>
          <p className="mt-2 text-center lg:text-right">
            Apply for job openings
          </p>
        </div>
      </div>
      <div className=" my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard  headlines="Nurse" par="apply for position as nurse" apply="apply now" />
          <BlogCard  headlines="Consultant physician" par="apply for position as consultant physician" apply="apply now"/>
          
        </div>
      </div>
    </div>
  );
};

export default Blogs;