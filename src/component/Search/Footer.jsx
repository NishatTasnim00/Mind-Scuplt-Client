import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary md:h-96 grid  content-center pb-10">
        <section className="w-full max-w-6xl mx-auto text-white space-y-14 md:grid grid-cols-4 gap-7 justify-center p-5">
          <div className="text-center md:text-start pt-10">
            <div className="flex">
              <img
                className="pb-5 h-14 mr-4 md:ml-0"
                src="/public/Images/donut.png"
                alt=""
              ></img>
              <p className="font-poppins">
                Welcome to Mind Sculpt, where learning becomes an art. Unleash
                your potential with high-quality courses designed to sculpt
                brilliant minds. Join us on a journey of intellectual growth!
              </p>
            </div>
          </div>
          <div className="text-center md:text-start">
            <h3 className="text-white font-ebgara font-extrabold text-2xl pb-5">
              Usefull Link
            </h3>
            <ul className="list-none font-poppins space-y-2">
              <li>
                <NavLink to="/" aria-label="Home" title="Home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" aria-label="About Us" title="About">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" aria-label="Blog" title="Blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="space-y-2 text-center md:text-start">
            <h3 className="text-white font-ebgara font-extrabold text-2xl pb-5">
              Contact Now
            </h3>
            <p className="font-poppins">
              55, Banani
              <br />
              Dhaka, Bangladesh
            </p>
            <p className="font-poppins">+88 01750 000 000</p>
            <p className="font-poppins">info@gmail.com</p>
          </div>
          <div className="space-y-2 text-center md:text-start">
            <h3 className="text-white font-ebgara font-extrabold text-2xl pb-5">
              Subscribe
            </h3>
            <p className="font-poppins">
              Subscribe for our latest & Articles. We Won’t Give You Spam Mails
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
