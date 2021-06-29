import React from "react";
import home1 from "../img/home1.png";
import {
  StyledGeneralLayout as StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";
//Animations
import { motion } from "framer-motion";
import { tittleAnimation, fadeAnimation, imgAnimation } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <motion.h2 variants={tittleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={tittleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={tittleAnimation}>true.</motion.h2>
          </StyledHide>
          <motion.p variants={fadeAnimation}>
            Contact us for any photography or videography ideas that you have.
            We are a group of amazing professionals
          </motion.p>
          <motion.button variants={fadeAnimation}>Contact Us</motion.button>
        </div>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={imgAnimation}
          src={home1}
          alt="Employee with a camera"
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
