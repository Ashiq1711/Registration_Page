import React, { useState } from "react";
import background from "./../../src/assets/Regestration/images/background.png";
import regImg from "./../../src/assets/Regestration/images/reg.img.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Regestration = () => {

  const [currentState, setCurrentState] = useState("Signup");
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-[1472px] h-[732px]  border-4 shadow-right-bottom">
        <div className="flex h-full">
          <div className="hidden sm:block w-1/2 sm:flex items-center justify-center">
            <img src={regImg} alt="" />
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <form className="flex flex-col w-[90%] sm:max-w-96 m-auto mt-14 gap-4">
              <div className=" text-center">
                <p className=" text-3xl font-bold">{currentState}</p>
              </div>
              {currentState === "Login" ? (
                ""
              ) : (
                <div>
                  <p className=" text-sm font-medium text-gray-700">Name</p>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-800 rounded-[8px]"
                    placeholder="Name"
                    required
                  />
                </div>
              )}
              <div>
                <p className="  text-sm font-medium text-gray-700">Email</p>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-800 rounded-[8px]"
                  placeholder="Type here"
                  required
                />
              </div>
              <div>
                <p className=" text-sm font-medium text-gray-700">Password</p>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-800 rounded-[8px]"
                  placeholder="Type here"
                  required
                />
              </div>

              <Link className=" cursor-pointer">Forgot your password</Link>

              <button className="bg-[#D1A054] text-white font-light rounded-lg  py-3">
                {currentState === "Login" ? "Login" : "Sign Up"}
              </button>
              <div className="w-full text-center text-[#D1A054] text-sm mt-[8px]">
                {currentState === "Login" ? (
                  <p
                    className="cursor-pointer"
                    onClick={() => setCurrentState("Sign Up")}
                  >
                    New here? Create a New Account
                  </p>
                ) : (
                  <p
                    className="cursor-pointer"
                    onClick={() => setCurrentState("Login")}
                  >
                    Already registered? Go to log in
                  </p>
                )}
              </div>
              <div className="text-center">
                <p>or sign up with</p>
                <div className="flex items-center gap-7 justify-center mt-5">
                  <Link className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full text-black">
                    <FaFacebookF className="h-6 w-6" />
                  </Link>
                  <Link className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full text-black">
                    <FaGoogle className="h-6 w-6" />
                  </Link>
                  <Link className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full text-black">
                    <FaGithub className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regestration;
