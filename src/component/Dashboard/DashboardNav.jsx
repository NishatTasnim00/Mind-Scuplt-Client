import React, { useContext } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsers } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useGetUser from "../../hook/useGetUser";

const DashboardNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const { role } = useGetUser();
  console.log(role);

  const handleLogOut = () => {
    logOut();
  };
  const studentItem = (
    <NavLink
      to="/dashboard/enrolledCourses"
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <p
        className="tooltip tooltip-right flex gap-2 tooltip-info"
        data-tip="Enrolled Courses"
      >
        <SiGoogleclassroom size={30} color="" />{" "}
        <span className="hidden lg:block">Enrolled Courses</span>
      </p>
    </NavLink>
  );
  const adminItem = (
    <NavLink
      to="/dashboard/users"
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <p
        className="tooltip tooltip-right flex gap-2 tooltip-info"
        data-tip="Users"
      >
        <FaUsers size={30} color="" />{" "}
        <span className="hidden lg:block">Users</span>
      </p>
    </NavLink>
  );

  return (
    <div className="p-5 lg:p-10">
      <div className="w-full space-y-3">
        <a href="/" className={`lg:text-3xl font-bold text-primary mx-auto`}>
          Mind Sculpt
        </a>

        <figure className="h-14 w-14 lg:h-20 lg:w-20 rounded-full mx-auto">
          <img
            className="h-full w-full rounded-full object-cover"
            src={user?.photoURL}
            alt=""
          />
        </figure>
        <h1 className="text-center text-primary font-semibold capitalize lg:text-xl">
          {user?.displayName}
        </h1>
        <h1 className="text-center  font-semibold capitalize">{role}</h1>
      </div>
      <div className="pt-10 text-lg h-[calc(100vh-340px)]">
        {role === "student" ? (
          <div>{studentItem}</div>
        ) : role === "admin" ? (
          <div>{adminItem}</div>
        ) : ""
        }
      </div>
      <div className="hidden lg:block">
        {" "}
        <Link
          to="/"
          className="btn submit-btn bg-gray-400  text-neutral hover:text-gray-700"
          onClick={handleLogOut}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default DashboardNav;
