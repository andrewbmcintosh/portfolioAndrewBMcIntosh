import React, { Component, ReactFragment } from 'react';
import TopNavBar from './layout/TopNavBar';
import LandingSection from './landingSection/LandingSection';
import ProjectCard from './projectSection/ProjectCard';

export class Main extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <TopNavBar />
        <LandingSection /> */}
        <ProjectCard />
      </React.Fragment>
    );
  }
}

export default Main;
