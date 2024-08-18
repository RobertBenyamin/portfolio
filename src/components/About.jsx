import React from "react";
import profile from "../images/profile.png";

const About = () => {
  return (
    <section id="about" className="text-white py-8 px-4 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center">
        <div className="flex flex-col mb-8 md:mb-0 md:w-1/2">
          <p className="text-lg md:text-xl">Hi, my name is</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Robert Benyamin
          </h2>
          <p className="text-3xl md:text-5xl mb-4 md:mb-6">
            Turning Ideas <br className="hidden md:block" /> into Engaging{" "}
            <br className="hidden md:block" /> Software Experiences
          </p>
          <p className="text-lg md:text-xl mb-4 md:mb-6">
            Passionate Web and Mobile Developer
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
            <a
              href="#projects"
              className="bg-yellow-500 hover:bg-orange-400 font-semibold text-black text-center px-6 py-3 text-lg rounded-lg"
            >
              Checkout My Work!
            </a>
            <a
              href="https://drive.google.com/file/d/1-Bl4iL-WQLjEwriCJG3_-Utz_ERwpFSS/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hover:bg-gray-700 text-white font-semibold text-center px-6 py-3 text-lg rounded-lg"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2">
          <img
            src={profile}
            alt="profile"
            className="w-4/6 lg:w-128 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
