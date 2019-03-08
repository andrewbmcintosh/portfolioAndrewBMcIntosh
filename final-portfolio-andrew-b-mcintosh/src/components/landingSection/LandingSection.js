import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import FloatingCard from './FloatingCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StyledJumbotron = styled.div`
  grid-column: 1/13;
  grid-row: 1/5;
  background-color: red;
`;

const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5% 5% 5% 5% 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  background-color: #91b7bd;
  height: 1464px;
`;

const CardContainer = styled.div`
  align-self: center;
  grid-column: 7/12;
  grid-row: 2/6;
`;

export class LandingPage extends Component {
  render() {
    return (
      <LandingDiv>
        <StyledJumbotron fluid>
          <p>hey</p>
        </StyledJumbotron>
        <CardContainer>
          <FloatingCard />
        </CardContainer>
      </LandingDiv>
    );
  }
}

export default LandingPage;
