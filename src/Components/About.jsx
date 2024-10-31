import React from "react";
import img from "../assets/img/leonardo.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        For the past 7 years, our clinic has been dedicated to delivering exceptional healthcare services, bringing satisfaction and trust to our patients. Our journey began with a commitment to compassionate, high-quality care in our clinic, and we are proud to have built a foundation of trust and excellence over the years.
        </p>
        <p className="text-justify lg:text-start">
        In response to our patients' needs, we are thrilled to now extend our services to include homecare. This new service brings our qualified doctors, skilled nurses, and experienced caregivers directly to your doorstep, ensuring you receive the same level of personalized, attentive care that has defined us from the start.
        </p>
        <p className="text-justify lg:text-start">
        At the heart of our practice is a team of highly trained professionals who prioritize your health, comfort, and peace of mind. From preventive care to advanced medical treatments, we are here to support you and your loved ones on every step of your wellness journey.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;