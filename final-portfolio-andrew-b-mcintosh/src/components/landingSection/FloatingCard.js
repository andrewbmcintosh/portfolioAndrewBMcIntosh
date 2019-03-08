import React, { Component } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardDiv = styled.div`
  background-color: white;

  justify: top;
  width: 547px;
  height: 333px;
  shadow: 5;
  z-index: -1;
`;
const BlueDiv = styled.div`
  background-color: navy;
  position: absolute;
  margin-top: -25px;
  margin-left: 100px
  color: white;
  width: 165px;
  height: 42px;
  shadow: 5;
  z-index: 1;
`;

export class FloatingCard extends Component {
  render() {
    return (
      <Container>
        <BlueDiv>
          <p>Andrew</p>
        </BlueDiv>
        <CardDiv>
          <h1>Hello</h1>
        </CardDiv>
      </Container>
    );
  }
}

export default FloatingCard;
