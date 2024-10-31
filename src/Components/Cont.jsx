import React from "react";
import { Link } from "react-scroll";


const Contact = () => {
  return (
    <div className="  flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">Contact Us</h1> <br></br>
        <p className="flex items-center space-x-2">
        <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
    </svg>
            <span>
              Address: Addis Ababa, Lebu Haile Garment,<br />
              near st michael church
            </span></p>
            <p className="flex items-center space-x-2">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.1 15.1 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.45 2.33.69 3.54.69a1 1 0 011 1v3.5a1 1 0 01-1 1C8.93 21 3 15.07 3 8a1 1 0 011-1h3.5a1 1 0 011 1c0 1.21.24 2.42.69 3.54.11.26.04.55-.24 1.05l-2.2 2.2z"/>
    </svg>
      
            <span>Phone: <a href="tel:0911198932" className="text-blue-400">0911198932, 0944052844</a></span>
          </p>
          <p className="flex items-center space-x-2">

          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM4 6h16v.01L12 13 4 6.01V6zm0 12V8.54l7.06 5.93a1 1 0 001.27 0L20 8.54V18H4z"/>
    </svg>
   
            <span>Email: <a href="mailto:meronmediumclinic@gmail.com" className="text-blue-400">meronmediumclinic@gmail.com</a></span>
          </p> <br></br><br></br><br></br>
      </div>
      
    </div>
  );
};

export default Contact;