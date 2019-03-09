import React, { Component, ReactFragment } from 'react';
import TopNavBar from './layout/TopNavBar';
import LandingSection from './landingSection/LandingSection';

export class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNavBar />
        <LandingSection />
      </React.Fragment>
    );
  }
}

export default Main;
