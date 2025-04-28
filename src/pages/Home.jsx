import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-end min-h-screen bg-white px-6 pb-10">
      <div className="text-center w-full">
        <h1 className="text-2xl font-bold text-black mb-2">Welcome to PopX</h1>
        <p className="text-sm text-gray-400 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <Link to="/signup">
          <button className="w-full bg-[#7B61FF] text-white font-semibold py-3 rounded-lg mb-3">
            Create Account
          </button>
        </Link>
        <Link to="/login">
          <button className="w-full bg-[#E5D8FF] text-[#7B61FF] font-semibold py-3 rounded-lg">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
