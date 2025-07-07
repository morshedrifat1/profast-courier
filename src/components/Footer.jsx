import React from "react";
import logo from "../assets/images/dark-logo.png";
import { Link, NavLink } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const navItem = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-base text-white/80" : "text-base text-white"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-base text-white/80" : "text-base text-white"
          }
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-base text-white/80" : "text-base text-white"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-base text-white/80" : "text-base text-white"
          }
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-base text-white/80" : "text-base text-white"
          }
        >
          Be a Rider
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="px-5">
      <div className="max-w-375 bg-base-200 rounded-4xl py-20 px-5 sm:px-25 mx-auto">
        <img className="mx-auto" src={logo} alt="" />
        <p className="text-white/80 max-w-192 mx-auto text-center leading-7 mt-4 ">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <hr className="border-dashed text-white/50 mt-8" />
        <ul className="flex flex-wrap justify-center gap-5 sm:gap-8 mt-8">
          {navItem}
        </ul>
        <hr className="border-dashed text-white/50 mt-8" />
        <ul className="flex flex-wrap justify-center mt-8 gap-6">
          <Link>
            <FaLinkedinIn
              size={36}
              className="bg-[#137eb8] text-white p-2 rounded-full"
            ></FaLinkedinIn>
          </Link>
          <Link>
            <FaFacebookF
              size={36}
              className="text-white p-2 bg-[#0088fe] rounded-full"
            ></FaFacebookF>
          </Link>
          <Link>
            <FaXTwitter
              size={36}
              className="bg-white px-2 rounded-full"
            ></FaXTwitter>
          </Link>
          <Link>
            <FaYoutube
              size={36}
              className="bg-[#ff0000] text-white p-2 rounded-full"
            ></FaYoutube>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
