import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import FloatingCard from './FloatingCard';

const StyledJumbotron = styled(Jumbotron)`
  background-color: red;
  height: 400px;
`;

const LandingDiv = styled.div`
  background-color: #91b7bd;
  height: 1464px;
`;

export class LandingPage extends Component {
  render() {
    return (
      <LandingDiv>
        <StyledJumbotron fluid>
          <p>hey</p>
          <FloatingCard />
        </StyledJumbotron>
        <div>
          <h1>Andrew McIntosh</h1>
        </div>
      </LandingDiv>
    );
  }
}

export default LandingPage;
