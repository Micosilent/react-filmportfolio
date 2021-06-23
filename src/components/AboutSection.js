import React from "react";
import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We are a group of amazing professionals
          </p>
          <button>Contact Us</button>
        </div>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="Employee with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
