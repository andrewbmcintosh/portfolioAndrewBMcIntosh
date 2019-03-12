import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components/macro';

const StyledNavbar = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto auto;
  column-gap: 0.5rem;
  margin: 0 2rem;
  background-color: white;
  ${'' /* vertical-align: middle; */}
  ${'' /* opacity: 0.2; */}
`;

const StyledName = styled.div`
  place-self: center start;
  grid-column: 1 / 5;
  grid-row: 1;
  font-family: 'Proza Libre', sans-serif;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  font-weight: 700;
`;

const LinksContainer = styled.div`
  diplay: flex;
  flex-direction: column;
  place-self: center start;
  margin: 0;
  padding: 1rem 0;
  font-family: 'Proza Libre', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  grid-column: 6 / 9;
  grid-row: 1;
`;
const StyledLinks = styled.div`
  place-self: center start;
  margin: 0;
  font-family: 'Proza Libre', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.9rem;
`;

const StyledButton = styled.div`
  place-self: center stretch;
  text-align: center;
  grid-column: 1 / 9;
  background: #c1f7d5;
  color: #354463;
  grid-row: 2;
  font-size: 1em;
  font-family: 'Proza Libre', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0.5rem 0rem;
  border-radius: 3px;
`;

export class TopNavBar extends Component {
  render() {
    return (
      <StyledNavbar bg="light" variant="light" sticky="top">
        <StyledName>
          Andrew B.
          <br /> McIntosh
        </StyledName>
        <LinksContainer>
          <StyledLinks>About Me</StyledLinks>
          <StyledLinks>Projects</StyledLinks>
          <StyledLinks>Contact Me</StyledLinks>
        </LinksContainer>
        <StyledButton>Contact Me</StyledButton>
      </StyledNavbar>
    );
  }
}

export default TopNavBar;
