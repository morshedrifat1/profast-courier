import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/light-logo.png";
import useAuth from "../hooks/useAuth";
const Header = () => {
  const { user,userSignout } = useAuth();
  const handleLogout = () => {
    userSignout().then(()=>{
    }).catch(error=>console.log(error.message))
  };
  const navItem = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-primary px-5 py-2.5 rounded-full font-bold text-base-300/70"
              : "text-base text-text"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/coverage"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary px-5 py-2.5 rounded-full font-bold text-base-300/70"
              : "text-base text-text"
          }
        >
          Coverage
        </NavLink>
      </li>
      {user&&<li>
        <NavLink
          to={"/send-parcel"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary px-5 py-2.5 rounded-full font-bold text-base-300/70"
              : "text-base text-text"
          }
        >
          Send Parcel
        </NavLink>
      </li>}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-primary px-5 py-2.5 rounded-full font-bold text-base-300/70"
              : "text-base text-text"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-primary px-5 py-2.5 rounded-full font-bold text-base-300/70"
              : "text-base text-text"
          }
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-primary px-5 py-2.5 rounded-full font-bold text-base-300/70"
              : "text-base text-text"
          }
        >
          Be a Rider
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="px-5">
      <div className="navbar bg-white/70 backdrop-blur-lg py-4 max-w-375 mx-auto my-8 rounded-2xl px-8 justify-between ">
        <div>
          <Link to={"/"}>
            <img className="w-31" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 space-x-7">{navItem}</ul>
        </div>
        <div className="hidden lg:inline ">
          {user ? (
            <button
              onClick={handleLogout}
              className="text-xl font-bold px-3 py-2 sm:px-8 sm:py-3 text-base-300 rounded-xl bg-primary cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <div className="space-x-4">
              <Link
                to={"/auth/login"}
                className="text-xl font-bold px-3 py-2 sm:px-8 sm:py-3 text-text border border-base-100 rounded-xl"
              >
                Sign In
              </Link>
              <Link
                to={"/auth/register"}
                className="text-xl font-bold px-3 py-2 sm:px-8 sm:py-3 text-base-300 rounded-xl bg-primary"
              >
                Sign Up{" "}
              </Link>
            </div>
          )}
        </div>
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItem}
            <Link
              to={"/auth/login"}
              className="text-xl font-bold px-3 py-2 sm:px-8 sm:py-3 text-text border border-base-100 rounded-xl"
            >
              Sign In
            </Link>
            <Link
              to={"/auth/register"}
              className="text-xl font-bold px-3 py-2 sm:px-8 sm:py-3 text-base-300 rounded-xl bg-primary"
            >
              Sign Up{" "}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
