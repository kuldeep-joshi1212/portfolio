import "./hero.scss";
import Header from "../header/Header";
import React from "react";
import { animate, motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar.jsx";

const Hero = () => {
  const variants = {
    initial: {
      x: 100,
    },
    animate: {
      x: -100,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 10,
      },
    },
  };
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <div className="hero">
        <div className="text-cnt">
          <h2>Kuldeep Joshi</h2>
          <h1>FullStack Developer</h1>
          <div className="buttons">
            <a href="./assets/resume.pdf" download="resume.pdf">
              <button>Download CV</button>
            </a>
            <a href="mailto:kuldeep.kj.joshi@gmail.com">
              <button>Contact me</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
