import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import MyCoursesCard from "./MyCoursesCard";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/myCourses/${user?.email}`)
      .then((data) => setCourses(data?.data));
  }, []);
  // console.log(courses);
  return (
    <>
      <h1 className="title my-10">Enrolled Courses</h1>
      <div className="grid lg:grid-cols-3 gap-10">
        {courses?.map((course) => (
          <MyCoursesCard key={course._id} course={course} />
        ))}
      </div>
    </>
  );
};

export default MyCourses;
