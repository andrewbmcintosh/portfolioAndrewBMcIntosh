import React, { Component } from 'react';
import styled from 'styled-components/macro';
import FloatingCard from './FloatingCard';
import Skills from './Skills';
import { media } from '../../styleUtils.js';

const StyledJumbotron = styled.div`
  display: grid;
  grid-area: showcase;
  grid-template-areas:
    'title top topTwo'
    'bottom bottomTwo floatingCardArea';
  width: auto;
  min-height: 350px;
  background-image: url('https://i.imgur.com/dzy0eA5.jpg');
  background-position: center;
  background-size: cover;
  align-items: center;

  ${media.phone`
    min-height: 600px;
  `}
`;

const LandingDiv = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'showcase showcase'
    'showcase showcase'
    'skills skills';
  background-color: #91b7bd;
`;
const Title = styled.p`
  grid-area: title;
  font-size: 330%;
  font-family: 'Lora', serif;
`;
const StyledFloatingCard = styled(FloatingCard)`
  grid-area: floatingCardArea;
`;

const SkillsContainer = styled.div`
  grid-area: skills;
  display: grid;
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
          <StyledJumbotron>
            <Title>
              Andrew B. <br /> McIntosh
            </Title>
            <StyledFloatingCard />
          </StyledJumbotron>

          <SkillsContainer>
            <Skills />
          </SkillsContainer>
        </LandingDiv>
      </React.Fragment>
    );
  }
}

export default LandingPage;
