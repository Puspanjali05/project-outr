import { MdOutlinePersonSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useGetData } from "../../Hooks/getData";

export const Nav = () => {
  const res = useGetData("http://localhost:3000/api/profile");

  return (
    <div className="w-full h-16 border-b-2 flex">
      <Toaster />
      <div className="w-[40%] h-full bg-white flex justify-center items-center">
        <input
          type="search"
          className=" bg-gray-300 focus:outline-none w-1/2 h-10 px-5 placeholder-black"
          placeholder="Search"
        />
        <button className="bg-gray-300 h-10 rounded-r-full pr-3  w-10 flex items-center justify-center">
          <MdOutlinePersonSearch className="w-6 h-6  " />
        </button>
      </div>
      <div className="w-[60%] h-full bg-white flex gap-3 items-center justify-center">
        <Link className="w-12 h-12 bg-gray-400 rounded-full"></Link>
        <Link className="w-12 h-12 bg-gray-400 rounded-full"></Link>
        <Link className="w-12 h-12 bg-gray-400 rounded-full"></Link>
        <Link className="w-12 h-12 bg-gray-400 rounded-full"></Link>
        <Link to="/profile" className="w-12 h-12 bg-gray-400 rounded-full">
          P
        </Link>
      </div>
    </div>
  );
};
