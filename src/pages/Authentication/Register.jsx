import React, { useState } from "react";
import { GoLock, GoMail } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { IoCloudUploadOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router";
import googleIcon from '../../assets/images/google.png'
import { useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
const Register = () => {
  const [seePasswor, setSeepassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    console.log(data);
  }
  return (
    <div className="max-w-95 bg-white mx-auto">
      <h1 className="text-4xl font-extrabold text-black">Create an Account</h1>
      <p className="text-black text-lg font-medium mt-2">Register with Profast</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <div className="relative">
          <FaUser size={50} className="text-border bg-[#F5F5F5] p-2.5 rounded-full" />
          <IoCloudUploadOutline size={20} className="text-primary bg-[#F5F5F5] p-0.5 rounded-full absolute top-6 left-5" />
        </div>
        <label className="text-inputText text-base font-medium block mt-4">Name</label>
        <div className="relative mt-1.5">
          <input
            type="text"
            {...register("name",{required:true})}
            placeholder="Enter Your Name"
            className="pl-10 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline mt-1 placeholder:text-border"
          />
          <BiUser
            size={17}
            className="absolute top-1/2 -translate-y-1/3 left-3 text-borderOutline "
          />
        </div>
        <label className="mt-3 block text-inputText text-base font-medium">Email</label>
        <div className="relative mt-1.5">
          <input
            type="email"
            {...register("email",{required:true})}
            placeholder="Enter Your Email"
            className="pl-10 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline mt-1 placeholder:text-border"
          />
          <GoMail
            size={17}
            className="absolute top-1/2 -translate-y-1/3 left-3 text-borderOutline "
          />
        </div>
        <label className="mt-3 block text-inputText text-base font-medium">
          Password
        </label>
        <div className="relative mt-1.5">
          <input
            type={seePasswor ? "text" : "password"}
            {...register("password",{required:true})}
            placeholder="Enter Your Email"
            className="pl-10 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline mt-1 placeholder:text-border"
          />
          <GoLock
            size={17}
            className="absolute top-1/2 -translate-y-1/3 left-3 text-borderOutline "
          />
          {seePasswor ? (
            <AiOutlineEye
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-borderOutline"
              onClick={() => setSeepassword(!seePasswor)}
            />
          ) : (
            <IoEyeOffOutline
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-borderOutline"
              onClick={() => setSeepassword(!seePasswor)}
            />
          )}
        </div>
        <div className="mt-3">
          <p className="text-gray-400 text-sm font-medium underline">
            Forget Password?
          </p>
        </div>
        <input
          type="submit"
          value="Register"
          className="w-full mt-3 py-2 rounded-lg cursor-pointer bg-primary text-base-300 font-semibold text-base"
        />
      </form>
      <p className="text-gray-400 text-base font-medium  mt-3">
        Already have an account? <Link to={'/auth/login'} className="text-[#8FA748]">Login</Link>
      </p>

      {/* login with google */}
      <div>
        <p className="text-center mt-3 text-gray-400 font-semibold">Or</p>

        <button className=" bg-border/50 flex justify-center items-center gap-2.5 py-2.5 rounded-lg text-black/70 border-[#e5e5e5] w-full mt-3 font-semibold cursor-pointer">
         <img src={googleIcon} alt="" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
