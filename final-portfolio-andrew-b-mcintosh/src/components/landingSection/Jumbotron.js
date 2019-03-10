import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components/macro';

const StyledJumbotron = styled(Jumbotron)`
  background-color: red;
  height: 400px;
`;

export class Jumbotron extends Component {
  render() {
    return <div />;
  }
}

export default Jumbotron;
