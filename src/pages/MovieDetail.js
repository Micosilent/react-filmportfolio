import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { MovieState } from "../movieState";

const MovieDetail = () => {
  const url = useHistory().location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //On mount or url change, set movie to current movie
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledDetails>
          <StyledHeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="lorem impsum sit amet" />
          </StyledHeadLine>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt="lorem ipsum" />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled.div`
  color: white;
`;
const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1250px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  p {
    padding: 2rem 0rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;
const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

export default MovieDetail;
