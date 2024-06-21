import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { MdPassword } from "react-icons/md";

function Registerpage() {
  return (
    <main className="relative bg-black min-h-screen">
      <div className="relative animate-pulse start-0 end-full">
        <img
          src="blockchain.jpg"
          alt="Blockchain"
          className="w-full h-full object-cover"
        />
      </div>
      {/* BOTTOM/RIGHTSIDE */}
      <div className="absolute top-48  left-0 w-full h-auto bg-black bg-opacity-80 flex flex-col gap-6 rounded-t-[2rem] text-white px-8 pt-12">
        <h1 className="font-bold text-2xl">Logo</h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 text-lg">
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
          <form className="flex flex-col gap-4 items-center justify-center">
            {/* EMAIL TEXT FIELD */}
            <div className="bg-[#d8dade] w-full md:w-64 p-1 flex flex-row items-center mb-1 rounded-md">
              <div className="text-gray-400 m-2">
                <BsEnvelope />
              </div>
              <input
                className="outline-none bg-[#d8dade] text-sm rounded-sm w-[16rem] h-8 pl-2"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-1 rounded-md">
              <div className="text-gray-400 m-2">
                <MdPassword />
              </div>
              <input
                className="outline-none bg-[#d8dade] text-sm rounded-sm w-[16rem] h-8"
                type="password"
                name="password"
                placeholder="Password"
              ></input>
            </div>
            <a
              href="#"
              className="flex justify-end md:ml-24 items-center w-full md:w-64 text-xs"
            >
              Forgot Password?
            </a>
            {/* SIGN IN BUTTON */}
            <div className="flex justify-center items-center">
              <button className="bg-blue-500 px-6 py-2 my-6 rounded-md text-white">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Registerpage;
