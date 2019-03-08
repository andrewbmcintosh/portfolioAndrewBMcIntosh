import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import FloatingCard from './FloatingCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      </LandingDiv>
    );
  }
}

export default LandingPage;
