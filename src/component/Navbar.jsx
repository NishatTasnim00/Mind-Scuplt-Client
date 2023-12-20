import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = () => {
    logOut();
  };
  const navItem = (
    <>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>

     

      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
      )}

<NavLink
        to="/instructors"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>

      <NavLink
        to="/courses"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div
      className={`navbar px-3 lg:px-28 py-4  z-10 bg-primary font-bold text-xl text-white`}
    >
      <div className="navbar-start">
        <div className="dropdown rounded-none ">
          <label
            tabIndex={0}
            className="btn  lg:hidden bg-[#B1D8DA]"
            onClick={handleToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-primary rounded-lg w-52"
            >
              {navItem}
              <li>
                {user ? (
                  <>
                    <Link
                      className="btn-sm bg-gray-400 text-neutral"
                      onClick={handleLogOut}
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <Link to="/login" className="btn-sm bg-gray-400 text-neutral">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          )}
        </div>

        <div className="hidden lg:block">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          >
            {/* <img className="h-10 -mt-2" src={camera} alt="" /> */}
          </motion.div>
        </div>

        <a href="/" className={`text-xl font-medium`}>
          Mind Sculpt
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1">{navItem}</ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <>
            <div>
              <figure className="w-12 h-12 rounded-full bg-black overflow-hidden">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={user?.photoURL}
                />
              </figure>
            </div>
            <Link
              className="btn bg-gray-400 text-neutral hidden lg:flex"
              onClick={handleLogOut}
            >
              Logout
            </Link>
          </>
        ) : (
          <Link
            to="/login"
            className="btn bg-gray-400 text-neutral hidden lg:flex px-5"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
