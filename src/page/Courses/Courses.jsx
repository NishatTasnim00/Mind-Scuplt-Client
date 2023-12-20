import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedCoursesCard from "../../component/FeaturedCourses/FeaturedCoursesCard";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";

const Courses = () => {
  const [course, enrolledStudents] = useLoaderData();
  // console.log(course);
  // console.log(enrolledStudents);
  const { _id, courseName, instructor, fees, duration, image } = course;
  const timeDuration = duration.split(".");

  return (
    <div className="flex justify-center my-20 px-5">
      <div className="mx-auto bg-white rounded-lg mb-5 text-gray-600 font-semibold">
        <figure className="lg:w-[600px]  rounded-lg relative overflow-hidden">
          <img
            className="w-full h-full rounded-lg object-cover hover:scale-105 duration-300 ease-in-out
            "
            src={image}
            alt=""
          />
        </figure>
        <div className="lg:py-5">
          <h1>{courseName}</h1>
          <div className="flex">
            <FaRegClock className="mt-1 mr-1" size={18} />
            <span>
              {timeDuration[0]}h {timeDuration[1]}m
            </span>
          </div>
        </div>
        <div>
          <h1 className="text-primary text-xl">Student List</h1>
          {enrolledStudents &&
            enrolledStudents?.map((student) => (
              <>
                <div className="flex items-center gap-5 border-b-2 border-primary py-2" key={student._id}>
                  <figure className="w-20 h-20">
                    <img className="w-full h-full object-cover rounded-2xl" src={student?.photo} alt="" />
                  </figure>
                  <div>
                  <h1>{student?.name}</h1>
                  <h1>{student?.email}</h1>
                  </div>
                </div>
              
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
