import React from "react";


const ServicesCard = ({ icon, title, paragraph }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-4 w-full lg:w-1/3 p-5 shadow-md rounded-lg cursor-pointer lg:hover:-translate-y-6 transition-transform duration-300 ease-in-out">
      <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <h1 className="font-semibold text-lg text-gray-800">{title}</h1>
      <p className="text-sm text-gray-600 leading-relaxed">{paragraph}</p>
    </div>
  );
};

export default ServicesCard;

