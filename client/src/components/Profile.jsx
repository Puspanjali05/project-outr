import { useState, useEffect } from "react";
import { useGetData } from "../Hooks/getData";
import toast, { Toaster } from "react-hot-toast";
import { Nav } from "./LandingComponents/Nav";

export const Profile = () => {
  const { data, loading, error } = useGetData(
    "http://localhost:3000/api/profile"
  );
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (loading) {
      toast.loading("Loading...");
    } else if (error) {
      toast.error("Error fetching data");
    } else if (data) {
      setProfileData(data.data);
      console.log(data.data);
    }
  }, [loading, error, data]);

  if (loading) {
    toast.loading("Loading...");
  }

  if (error) {
    toast.error("Error fetching data");
  }

  if (!profileData) {
    return null;
  }

  return (
    <>
      <Toaster />

      <div className="w-full fixed top-0">
        <Nav />
      </div>
      <div className="flex flex-col py-20 max-w-4xl mx-auto p-4">
        {/* Header Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center">
            <img
              src={profileData.photo || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-2 border-gray-300"
            />
            <div className="ml-6">
              <h1 className="text-2xl font-bold">
                {profileData.uname || "John Doe"}
              </h1>
              <p className="text-gray-500">
                {profileData.role || "Software Engineer at Company XYZ"}
              </p>
              <p className="text-gray-400">
                {profileData.Address || "San Francisco, CA"}
              </p>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p>
            {profileData.bio ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc ultricies ultricies. Nullam nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec nunc ultricies ultricies."}
          </p>
        </div>

        {/* Experience Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="font-bold">Software Engineer</h3>
            <p className="text-gray-500">Company XYZ | Jan 2020 - Present</p>
            <p>
              Developed and maintained web applications, collaborated with
              cross-functional teams, and improved application performance by
              30%.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Junior Developer</h3>
            <p className="text-gray-500">Company ABC | Jan 2018 - Dec 2019</p>
            <p>
              Assisted in the development of web applications and contributed to
              the codebase, improving overall efficiency.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          {profileData.education.map((edu, index) => {
            return (
              <div key={index} className="mb-4">
                <h3 className="font-bold">{edu.degree}</h3>
                <p className="text-gray-500">
                  {edu.school} | {edu.start}
                </p>
                <p>{edu.description}</p>
              </div>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap">
            {profileData.skills.map((skill, index) => {
              return (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 font-semibold text-sm px-2 py-1 rounded-full mr-2 mb-2"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
