import { useEffect } from "react";
import { LoginF } from "./Forms/Login";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(`/home/${localStorage.getItem("uid")}`);
    }
  });
  return (
    <div className="w-[100%] h-screen flex bgimg">
      <div className="w-[50%] h-full">
        <LoginF />
      </div>
      <div className="w-[50%] h-full"></div>
    </div>
  );
};
