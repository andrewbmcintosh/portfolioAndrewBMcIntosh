import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  grid-column: 1/4;
  grid-row: 2/6;
  box-shadow: 5px 10px;

  text-align: center;
`;
const ProjectCardContainer = styled.div`
  display: grid;
  ${'' /* max-width: 60rem;
  max-height: 60rem; */}
  height: 25rem;
  width: 18rem;
  max-width: 20rem;
  max-height: 30rem;
  grid-template-columns: 10% 1fr 1fr 10%;
  grid-template-rows: 10% 2fr 1fr 1fr 1fr;
`;
const ProjectImage = styled.div`
  ${'' /* background-image: ; */}
  ${'' /* background-size: cover; */}
  grid-column: 2/5;
  grid-row: 1/3;

  justify-self: stretch;
  border: 1px solid black;
  z-index: 1;
`;
const CardBodyText = styled.p`
  font-size: 1.4rem;
  grid-column: 1/4;
  grid-row: 4;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
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
`;

const ProjectBtn = styled.button`
  justify-self: center;
  align-self: center;
  grid-column: 1/4;
  grid-row: 5;
  background: palevioletred;
  width: 40%;
  height: 40%;
  border: none;
  color: white;
`;

export class ProjectCard extends Component {
  render() {
    return (
      <ProjectCardContainer>
        <ProjectImage />
        <ProjectCardDiv />
        <CardHeaderText>Annas Nice</CardHeaderText>
        <CardBodyText>Tree Planting Initiatives</CardBodyText>
        <ProjectBtn>Read More</ProjectBtn>
      </ProjectCardContainer>
    );
  }
}

export default ProjectCard;
