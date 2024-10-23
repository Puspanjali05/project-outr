import { SignF } from "./Forms/SignF";

export const Signup = () => {
  return (
    <div className="w-[100%] h-screen flex bgimg">
      <div className="md:w-[50%] w-[100%] h-full">
        <SignF />
      </div>
      <div className="md:w-[50%] md:h-full hidden"></div>
    </div>
  );
};
