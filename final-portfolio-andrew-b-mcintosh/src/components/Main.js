import React, { Component, ReactFragment } from 'react';
import TopNavBar from './layout/TopNavBar';
import LandingSection from './landingSection/LandingSection';
import ProjectCard from './projectSection/ProjectCard';
import ProjectSection from './projectSection/ProjectSection';
import CallToActionSection from './callToActionSection/CallToActionSection';
import SignupBar from './signupBar/SignupBar';

export class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <LandingSection />
        <ProjectSection />
        <CallToActionSection />
        <SignupBar env={this.props.env} />
      </React.Fragment>
    );
  }
}

export default Main;