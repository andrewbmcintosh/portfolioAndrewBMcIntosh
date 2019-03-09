import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import FloatingCard from './FloatingCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Jumbotron';
import TopNavBar from '../layout/TopNavBar';
import Skills from './Skills';

const StyledJumbotron = styled.div`
  grid-column: 1/13;
  grid-row: 1/5;
  background-image: url('https://i.imgur.com/dzy0eA5.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  position: relative;
  z-index: 0;
`;

const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5% 5% 5% 5% 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  background-color: #91b7bd;
  height: 110%;
`;

const CardContainer = styled.div`
  align-self: center;
  grid-column: 7/12;
  grid-row: 2/6;
`;

const Title = styled.p`
  grid-column: 1/13;
  grid-row: 1/5;
  font-size: 330%;
  font-family: 'Lora', serif;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-column: 2/12;
  grid-row: 6/12;
`;

// const StyledNavbar = styled.div`
//   grid-
//   opacity: 0.2;
// `;

export class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <LandingDiv>
          <StyledJumbotron fluid />
          <CardContainer>
            <FloatingCard />
          </CardContainer>
          <Title>
            Andrew B. <br /> McIntosh
          </Title>
          <SkillsContainer>
            <Skills />
          </SkillsContainer>
        </LandingDiv>
      </React.Fragment>
    );
  }
}

export default LandingPage;
