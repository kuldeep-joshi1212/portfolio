import "./hero.scss";
import Header from "../header/Header";
import React, {useEffect, useRef} from "react";
import { animate, motion } from "framer-motion";
import {init} from "ityped";

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { backDelay: 1000 ,showCursor: true, strings: ['Competitive Programming', 'Web Development', 'Mobile Development']});
  }, [])
  return (
    <>
      <Header />
      <div className="hero">
        <div className="text-cnt">
          <h2>Kuldeep Joshi</h2>
          <span className="sub-head">Enthusiastic about <span className="list-skill" ref={textRef}></span></span>
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
