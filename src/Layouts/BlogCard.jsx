import React from "react";

const BlogCard = ({  headlines,par,apply }) => {
  return (
    <div className=" w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      {/* <img
        className=" h-64 md:h-96 lg:h-40 w-full rounded-lg"
        src={img}
        alt="img"
      /> */}
      <h2 className=" text-lg text-center font-semibold">{headlines}</h2>
      <p className=" text-center text-sm">
        {par}
      </p>
      <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdSKWRn1cHkWzZltZf07crI4tKTJfcaNHPuDntiVpkVsnm8qg/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-backgroundColor text-center cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out mt-auto"
        >
  {apply}
</a>

    </div>
    
  );
};

export default BlogCard;