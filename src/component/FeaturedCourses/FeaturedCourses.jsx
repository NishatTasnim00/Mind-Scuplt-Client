import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedCoursesCard from "./FeaturedCoursesCard";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  // console.log(courses);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/courses`)
      .then((data) => setCourses(data?.data));
  }, []);
  return (
    <>
      <h1 className="title">Featured Courses</h1>
      <div className="grid lg:grid-cols-3">
        {courses?.map((course) => (
          <FeaturedCoursesCard key={course._id} course={course} />
        ))}
      </div>
    </>
  );
};

export default FeaturedCourses;
