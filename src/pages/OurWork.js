import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import animation
import { motion } from "framer-motion";
import {
  fadeAnimation,
  imgAnimation,
  pageAnimation,
  lineAnimation,
  sliderAnimation,
} from "../animation";
//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <div>
      <StyledWork
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <StyledFrame1 variants={sliderAnimation}></StyledFrame1>
        <StyledFrame2 variants={sliderAnimation}></StyledFrame2>
        <StyledFrame3 variants={sliderAnimation}></StyledFrame3>
        <StyledFrame4 variants={sliderAnimation}></StyledFrame4>
        <StyledMovie>
          <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Link>
            <StyledHide>
              <motion.img
                variants={imgAnimation}
                src={athlete}
                alt="A boxer staring into the distance"
              />
            </StyledHide>
          </Link>
        </StyledMovie>
        <StyledMovie>
          <motion.h2 variants={fadeAnimation}>The Racer</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Link>
            <StyledHide>
              <motion.img
                variants={imgAnimation}
                src={theracer}
                alt="A woman sitting on a car"
              />
            </StyledHide>
          </Link>
        </StyledMovie>
        <StyledMovie>
          <motion.h2 variants={fadeAnimation}>Good Times</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Link>
            <StyledHide>
              <motion.img
                variants={imgAnimation}
                src={goodtimes}
                alt="A couple hugging under a tree"
              />
            </StyledHide>
          </Link>
        </StyledMovie>
      </StyledWork>
    </div>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyledHide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;

const StyledFrame3 = styled(StyledFrame1)`
  background: #9ed2ff;
`;
const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;
export default OurWork;
