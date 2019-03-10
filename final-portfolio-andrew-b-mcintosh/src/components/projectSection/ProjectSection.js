import React, { Component } from 'react';
import styled from 'styled-components/macro';
import ProjectCard from './ProjectCard';
import ProjectCardTwo from './ProjectCardTwo';
import ProjectCardThree from './ProjectCardThree';

const ProjectSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 3fr 1fr;
  grid-template-rows: 2fr 3fr;

  background-color: #354463;
  height: 100%;
`;

const ProjectSummaryContainer = styled.div`
  margin-bottom: -50px;
  grid-column: 2/5;
  grid-row: 1;
  text-align: center;
`;
const SummaryText = styled.p`
  font-size: 1.4rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  padding: 1rem 0 4rem 0;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
`;
const SingleProjectContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-column: ${props => `${props.column}`};
  grid-row: ${props => `${props.row}`};
  grid-template-row: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
`;
export class ProjectSection extends Component {
  render() {
    return (
      <React.Fragment>
        <ProjectSectionContainer>
          <ProjectSummaryContainer>
            <SummaryText>
              I am endlessly curious about others and learning new things, and
              my intuitive sense for the needs of others allows me to create
              value-driven work. After years of working with youth and their
              families, I understand that connection happens on a deeper level
              of shared understanding. Technology gives us a space to tell a
              story and to invite others to be a part of it.
            </SummaryText>
          </ProjectSummaryContainer>
          <SingleProjectContainer row={2} column={2}>
            <ProjectCard />
          </SingleProjectContainer>
          <SingleProjectContainer row={2} column={3}>
            <ProjectCardTwo />
          </SingleProjectContainer>
          <SingleProjectContainer row={2} column={4}>
            <ProjectCardThree />
          </SingleProjectContainer>
        </ProjectSectionContainer>
      </React.Fragment>
    );
  }
}

export default ProjectSection;
