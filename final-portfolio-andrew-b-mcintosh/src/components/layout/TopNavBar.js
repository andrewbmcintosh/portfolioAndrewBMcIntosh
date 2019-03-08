import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  height: 100px;
`;

export class TopNavBar extends Component {
  render() {
    return (
      <StyledNavbar bg="light" variant="light" sticky="top">
        <Navbar.Brand href="#home">Andrew B. McIntosh</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </StyledNavbar>
    );
  }
}

export default TopNavBar;
