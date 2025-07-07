import React from "react";
import icon1 from "../../assets/images/bookingIcon.png";
import icon2 from "../../assets/images/cod.png";
import icon3 from "../../assets/images/DeliveryHub.png";
import icon4 from "../../assets/images/BookingSME.png";
const HowWorks = () => {
  const works = [
    {
      id: 1,
      image: icon1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      image: icon2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      image: icon3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      image: icon4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className="mt-15 max-w-330 mx-auto">
      <h1 className="text-4xl font-bold text-Heading">How it Works</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {works.map((work) => (
          <div className="p-8 rounded-4xl bg-white">
            <img src={work.image} className="w-14" alt="" />
            <h1 className="mt-5 text-lg font-bold text-Heading">
              {work.title}
            </h1>
            <p className="mt-3 text-base font-medium text-text leading-7">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
