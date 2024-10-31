import React from "react";
import Button from "../Layouts/Button";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/dalle.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
        Nurturing Health, Inspiring Wellness.
        </h1>
        <p>
        With compassionate care and personalized support, we bring healthcare closer to you—right where you need it. From in-home assistance to specialized clinical services, we’re here to enhance your well-being every step of the way. Our dedicated team of professionals is committed to providing quality care, helping you and your loved ones live healthier, happier lives.
        </p>
      </div>
    </div>
  );
};

export default Home;