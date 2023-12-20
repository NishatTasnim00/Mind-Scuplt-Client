import React, { useContext } from "react";
import { FaRegClock } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import useGetUser from "../../hook/useGetUser";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const FeaturedCoursesCard = ({ course }) => {
  const { userData } = useGetUser();
  const role = userData?.role;
  // console.log(userData?.role);
  const { user } = useContext(AuthContext);
  const {
    _id,
    courseName,
    instructor,
    fees,
    duration,
    image,
    enrolledStudent,
  } = course;
  const timeDuration = duration.split(".");
  // console.log(course);

  const handleEnroll = async (id) => {
    await axios
      .patch(
        `${import.meta.env.VITE_API_URL}/enroll?email=${
          user?.email
        }&courseId=${id}`
      )
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          toast.success("Enrolled successfully");
        } else {
          toast.error(result?.data?.message);
        }
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto bg-white rounded-lg mb-5 text-gray-600 font-semibold">
      <figure className="w-80 h-72 rounded-lg relative overflow-hidden">
        <img
          className="w-full h-full rounded-lg object-cover hover:scale-105 duration-300 ease-in-out
            "
          src={image}
          alt=""
        />
        {role === "admin" ? (
          <Link to={`/course/${_id}`}>
            <button onClick={()=>handleDetails(_id)} className="absolute bottom-3 left-5 text-orange-600 hover:underline font-light">
              <span className="text-xl font-extrabold">
                {enrolledStudent?.length ? enrolledStudent?.length : 0}
              </span>{" "}
              Students
            </button>
          </Link>
        ) : (
          <button
            onClick={() => handleEnroll(_id)}
            className="btn-sm enroll-btn absolute bottom-3 right-5 "  disabled={role !== "student"}
          >
            Enroll
          </button>
        )}
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
    </div>
  );
};

export default FeaturedCoursesCard;
