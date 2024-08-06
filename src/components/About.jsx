import React from "react";
import profile from "../profile.png";

const About = () => {
  return (
    <section id="about" className="text-white py-20 px-16">
      <div className="flex flex-row flex-wrap justify-between">
        <div className="flex flex-col">
          <p className="text-xl">Hi, my names is</p>
          <h2 className="text-6xl font-bold mb-6">Robert Benyamin</h2>
          <p className="text-5xl mb-6">
            Turning Ideas <br /> into Engaging <br /> Software Experiences
          </p>
          <p className="text-xl mb-6">Passionate Web and Mobile Developer</p>
          <div className="flex flex-row space-x-2">
            <a
              href="#projects"
              className="bg-yellow-500 hover:bg-orange-400 font-semibold text-black px-6 py-3 text-lg rounded-lg"
            >
              Checkout My Work!
            </a>
            <a
              href="https://drive.google.com/file/d/1-Bl4iL-WQLjEwriCJG3_-Utz_ERwpFSS/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hover:bg-gray-700 text-white font-semibold px-6 py-3 text-lg rounded-lg"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
