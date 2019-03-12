import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { media } from '../../styleUtils.js';
import githubLogo from '../../media/githubLogo.png';
import projectTwoImage from '../../media/projectTwoWithTerminal.png';

const ProjectsSectionContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-gap: 1.25rem;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  ${media.tablet`
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1rem;
  place-content: stretch;
  `}
  ${media.phone`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  `}
`;

const SingleProjectContainer = styled.div`
  ${'' /* text-align: center; */}
  display: grid;
  align-items: start;
  grid-template-rows: auto auto auto auto;
  padding: 1.5rem 2rem;
  background-color: white;
  box-shadow: 5px 10px;
  ${media.tablet`
  padding: .8rem 1rem;
  `}
  ${media.phone`
  margin-top: 7rem;
  `}
`;
const ProjectHeader = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0;
  grid-row: 2;
  line-height: 2.25rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;

  margin: auto;
  ${'' /* text-align: center; */}
  vertical-align: middle;
  ${media.tablet`
   font-size: 1.25rem;
  `}
  ${media.phone`
   text-align: center;
    font-size: 1.8rem;

  `}
`;
const ProjectBody = styled.p`
  font-size: 0.875rem;
  grid-row: 3;;
  line-height: 2rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  margin: auto;
  ${'' /* text-align: center; */}
  ${media.tablet`
   font-size: 1.25rem;
  `}
    ${media.phone`
   text-align: center;
   font-size: 0.875rem;
  `}
`;

const ProjectImage = styled.div`
  background-image: ${props => `url(${props.background})`};

  ${'' /* background-image: url(${icon}); */}
  background-size: cover;
  height: 4rem;
  width: 4rem;
  box-shadow: 3px 3px 5px -3px rgba(0, 0, 0, 0.75);

  ${media.tablet`
    margin: auto;
  `}
  ${media.phone`
    margin-top: -7rem;
    height:12rem;
    width:16rem;
  `}
`;
const ButtonContainer = styled.div`
  justify-content: space-around;
  place-self: stretch;
  display: flex;
  flex-direction: row;
  grid-row: 4;
`;
const ProjectGithubBtn = styled.div`
  justify-self: center;
  display: flex;
  margin-bottom: 1rem;
  align-self: center;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  background: #c1f7d5;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  color: #354463;
`;
const ProjectBtn = styled.div`
  justify-self: center;
  margin-bottom: 1rem;
  text-align: center;
  align-self: center;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  background: #c1f7d5;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  color: #354463;
`;
const SocialIcon = styled.div`
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  margin: auto auto auto 0.25rem;
  width: 15px;
  height: 15px;
`;

export class Projects extends Component {
  render() {
    return (
      <ProjectsSectionContainer>
        <SingleProjectContainer>
          <ProjectImage background={projectTwoImage} />
          <ProjectHeader>DesirePath</ProjectHeader>
          <ProjectBody>
            HomePage is a project that utilizes a users Coordinates, Google’s
            Geolocation API, Mongoose, React.js, and Node.js to create a Full
            Stack web application. When a user pings their location to HomePage
            their current status is automatically updated to the “type” of place
            associated with their coordinates.
          </ProjectBody>
          <ButtonContainer>
            <ProjectBtn>Link To Site</ProjectBtn>
            <ProjectGithubBtn>
              The Code
              <SocialIcon background={githubLogo} />
            </ProjectGithubBtn>
          </ButtonContainer>
        </SingleProjectContainer>
        <SingleProjectContainer>
          <ProjectImage background={projectTwoImage} />
          <ProjectHeader>HomePage</ProjectHeader>
          <ProjectBody>
            HomePage is a project that utilizes a users Coordinates, Google’s
            Geolocation API, Mongoose, React.js, and Node.js to create a Full
            Stack web application. When a user pings their location to HomePage
            their current status is automatically updated to the “type” of place
            associated with their coordinates.
          </ProjectBody>
          <ButtonContainer>
            <ProjectBtn>Link To Site</ProjectBtn>
            <ProjectGithubBtn>
              The Code
              <SocialIcon background={githubLogo} />
            </ProjectGithubBtn>
          </ButtonContainer>
        </SingleProjectContainer>
        <SingleProjectContainer>
          <ProjectImage background={projectTwoImage} />
          <ProjectHeader>PersistCS</ProjectHeader>
          <ProjectBody>
            HomePage is a project that utilizes a users Coordinates, Google’s
            Geolocation API, Mongoose, React.js, and Node.js to create a Full
            Stack web application. When a user pings their location to HomePage
            their current status is automatically updated to the “type” of place
            associated with their coordinates.
          </ProjectBody>
          <ButtonContainer>
            <ProjectBtn>Link To Site</ProjectBtn>
            <ProjectGithubBtn>
              The Code
              <SocialIcon background={githubLogo} />
            </ProjectGithubBtn>
          </ButtonContainer>
        </SingleProjectContainer>
      </ProjectsSectionContainer>
    );
  }
}

export default Projects;
