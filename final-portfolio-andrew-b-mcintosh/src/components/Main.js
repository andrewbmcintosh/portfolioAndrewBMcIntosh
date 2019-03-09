import React, { Component, ReactFragment } from 'react';
import TopNavBar from './layout/TopNavBar';
import LandingSection from './landingSection/LandingSection';
import ProjectCard from './projectSection/ProjectCard';
import ProjectSection from './projectSection/ProjectSection';

export class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <LandingSection />
        <ProjectSection />
      </React.Fragment>
    );
  }
}

export default Main;
