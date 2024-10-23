import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoArrowRedoSharp } from "react-icons/io5";

export const Landing = () => {
  const [isdark, setisdark] = useState(false);
  useEffect(() => {
    const body = document.querySelector(".body");
    const links = document.querySelectorAll(".links");

    if (isdark) {
      body.classList.add("dark");

      links.forEach((link) => link.classList.add("dark-mode"));
    } else {
      body.classList.remove("dark");

      links.forEach((link) => link.classList.remove("dark-mode"));
    }
  }, [isdark]);
  return (
    <div className="w-full body h-screen bg-center bg-cover bg-no-repeat flex flex-col bg-[url('/land-l.png')]">
      {/* Navbar */}
      <div className="w-full h-20 flex ">
        <div className="w-[50%] h-full   flex gap-9 font-bold justify-start pl-9 items-center">
          <Link className="links hover:border-b-2 hover:border-b-black">
            Members
          </Link>
          <Link className="links hover:border-b-2 hover:border-b-black">
            Community
          </Link>
          <Link className="links hover:border-b-2 hover:border-b-black">
            Alumini
          </Link>
          <Link className="links hover:border-b-2 hover:border-b-black">
            Browse
          </Link>
          <Link className="links hover:border-b-2 hover:border-b-black">
            About us
          </Link>
        </div>
        <div className="w-[50%] h-full dm flex justify-end items-center pr-9 gap-3">
          <button onClick={() => setisdark(!isdark)}>
            {isdark ? (
              <MdDarkMode className="w-9 h-7 text-white" />
            ) : (
              <MdLightMode className="w-9 h-7" />
            )}
          </button>
          <Link
            to="/login"
            className={`w-20 h-9 ${
              isdark ? "text-white border-white" : "border-black"
            } flex items-center justify-center hover:bg-black hover:text-white text-center font-bold border-2 rounded-full `}
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className={`w-20 h-9 flex  ${
              isdark
                ? "text-black bg-white"
                : "border-black bg-black text-white"
            } items-center justify-center text-center font-bold border-2 rounded-full `}
          >
            Sign up
          </Link>
        </div>
      </div>
      {/* Main */}
      <div className="w-full h-full flex    items-center">
        <div className="w-[50%] h-full flex items-start flex-col gap-9  pl-9">
          <img src="/logo.png" alt="logo" className="w-20 h-20" />
          <h1
            className={`font-bold text-6xl ${
              isdark ? "text-white" : "text-black"
            } uppercase pr-96 leading-tight`}
          >
            Get Your
            <h2 className="flex justify-center items-baseline gap-3">
              <p className="text-8xl">OUTR</p> Life
            </h2>
            Sorted !
          </h1>
          <p
            className={`font-bold mt-5 capitalize pr-64 ${
              isdark ? "text-white" : "text-black"
            }`}
          >
            Fulfilling all the external requirements for you enhancing college
            life productivity .
          </p>
          <Link
            to="/signup"
            className={` hover:ml-3  gap-3 hover:scale-110 w-56 mt-5 text-center justify-center h-9 rounded-r-full  flex  items-center ${
              isdark ? "bg-white text-black" : "bg-black text-white"
            } `}
          >
            Get Registered NOW!
            <IoArrowRedoSharp className="w-6 h-6" />
          </Link>
        </div>
        <div className={`w-[50%] h-full flex justify-center items-center `}>
          <img
            src={isdark ? "/cl-l.png" : "cl-d.png"}
            alt="right"
            className="w-[85%] h-[85%]"
          />
        </div>
      </div>
    </div>
  );
};
