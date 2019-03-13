import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { media } from '../../styleUtils.js';
import githubLogo from '../../media/githubLogo.png';
import projectTwoImage from '../../media/projectTwoWithTerminal.png';
import homePage from '../../media/homePage.jpg';

const ProjectsSectionContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-gap: 1.25rem;
  grid-template-rows: ;
    ${media.desktop`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  place-content: stretch;
  `}
  ${media.tablet`
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
  place-content: stretch;
  `}
  ${media.phone`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  `}

`;

const SingleProjectContainer = styled.div`
  text-align: left;
  display: grid;
  ${'' /* align-items: center; */}
  grid-template-rows: auto auto auto auto;
  padding: 1.5rem 2rem;
  background-color: white;
  box-shadow: 5px 10px;
  ${media.tablet`
  ${'' /* margin: auto; */}
  margin: 3rem 0;
  column-gap: 1rem;
  padding: .8rem 1rem;
  grid-row: ${props => `${props.row}`};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  `}
  ${media.phone`
  margin-top: 7rem;
  `}
`;
const ProjectHeader = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0;
  grid-row: 2;
  line-height: 2.25rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  margin: auto;
  vertical-align: middle;
  ${media.tablet`
  margin: 0;
   font-size: 1.75rem;
   text-align: left;
  grid-column: 2;
  grid-row: 1 / 2;
  `}
  ${media.phone`
   align-text: center;
  font-size: 1.8rem;
  `}
`;
const ProjectBody = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.25;
  grid-row: 3;;
  line-height: 2rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  margin: auto;
  ${'' /* text-align: center; */}
  ${media.tablet`
  margin: -2rem 0 0 0 ;
  text-align: left;
    line-height: 1.5rem;
   font-size: .875rem;
   grid-column: 2;
   grid-row: 2 / 4
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
    margin-top: -3rem;
    height:12rem;
    width:16rem;
    grid-column: 1;
    grid-row: 1 / 3;
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
  ${media.tablet`
    padding-top: 1.2rem;
    grid-column: 1;
    grid-row: 3/4;
  `}
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
        <SingleProjectContainer row={1}>
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
        <SingleProjectContainer row={2}>
          <ProjectImage background={homePage} />
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
        <SingleProjectContainer row={3}>
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
