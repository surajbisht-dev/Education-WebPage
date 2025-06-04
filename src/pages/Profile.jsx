import React from "react";
import { useNavigate } from "react-router-dom";
import { CameraIcon } from "@heroicons/react/24/solid"; // <-- importing Camera Icon

export default function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); 
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 pt-10 px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md">

        <div className="border-b p-4">
          <h2 className="text-gray-700 text-sm font-semibold font-poppins">
            Account Settings
          </h2>
        </div>

  
        <div className="p-6">
          <div className="flex items-center relative">
          
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
    
              <div className="absolute bottom-0 right-0 bg-[#8F00FF] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                <CameraIcon className="w-3 h-3 text-white" />
              </div>
            </div>

       
            <div className="ml-4">
              <h3 className="text-gray-900 font-bold text-base font-poppins">
                Marry Doe
              </h3>
              <p className="text-gray-500 text-xs mt-1 font-poppins">
                Marry@gmail.com
              </p>
            </div>
          </div>

         
          <div className="mt-4 border-b border-dashed pb-4">
            <p className="text-xs text-gray-600 leading-5 font-poppins">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>

      
          <button
            onClick={handleLogout}
            className="mt-8 w-full bg-[#a11523] hover:bg-[#6a0202] text-white font-bold py-2 rounded-md text-sm font-poppins"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
