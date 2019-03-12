import React, { Component } from 'react';
import styled from 'styled-components/macro';
import projectTwoImage from '../../media/projectTwoWithTerminal.png';
import { media } from '../../styleUtils.js';
import githubLogo from '../../media/githubLogo.png';

const ProjectCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  grid-column: 1/4;
  grid-row: 2/6;
  box-shadow: 5px 10px;
  text-align: center;
`;
const ProjectCardContainer = styled.div`
  display: grid;
  grid-row: 1;

  ${'' /* max-width: 60rem;
  max-height: 60rem; */}
  height: 25rem;

  max-width: 20rem;
  max-height: 30rem;
  grid-template-columns: 10% 1fr 1fr 10%;
  grid-template-rows: 10% 2fr 1fr 1fr 1fr;
  ${media.phone`
    padding: 5rem 0;
  `}
`;
const ProjectImage = styled.div`
  background-image: url(${projectTwoImage});
  background-size: cover;
  grid-column: 2/5;
  grid-row: 1/3;
  box-shadow: 3px 3px 5px -3px rgba(0, 0, 0, 0.75);
  justify-self: stretch;
  z-index: 2;
  ${media.phone`
    min-height: 10rem;
    margin-top: -5rem;
  `}
`;
const CardBodyText = styled.p`
  font-size: 1.4rem;
  grid-column: 1/4;
  grid-row: 4;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  ${media.phone`
    font-size: .875rem;
    line-height: 2rem;
  `}
`;
const CardHeaderText = styled.p`
  font-size: 1.8rem;
  grid-column: 1/4;
  grid-row: 3;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  ${media.phone`
    margin-top: 3rem;
  `}
`;

const ProjectBtn = styled.div`
  justify-self: center;
  margin-bottom: 1rem;
  text-align: center;
  align-self: center;
  ${'' /* grid-column: 1 / 3;
  grid-row: 5; */}
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  background: #c1f7d5;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  color: #354463;
`;
const ProjectGithubBtn = styled.div`
  justify-self: center;
  display: flex;
  margin-bottom: 1rem;
  align-self: center;
  ${'' /* grid-column: 3 / 4;
  grid-row: 5; */}
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  background: #c1f7d5;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  color: #354463;
`;

const ButtonContainer = styled.div`
  justify-content: space-around;
  place-self: stretch;
  display: flex;
  flex-direction: row;

  margin-bottom: 1rem;
  margin: 0;
  padding: 1rem 0;
  grid-column: 1 / 4;
  grid-row: 5;
`;

const SocialIcon = styled.div`
  background-image: ${props => `url(${props.background})`};
  ${'' /* background-image: url(${icon}); */}
  background-size: cover;
  margin: auto auto auto 0.25rem;

  width: 15px;
  height: 15px;
`;

export class ProjectCard extends Component {
  render() {
    return (
      <ProjectCardContainer>
        <ProjectImage />
        <ProjectCardDiv />
        <CardHeaderText>HomePage</CardHeaderText>
        <CardBodyText>
          HomePage is a project that utilizes a users Coordinates, Google’s
          Geolocation API, Mongoose, React.js, and Node.js to create a Full
          Stack web application. When a user pings their location to HomePage
          their current status is automatically updated to the “type” of place
          associated with their coordinates.
          {/* If a user’s current coordinates are
          not found within their saved places they are prompted to register the
          location and designate its “type” e.g. “school, work, Gym.” */}
        </CardBodyText>
        <ButtonContainer>
          <ProjectBtn>Link To Site</ProjectBtn>
          <ProjectGithubBtn>
            The Code
            <SocialIcon background={githubLogo} />
          </ProjectGithubBtn>
        </ButtonContainer>
      </ProjectCardContainer>
    );
  }
}

export default ProjectCard;
