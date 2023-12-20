import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeaturedCoursesCard from "../FeaturedCourses/FeaturedCoursesCard";
import axios from "axios";

const Search = () => {
  const [searchText, setSearchText] = useState(null);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // console.log(courses);
  const handleSearch = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/courses/search/${searchText}`)
      .then((data) => {
        setCourses(data.data);
        setSearchText("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="relative">
          <div className="join">
            <input
              className="join-item border-gray-300 focus:border-gray-300 outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Text"
            />
            <button
              className="btn join-item rounded-lg bg-primary border-gray-300 hover:border-gray-300 text-white hover:text-gray-700 font-semibold hover:bg-gray-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
{ (courses?.length> 0) ? <h1 className="title">Search Result</h1> :""
}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {courses?.map((course) => (
          <FeaturedCoursesCard key={course?._id} course={course} />
        ))}
      </div>
    </>
  );
};

export default Search;
