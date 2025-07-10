import React, { useState } from "react";
import { GoLock, GoMail } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import googleIcon from '../../assets/images/google.png'
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Toast from "../../components/Toast";
const Login = () => {
  const [seePasswor, setSeepassword] = useState(false);
  const {userLogin,googleSignin} = useAuth();
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    userLogin(data.email,data.password)
    .then(()=>{
      Toast({ type: "success", message: 'Login Successful' });
      reset();
      navigate(location.state?`${location.state}`:"/");
    })
    .catch((error)=>{
      Toast({ type: "error", message: error.message })
    })
  }
  const signinWithGoogle = () => {
    googleSignin()
    .then(() => {
      Toast({ type: "success", message: "Login Successful" });
      navigate(location.state?`${location.state}`:"/");
    }).catch((error)=>{
      Toast({ type: "error", message: error.message });
    })
  };
  return (
    <div className="max-w-95 mx-auto mt-10">
      <h1 className="text-4xl font-extrabold text-black">Welcome Back</h1>
      <p className="text-black text-lg font-medium mt-2">Login with Profast</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <label className="text-inputText text-base font-medium">Email</label>
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
        {/* error message for email */}
        {errors.email?.type === "required" && (
          <p className="text-red-700 mt-1.5">Enter Your Email *</p>
        )}
        <label className="mt-3 block text-inputText text-base font-medium">
          Password
        </label>
        <div className="relative mt-1.5">
          <input
            type={seePasswor ? "text" : "password"}
            {...register("password",{required:true})}
            placeholder="Enter Your Password"
            className="pl-10 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline mt-1 placeholder:text-border"
          />
          <GoLock
            size={17}
            className="absolute top-1/2 -translate-y-1/3 left-3 text-borderOutline "
          />
          {seePasswor ? (
            <AiOutlineEye
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/3 cursor-pointer text-borderOutline"
              onClick={() => setSeepassword(!seePasswor)}
            />
          ) : (
            <IoEyeOffOutline
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/3 cursor-pointer text-borderOutline"
              onClick={() => setSeepassword(!seePasswor)}
            />
          )}
        </div>
        {/* error message for password */}
        {errors.email?.type === "required" && (
          <p className="text-red-700 mt-1.5">Enter Your Password *</p>
        )}
        <div className="mt-3">
          <p className="text-gray-400 text-sm font-medium underline">
            Forget Password?
          </p>
        </div>
        <input
          type="submit"
          value="Login"
          className="w-full mt-3 py-2 rounded-lg cursor-pointer bg-primary text-base-300 font-semibold text-base"
        />
      </form>
      <p className="text-gray-400 text-base font-medium  mt-3">
        Don’t have any account? <Link to={'/auth/register'} state={location.state} className="text-[#8FA748]">Register</Link>
      </p>

      {/* login with google */}
      <div>
        <p className="text-center mt-3 text-gray-400 font-semibold">Or</p>

        <button onClick={signinWithGoogle} className=" bg-border/50 flex justify-center items-center gap-2.5 py-2.5 rounded-lg text-black/70 border-[#e5e5e5] w-full mt-3 font-semibold cursor-pointer">
         <img src={googleIcon} alt="" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
