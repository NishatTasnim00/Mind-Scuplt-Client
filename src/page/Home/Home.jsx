import React from "react";
import FeaturedCourses from "../../component/FeaturedCourses/FeaturedCourses";
import Reviews from "../../component/Reviews/Reviews";
import Navbar from "../../component/Navbar";
import Banner from "./Banner/Banner";
import Search from "../../component/Search/Search";

const Home = () => {
  return (
  
      <div className="px-5 lg:w-10/12 mx-auto space-y-20">
      <Banner/>
      <Search/>
      <FeaturedCourses />
      <Reviews />
      </div>
   
  );
};

export default Home;
