import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export const SignF = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [regno, setRegno] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [eye, setEye] = useState("password");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
    if (token && uid) {
      navigate(`/home/${uid}`);
    }
  }, [navigate]);
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.error("Password does not match");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:3000/api/create", {
        uname: name,
        email,
        regno,
        password,
      });

      toast.success(data.message);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error("Something went wrong", error);
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <Toaster />
      <div className="w-full h-14  items-center flex justify-between">
        <Link></Link>
        <Link
          to="/login"
          className="sign-up-btn rounded-full hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-full hover:rounded-br-full bg-yellow-500 w-28 h-10 flex justify-center items-center uppercase text-black font-bold"
        >
          SIGN in
        </Link>
      </div>
      <form
        onSubmit={handleSignup}
        className="w-[60%] h-[40vw] glass-bg  flex flex-col gap-5 justify-center items-center"
      >
        <div
          className="
            w-full h-14 flex items-center justify-center text-4xl font-bold text-slate-900"
        >
          Welcome Newbie !!
        </div>
        <input
          type="text"
          className="w-[80%] h-10 border-b-2 focus:outline-none  border-b-black placeholder-black text-center rounded-tl-full rounded-r-full "
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[80%] h-10 border-b-2 focus:outline-none  border-b-black placeholder-black text-center rounded-tl-full rounded-r-full "
        />
        <input
          className="w-[80%] h-10 border-b-2 focus:outline-none  border-b-black placeholder-black text-center rounded-tl-full rounded-r-full "
          type="number"
          placeholder="Registration Number"
          value={regno}
          onChange={(e) => setRegno(e.target.value)}
        />
        <div className="w-[80%] flex h-auto border-b-2 text-center rounded-tl-full rounded-r-full ">
          <input
            className="w-full h-10 focus:outline-none border-b-black  placeholder-black border-b-2 text-center rounded-tl-3xl  "
            type={eye}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            className=" border-b-2 border-b-black  w-9 rounded-r-full"
          >
            <FaEyeSlash className="w-6 ec" />
            <FaEye className="w-6 hidden eo" />
          </button>
        </div>
        <div className="w-[80%] flex h-auto border-b-2 text-center rounded-tl-full rounded-r-full ">
          <input
            className="w-full h-10 focus:outline-none border-b-black  placeholder-black border-b-2 text-center rounded-tl-3xl  "
            type={eye}
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(".eoc").classList.toggle("hidden");
              document.querySelector(".ecc").classList.toggle("hidden");
              if (eye === "password") {
                setEye("text");
              } else {
                setEye("password");
              }
            }}
            className=" border-b-2 border-b-black  w-9 rounded-r-full"
          >
            <FaEyeSlash className="w-6 ecc" />
            <FaEye className="w-6 hidden eoc" />
          </button>
        </div>
        <button
          type="submit"
          className="w-24 h-10 rounded-tl-full rounded-r-full hover:bg-blue-700 hover:text-white  text-center  flex justify-center items-center  uppercase text-black bg-cyan-300  font-bold "
        >
          Sign up
        </button>
        <div className="w-full h-14 flex items-center justify-center">
          <Link className="text-white">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};
