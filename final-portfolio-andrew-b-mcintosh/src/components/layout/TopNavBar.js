import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  height: 50px;
  ${'' /* opacity: 0.2; */}
`;

export class TopNavBar extends Component {
  render() {
    return (
      <StyledNavbar bg="light" variant="light" sticky="top">
        <Navbar.Brand href="#home">DEV</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Contact Info</Navbar.Text>
        </Navbar.Collapse>
      </StyledNavbar>
    );
  }
}

export default TopNavBar;
