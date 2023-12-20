import React from 'react'
import { FaRegClock } from "react-icons/fa";


const MyCoursesCard = ({ course }) => {
  const { _id, courseName, instructor, fees, duration, image } = course;
  const timeDuration = duration.split(".");
  return (
    <div className="mx-auto bg-white rounded-lg  lg:p-5 ">
      <figure className="w-60 h-48 lg:w-72 lg:h-64 rounded-lg relative">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={image}
          alt=""
        />
      </figure>
      <div className='pt-3'>
        <h1>{courseName}</h1>
        <div className="flex">
          <FaRegClock className="mt-1 mr-1" size={18} />
          <span>
            {timeDuration[0]}h {timeDuration[1]}m
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesCard;
