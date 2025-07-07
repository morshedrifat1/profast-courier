import React from "react";
import img1 from "../../assets/images/service.png";
const OurService = () => {
    const services =[
  {
    id: 1,
    image: img1,
    title: "Express & Standard Delivery",
    description: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off."
  },
  {
    id: 2,
    image: img1,
    title: "Nationwide Delivery",
    description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours."
  },
  {
    id: 3,
    image: img1,
    title: "Fulfillment Solution",
    description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
  },
  {
    id: 4,
    image: img1,
    title: "Cash on Home Delivery",
    description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
  },
  {
    id: 5,
    image: img1,
    title: "Corporate Service / Contract In Logistics",
    description: "Customized corporate services which includes warehouse and inventory management support."
  },
  {
    id: 6,
    image: img1,
    title: "Parcel Return",
    description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
  }
]
  return (
    <div className="bg-Heading px-5 py-13 lg:p-20 rounded-4xl mt-25">
      <div className="max-w-180 mx-auto text-center">
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
        <p className="text-base leading-7 mt-4 text-base-content">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service)=><div className="bg-white hover:bg-primary transition-colors duration-300 px-6 py-8 rounded-3xl text-center space-y-4">
          <img
            src={service.image}
            className="mx-auto bg-gradient-to-b from-[#EEEDFC] to-[#EEEDFC0] p-6 rounded-full"
            alt=""
          />
          <h1 className="text-2xl font-bold text-Heading">
            {service.title}
          </h1>
          <p className="text-base text-text leading-7">
            {service.description}
          </p>
        </div>)}
      </div>
    </div>
  );
};

export default OurService;
