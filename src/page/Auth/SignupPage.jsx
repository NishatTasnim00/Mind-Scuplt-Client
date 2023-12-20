import React from "react";
import Signup from "../../component/Signup";
import { Link } from "react-router-dom";
const SignupPage = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-white to-[#5fc5c8] min-h-screen ">
      <div className="min-h-[calc(100vh-200px)] bg-[#B1D8DA] w-10/12 rounded-xl border-white border-2 flex">
        <div className="lg:w-5/12 min-h-[calc(100vh-200px)]">
          <Link
            to="/"
            className="px-8 py-3 w-48 -mt-2 -ml-2 font-semibold rounded bg-primary text-white hidden lg:block"
          >
            Back to Home
          </Link>
        </div>
        <div className="w-full lg:w-7/12 min-h-[calc(100vh-200px)] bg-white border-2 border-[#B1D8DA] rounded-r-xl rounded-l-3xl">
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
