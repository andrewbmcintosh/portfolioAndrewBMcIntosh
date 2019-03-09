import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5% 5% 5% 5% 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  background-color: #91b7bd;
  height: 110%;
`;

export class ProjectSection extends Component {
  render() {
    return (
      <React.Fragment>
        <ProjectSection>
          <p>Project Section</p>
        </ProjectSection>
      </React.Fragment>
    );
  }
}

export default ProjectSection;
