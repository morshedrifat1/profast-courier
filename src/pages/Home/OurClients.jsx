import React from "react";
import Marquee from "react-fast-marquee";
import brand1 from '../../assets/brands/sm_ghor.png'
import brand2 from '../../assets/brands/sailor.png'
import brand3 from '../../assets/brands/rokomari.png'
import brand4 from '../../assets/brands/othoba.png'
import brand5 from '../../assets/brands/febrilife.png'


const brands = [brand1,brand2,brand5,brand3,brand4,brand5,brand3]
const OurClients = () => {
  return (
    <div className="mt-25 max-w-321 mx-auto">
        <h1 className="text-center text-Heading font-extrabold text-3xl">We've helped thousands of sales teams</h1>
      <Marquee className="mt-10" gradient={true} gradientColor="#eaeced" gradientWidth={200} direction="right">
        <div className="flex items-center pr-10 space-x-10 sm:pr-25 sm:space-x-25">
            {brands.map((brand)=><img className="w-15 h-10 sm:w-30" src={brand}></img>)}
        </div>
      </Marquee>
    </div>
  );
};

export default OurClients;
