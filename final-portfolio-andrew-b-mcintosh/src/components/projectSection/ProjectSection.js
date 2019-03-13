import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { media } from '../../styleUtils.js';
import ProjectCard from './ProjectCard';
import ProjectCardTwo from './ProjectCardTwo';
import ProjectCardThree from './ProjectCardThree';
import Projects from './Projects.js';

const BackgroundDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: #91b7bd;
  ${media.tablet`
    background-color: #354463;
  `}
  ${media.phone`
    background-color: #354463;
  `}
`;
const ProjectSectionContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto auto;
  column-gap: 1.5rem;
  margin: 0 1.5rem;
  padding: 2rem 0;

  background-color: #354463;
   ${media.desktop`
    padding-top: 2rem;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 1rem;
    margin: 0 1.5rem;
    background-color: #354463;
  `}
  ${media.tablet`
    padding-top: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #354463;
  `}
  ${media.phone`
    padding-top: 0;
      grid-template-columns: repeat(4, 1fr);
      margin: 0;
      background-color: #354463;
      padding-bottom: 4rem;
  `}
`;
const ProjectsContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-column: 2 / 12;
  grid-row: 3;
  justify-items: center;
  ${media.desktop`
  
  grid-column: 2 / 12;
  grid-row: 3;
  justify-items: center;
  `}
  ${media.tablet`
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-column: 1 / 5;
  grid-row: 3;
  grid-gap: 1rem;
  place-content: stretch;
  justify-items: center;
  padding: 4rem 2rem;
  `}
  ${media.phone`
  align-content: space-around;
  justify-content: space-evenly;
  grid-column: 1 / 5;
  grid-row: 3;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin: 0;
  padding: 2rem 2rem;
  `}
`;

const SummaryText = styled.div`
  font-family: 'Open Sans', sans-serif;
  grid-column: 2 / 12;
  grid-row: 2;
  color: white;
  font-size: 1.5rem;
  margin: 0;
  padding: 4rem 2rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  ${media.desktop`
  grid-column: 2 / 12;
  grid-row: 2;
  grid-gap: 1rem;
  place-content: stretch;
  justify-items: center;
  padding: 4rem 2rem;
  `}
  ${media.tablet`
    font-size: 1.25rem;
    grid-column: 1 / 5;
    padding: 1rem;
    
  `}
  ${media.phone`
    font-size: 1.25rem;
    grid-column: 1 / 5;
    padding: 2rem 2rem;

  `}
`;
const TitleBox = styled.div`
  position: relative;
  place-self: center;
  text-align: center;
  grid-column: 2 / 12;
  grid-row: 1;
  background: #ffffff;
  color: #354463;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  border-radius: ;
  z-index: 1;
  ${media.desktop`
    grid-column: 2 / 12;
    grid-row: 1;
    grid-gap: 1rem;
    place-content: stretch;
    justify-items: center;
    padding: 1rem 2rem;
  `}
  ${media.tablet`
    font-size: 1.25rem;
    grid-column: 1 / 5;
     padding: 1rem 2rem;
  `}
  ${media.phone`
    grid-row: 1;
    place-self: center;
    font-size: 1.25rem;
    grid-column: 1 / 5;
     padding: 1rem 2rem;
  `}
`;

export class ProjectSection extends Component {
  render() {
    return (
      <BackgroundDiv>
        <ProjectSectionContainer>
          <TitleBox>My Work</TitleBox>
          <SummaryText>
            I am endlessly curious about others and learning new things, and my
            intuitive sense for the needs of others allows me to create
            value-driven work.
          </SummaryText>
          <ProjectsContainer>
            <Projects />
          </ProjectsContainer>
        </ProjectSectionContainer>
      </BackgroundDiv>
    );
  }
}

export default ProjectSection;
