import React, { Component, ReactFragment } from 'react';
import TopNavBar from './layout/TopNavBar';
import LandingSection from './landingSection/LandingSection';
import ProjectSection from './projectSection/ProjectSection';
import CallToActionSection from './callToActionSection/CallToActionSection';
import SignupBar from './signupBar/SignupBar';
import styled from 'styled-components/macro';



const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export class Main extends Component {
  render() {
    return (
      <Wrapper>
        <TopNavBar />
        <LandingSection />
        <ProjectSection />
        <CallToActionSection />
        <SignupBar env={this.props.env} />
      </Wrapper>
    );
  }
}

export default Main;
