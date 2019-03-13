import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { media } from '../../styleUtils.js';
import githubLogo from '../../media/githubLogo.png';
import projectTwoImage from '../../media/projectTwoWithTerminal.png';
import homePage from '../../media/homePage.jpg';

const ProjectsSectionContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
    ${media.desktop`
    grid-template-columns: 1fr;
    grid-template rows: ;
    grid-gap: 1rem;
    align-items: center;
    ${'' /* place-content: stretch; */}
  `}
    ${media.tablet`
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
  place-content: stretch;
  `}
    ${media.phone`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  `};
`;

const SingleProjectContainer = styled.div`
  text-align: left;
  display: grid;
  align-items: start;
  padding: 1.5rem 2rem;
  background-color: white;
  box-shadow: 5px 10px;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
    ${media.desktop`
  grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    column-gap: ;
  `}
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
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  `}
`;
const ProjectHeader = styled.p`
  grid-column: 1;
  grid-row: 2;
  font-size: 1.75rem;
  letter-spacing: 0;
  line-height: 2.25rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  text-align: left;
  margin: 0;
  vertical-align: middle;
  ${media.desktop`
    line-height: 2rem;
    grid-row: 2 / 3;
  `}
  ${media.tablet`
    margin: 0;
    grid-column: 2;
    grid-row: 1 / 2;
  `}
  ${media.phone`
    grid-column: 1;
    grid-row: 2 / 3;
    font-size: 1.5rem;
    margin: auto;
    padding: 1rem 0;
    text-align: center;
    font-size: 1.8rem;
  `}
`;
const ProjectBody = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.25;
  grid-column: 1;
  grid-row: 3 / 4;
  line-height: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  margin: auto;
  ${'' /* text-align: center; */}
  ${media.desktop`
    text-align: left;
    line-height: 1.25rem;
    font-size: 1rem;
    grid-column: 1;
    grid-row: 3 / 4
    margin: 0 .5rem ;

  `}
  ${media.tablet`
    margin: -2rem 0 0 0 ;
    text-align: left;
    line-height: 1.5rem;
    font-size: .875rem;
    grid-column: 2;
    grid-row: 2 / 4
  `}
  ${media.phone`
    margin:0;
    line-height: 2rem;
    text-align: center;
    font-size: 0.875rem;
    grid-column: 1;
    grid-row: 3 / 4
  `}
`;

const ProjectImage = styled.div`
  background-image: ${props => `url(${props.background})`};

  ${'' /* background-image: url(${icon}); */}
  background-size: cover;
  height: 8rem;
  width: 12rem;
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
    grid-column: 1;
    grid-row: 1 / 2;
  `}
`;
const ButtonContainer = styled.div`
  justify-content: space-around;
  place-self: stretch;
  display: flex;
  flex-direction: row;
  padding-top: 1.2rem;
  grid-column: 1;
  grid-row: 4 / 5;
  ${media.tablet`
    padding-top: 1.2rem;
    grid-column: 1;
    grid-row: 3/4;
  `}
  ${media.phone`
    padding-top: 1.2rem;
    grid-column: 1;
    grid-row: 4/5;
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
  ${media.desktop`
    font-size:.875rem;
  `}
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
            Full stack web application that allows people to post their favorite
            locations for food, activities, scenery and gas. Users can also
            create "Paths" that have specific stops so that if other people are
            traveling to and from similar locations they can see other peoples
            suggestions.
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
            PersistCS is a solution that starts the process of tieing a Point of
            Sales system to a program that parses emails that are automatically
            sent to a system account. The data is then transformed to represent
            average hours that a employee works and the average tip that a
            employee gets per hour.
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
