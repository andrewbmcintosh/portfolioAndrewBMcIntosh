import React, { Component } from 'react';
import styled from 'styled-components/macro';
import FloatingCard from './FloatingCard';
import Skills from './Skills';
import { media } from '../../styleUtils.js';

const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(300px, auto);
  column-gap: 1.5rem;
  margin: 0 1.5rem;
  background-color: #91b7bd;
  ${media.phone`
      grid-template-columns: repeat(12, 1fr);
      column-gap: 1.5rem;
       margin: 0 1.5rem;

  `}
`;

const StyledJumbotron = styled.div`
  margin: 0 -1.5rem;

  grid-column: 1 / 13;
  grid-row: 1;
  min-height: 350px;
  max-height: ;
  background-image: url('https://i.imgur.com/dzy0eA5.jpg');
  background-position: center;
  background-size: cover;
  align-items: center;

  ${media.phone`
    min-height: 600px;
  `}
`;

const Title = styled.p`
  grid-row: 1;
  grid-column: 2/4;
  font-size: 330%;
  font-family: 'Lora', serif;
  color: white;
  z-index: 1;
`;

const CardDiv = styled.div`
  grid-row: 1;
  grid-column: 7/12;
  place-self: center;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 5px 10px;
  text-align: center;
`;

const CardBodyText = styled.p`
  ${'' /* padding: 1vw; */}
  font-size: 1.8vw;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin: auto;
  text-align: center;
  vertical-align: middle;
`;

const SkillsContainer = styled(Skills)`
  grid-row: 2;
  grid-columns: 1/12;
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
          <Title>
            Andrew B. <br /> McIntosh
          </Title>
          <StyledJumbotron />
          <CardDiv>
            <CardBodyText>
              Full stack web developer with skills in React, Python, Javascript,
              Express and a passion for connecting people.
            </CardBodyText>
          </CardDiv>
          <SkillsContainer />
        </LandingDiv>
      </React.Fragment>
    );
  }
}

export default LandingPage;
