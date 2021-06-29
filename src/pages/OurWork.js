import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
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
        <StyledMovie>
          <h2>The Athlete</h2>
          <div className="line"></div>
          <Link>
            <img src={athlete} alt="A boxer staring into the distance" />
          </Link>
        </StyledMovie>
        <StyledMovie>
          <h2>The Racer</h2>
          <div className="line"></div>
          <Link>
            <img src={theracer} alt="A woman sitting on a car" />
          </Link>
        </StyledMovie>
        <StyledMovie>
          <h2>Good Times</h2>
          <div className="line"></div>
          <Link>
            <img src={goodtimes} alt="A couple hugging under a tree" />
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
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
