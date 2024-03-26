

import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 relative"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-20 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full md:w-1/2 pr-4 pl-16">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React, Tailwind, Redux, Node.js, Express.js, and MongoDB.
          </p>

          <div>
            <Link
              to="portfolio" // Make sure this matches the id of the Portfolio section
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 pl-4">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

