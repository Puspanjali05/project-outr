import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const LoginF = () => {
  const [eye, setEye] = useState("password");
  const [data, setData] = useState({
    regNo: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/api/login", {
      regno: data.regNo,
      password: data.password,
    });
    try {
      toast.success("Login Successfull");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("uid", res.data.uid);
      setTimeout(() => {
        navigate(`/home/${res.data.uid}`);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <Toaster />
      <div className="w-full h-14  items-center flex justify-between">
        <Link></Link>
        <Link
          to="/signup"
          className="sign-up-btn rounded-tl-full rounded-br-full bg-yellow-600 w-28 h-10 flex justify-center items-center uppercase text-black font-bold"
        >
          SIGN UP
        </Link>
      </div>
      <form
        onSubmit={handleLogin}
        className="w-[60%] h-96 glass-bg  flex flex-col gap-5 justify-center items-center"
      >
        <div
          className="
            w-full h-14 flex items-center justify-center text-4xl font-bold text-slate-900"
        >
          Welcome Back !!
        </div>
        <input
          className="w-[80%] h-10 border-b-2 focus:outline-none  border-b-black placeholder-black text-center rounded-tl-full rounded-r-full bg-gray-300"
          type="number"
          placeholder="Registration Number"
          value={data.regNo}
          onChange={(e) => setData({ ...data, regNo: e.target.value })}
        />
        <div className="w-[80%] flex h-auto border-b-2 text-center rounded-tl-full rounded-r-full ">
          <input
            className="w-full h-10 focus:outline-none border-b-black  placeholder-black border-b-2 text-center rounded-tl-3xl  bg-gray-300"
            type={eye}
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(".eo").classList.toggle("hidden");
              document.querySelector(".ec").classList.toggle("hidden");
              if (eye === "password") {
                setEye("text");
              } else {
                setEye("password");
              }
            }}
            className="bg-gray-300 border-b-2 border-b-black  w-9 rounded-r-full"
          >
            <FaEyeSlash className="w-6 ec" />
            <FaEye className="w-6 hidden eo" />
          </button>
        </div>
        <button
          type="submit"
          className="w-24 h-10 rounded-tl-full rounded-r-full hover:bg-blue-700 hover:text-white  text-center  flex justify-center items-center  uppercase text-black bg-cyan-300  font-bold "
        >
          Login
        </button>
        <div className="w-full h-14 flex items-center justify-center">
          <Link className="text-white">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};
