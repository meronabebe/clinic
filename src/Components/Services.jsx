import React from "react";

import { RiMicroscopeLine } from "react-icons/ri";

import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import Button from "../Layouts/Button";
import ServicesCard from "../Layouts/ServicesCard";
import { FaChild } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";


const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-center">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-center">
            we offer the best homecare service.
          </p>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Lab Test" paragraph = "Collect sample, send sample, collect result, consult physician." />
        <ServicesCard icon={icon3} title="adult care" paragraph = "administration of  ordered medication, wound care, geriatric care, catheterization, colostomy care, physiostomy, paliative care, disability care, post surgery care, massage therapy, bed sore care, chronic illness follow up, v/s check up, doctor consuitation, wellness package, bed bath, back care, assist walking and many more" />
        <ServicesCard icon={<FaChild size={24} color="#4CAF50" />} title="pediatrics" paragraph = "child care, nutrition advice, new born care, baby bath neunatal inspection/ examination , feeding" />
        <ServicesCard icon={icon2} title="maternal care" paragraph = "post-natal follow u, wound care, breast care" />
        <ServicesCard icon={<FaChalkboardTeacher size={24} color="#4CAF50" />} title="Training" paragraph ="training nursing procedures and homebased care"/>
      </div>
    </div>
  );
};

export default Services;