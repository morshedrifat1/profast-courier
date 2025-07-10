import React, { useState } from "react";
import { GoLock, GoMail } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { IoCloudUploadOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import googleIcon from "../../assets/images/google.png";
import { useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../context/authcontext/AuthContext";
import Toast from "../../components/Toast";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const [seePasswor, setSeepassword] = useState(false);
  const { userSignUp, googleSignin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    userSignUp(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: data.name });
        Toast({ type: "success", message: "Sign Up successful" });
        navigate(location.state ? `${location.state}` : "/");
        reset();
      })
      .catch((error) => {
        Toast({ type: "error", message: error.message });
      });
  };
  const signinWithGoogle = () => {
    googleSignin()
      .then(() => {
        Toast({ type: "success", message: "Sign in successful" });
        navigate(location.state ? `${location.state}` : "/");
      })
      .catch((error) => {
        Toast({ type: "error", message: error.message });
      });
  };
  return (
    <div className="max-w-95 bg-white mx-auto">
      <h1 className="text-4xl font-extrabold text-black">Create an Account</h1>
      <p className="text-black text-lg font-medium mt-2">
        Register with Profast
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <div className="relative">
          <FaUser
            size={50}
            className="text-border bg-[#F5F5F5] p-2.5 rounded-full"
          />
          <IoCloudUploadOutline
            size={20}
            className="text-primary bg-[#F5F5F5] p-0.5 rounded-full absolute top-6 left-5"
          />
        </div>
        <label className="text-inputText text-base font-medium block mt-4">
          Name
        </label>
        <div className="relative mt-1.5">
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
            className="pl-10 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline mt-1 placeholder:text-border"
          />
          <BiUser
            size={17}
            className="absolute top-1/2 -translate-y-1/3 left-3 text-borderOutline "
          />
        </div>
        {/* error message for name */}
        {errors.name?.type === "required" && (
          <p className="text-red-700 mt-1.5">Enter Your Name *</p>
        )}
        <label className="mt-3 block text-inputText text-base font-medium">
          Email
        </label>
        <div className="relative mt-1.5">
          <input
            type="email"
            {...register("email", { required: true })}
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
            {...register("password", {
              required: "Use a strong password",
              validate: {
                hasUpper: (value) =>
                  /[A-Z]/.test(value) ||
                  "Password must include at least one uppercase letter (A–Z)",
                hasLower: (value) =>
                  /[a-z]/.test(value) ||
                  "Password must include at least one lowercase letter (a–z)",
                hasNumber: (value) =>
                  /[0-9]/.test(value) ||
                  "Password must include at least one number (0–9)",
                hasSpecial: (value) =>
                  /[!@#$%^&*]/.test(value) ||
                  "Password must include at least one special character (!@#$%^&*)",
                minLength: (value) =>
                  value.length >= 8 ||
                  "Password must be at least 8 characters long",
              },
            })}
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
        {errors.password && (
          <p className="text-red-700 mt-1.5">{errors.password.message}</p>
        )}
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
        Already have an account?{" "}
        <Link to={"/auth/login"} className="text-[#8FA748]">
          Login
        </Link>
      </p>

      {/* login with google */}
      <div>
        <p className="text-center mt-3 text-gray-400 font-semibold">Or</p>

        <button
          onClick={signinWithGoogle}
          className=" bg-border/50 flex justify-center items-center gap-2.5 py-2.5 rounded-lg text-black/70 border-[#e5e5e5] w-full mt-3 font-semibold cursor-pointer"
        >
          <img src={googleIcon} alt="" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
