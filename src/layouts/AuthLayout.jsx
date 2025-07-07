import React from "react";
import logo from "../assets/images/light-logo.png";
import { Link, Outlet } from "react-router";
import authImg from '../assets/images/authImage.png'
const AuthLayout = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
        <div className="p-10">
          <div>
            <Link to={'/'}><img src={logo} alt="" /></Link>
          </div>
          <div className="my-15">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="bg-secondary justify-center items-center hidden md:flex">
          <img src={authImg} alt="" />
        </div>
      </div>
  );
};

export default AuthLayout;
