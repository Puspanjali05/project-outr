import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "./LandingComponents/Nav";

export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      navigate(`/home/${localStorage.getItem("uid")}`);
    }
  }, [navigate]);
  return (
    <div className="w-full h-screen flex flex-col gap-1">
      <div className="w-full h-16 bg-slate-100 shadow-lg">
        <Nav />
      </div>
      <div className="w-full h-full flex  items-center"></div>
    </div>
  );
};
