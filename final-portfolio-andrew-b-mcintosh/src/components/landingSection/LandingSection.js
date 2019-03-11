import React, { Component } from 'react';
import styled from 'styled-components/macro';
import FloatingCard from './FloatingCard';
import Skills from './Skills';
import { media } from '../../styleUtils.js';

const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: min-content;
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
  grid-column: 1 / 4;
  font-size: 330%;
  font-family: 'Lora', serif;
  color: white;
  z-index: 1;
`;

const CardDiv = styled.div`
  grid-row: 1;
  grid-column: 7 / 12;
  max-width: 30rem;
  place-self: end center;
  padding: 0.5rem 0.7rem;
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
  grid-column: 1 / 12;
`;
const SkillsSummary = styled.div`
  font-size: 1.4rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  grid-row: 2 / 3;
  grid-column: 3 / 10;
  padding: 1rem 0 4rem 0;
  text-align: center;
  vertical-align: middle;
`;

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
          <SkillsSummary>
            I am endlessly curious about others and learning new things, and my
            intuitive sense for the needs of others allows me to create
            value-driven work. After years of working with youth and their
            families, I understand that connection happens on a deeper level of
            shared understanding. Technology gives us a space to tell a story
            and to invite others to be a part of it.
          </SkillsSummary>
          {/* <SkillsContainer /> */}
        </LandingDiv>
      </React.Fragment>
    );
  }
}

export default LandingPage;
