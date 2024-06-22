import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { MdPassword } from "react-icons/md";

function Registerpage() {
  return (
    <main className="relative bg-black min-h-screen">
      <div className="relative animate-pulse">
        <img
          src="blockchain.jpg"
          alt="Blockchain"
          className="w-full h-screen object-cover"
        />
      </div>
      
      {/* LOGO */}
      <h1 className="absolute top-0 lg:left-0 lg:m-4 font-bold text-2xl p-3 text-white">Logo</h1>
      
      {/* BOTTOM/RIGHTSIDE */}
      <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
        <div className="w-full lg:w-1/3 md:w-1/2 h-auto bg-transparent bg-opacity-40 flex flex-col gap-6 rounded-lg text-white p-8">
         <div className=" flex flex-col gap-3 text-center pb-5">
           <h1 className="font-semibold text-2xl ">Hello</h1>
           <p>Register and become a part of an exclusive club.
            Fill in your required details and begin your journey.</p>
         </div>
          <div className="flex flex-col gap-6">
            
            <form className="flex flex-col gap-4 items-center justify-center w-full">
              {/* EMAIL TEXT FIELD */}
              <div className="bg-[#d8dade] w-full p-1 flex flex-row items-center mb-1 rounded-md">
                <div className="text-gray-400 m-2">
                  <BsEnvelope />
                </div>
                <input
                  className="outline-none bg-[#d8dade] text-sm rounded-sm w-full h-8 pl-2"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="bg-[#d8dade] w-full p-1 flex items-center mb-1 rounded-md">
                <div className="text-gray-400 m-2">
                  <MdPassword />
                </div>
                <input
                  className="outline-none bg-[#d8dade] text-sm rounded-sm w-full h-8"
                  type="password"
                  name="password"
                  placeholder="Password"
                ></input>
              </div>
              <a
                href="#"
                className="flex justify-end items-center w-full text-xs"
              >
                Forgot Password?
              </a>
              {/* SIGN IN BUTTON */}
              <div className="flex justify-center items-center w-full">
                <button className="bg-blue-500 px-6 py-2 my-6 rounded-md text-white w-full">
                  Sign In
                </button>
              </div>
              <div className="flex gap-2 items-center w-full pb-4">
                <hr className="flex-grow border-gray-400" />
                <span className="px-2 text-gray-400">Or</span>
                <hr className="flex-grow border-gray-400" />
              </div>
              <div className="flex flex-row gap-10 text-lg justify-center">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <IoLogoTwitter />
              </a>
              <a href="#">
                <FcGoogle />
              </a>
            </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Registerpage;
