import React from "react";

const Banner = () => {
  return (
    <div className="min-h-[300px] flex flex-col-reverse lg:flex-row lg:justify-between lg:mt-20 text-gray-700">
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left px-5">
        <h1 className=" capitalize text-3xl lg:text-7xl font-black ">
          GROW YOUR
          <br /> <span className="text-primary">SKILL,</span> DEFINE <br />
          YOUR <span className="text-primary">FUTURE</span>
        </h1>
        <p className="font-semibold">
          Works with universities and other organizations to offer online
          courses,<br /> certifications, and degrees in a variety of subjects.
        </p>
        {/* <Search /> */}
      </div>
      <div>
        <figure className="lg:w-[500px] rounded-lg">
          <img
            className="w-full h-full rounded-lg"
            src="https://ici.net.au/blog/wp-content/uploads/2022/01/Study-Tips.jpg"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
