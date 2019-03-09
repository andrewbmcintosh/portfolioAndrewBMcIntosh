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
  background-image: url('https://i.imgur.com/zft283x.jpg');

  background-repeat: no-repeat;
  background-size: cover;
  align-items: start;

  position: bottom;
  z-index: 0;
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

const Title = styled.p`
  grid-column: 1/13;
  grid-row: 1/5;
  font-size: 330%;
  font-family: 'Lora', serif;
`;

export class LandingPage extends Component {
  render() {
    return (
      <LandingDiv>
        <StyledJumbotron fluid />
        <CardContainer>
          <FloatingCard />
        </CardContainer>
        <Title>
          Andrew B. <br /> McIntosh
        </Title>
      </LandingDiv>
    );
  }
}

export default LandingPage;
