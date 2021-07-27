import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, tittleAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <StyledTittle>
        <StyledHide>
          <motion.h2 variants={tittleAnimation}>Get in touch.</motion.h2>
        </StyledHide>
      </StyledTittle>
      <div>
        <StyledHide>
          <StyledSocial variants={tittleAnimation}>
            <StyledCircle />
            <h2>Send Us a Message</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={tittleAnimation}>
            <StyledCircle />
            <h2>Send and email</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={tittleAnimation}>
            <StyledCircle />
            <h2>Send us a Tweet</h2>
          </StyledSocial>
        </StyledHide>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background-color: white;
`;

const StyledTittle = styled(motion.div)`
  margin: 4rem;
  color: black;
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;
const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
