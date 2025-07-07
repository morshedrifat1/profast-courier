import React from "react";
import { Link } from "react-router";
import marchent from '../../assets/images/location-merchant.png'
const BecomeMarchent = () => {
  return (
    <div className='max-w-321 mx-auto my-20 bg-Heading px-7 py-14 sm:px-15 sm:py-20 rounded-4xl bg-[url("be-a-merchant-bg.png")] bg-no-repeat bg-top'>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-7 items-center">
        <div className="col-span-4">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-9 sm:leading-13">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-base leading-7 text-base-content mt-4">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="mt-8 gap-4 flex flex-wrap">
            <Link className="rounded-full text-lg md:text-xl font-bold bg-primary text-base-300 px-5 py-2 md:px-8 md:py-4">Become a Merchant</Link>
            <Link className="rounded-full text-lg md:text-xl font-bold border border-primary text-primary px-5 py-2 md:px-8 md:py-4 hover:bg-primary hover:text-base-300 transition-colors duration-300">Earn with Profast Courier</Link>
          </div>
        </div>
        <div className="col-span-3">
            <img className="w-200" src={marchent} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BecomeMarchent;
