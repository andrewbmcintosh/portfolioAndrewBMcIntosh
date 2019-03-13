import React, { Component } from 'react';
import styled from 'styled-components/macro';
import FloatingCard from './FloatingCard';
import Skills from './Skills';
import { media } from '../../styleUtils.js';
import mobileJumbotronColorAdjusted from '../../media/mobileJumbotronColorAdjusted.jpg';

const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto auto;
  column-gap: 1.5rem;
  margin: 0 1.5rem;
  background-color: #91b7bd;
  ${media.phone`
      grid-template-columns: repeat(4, 1fr);
      column-gap: 1rem;
       margin: 0 1.5rem;
         background-color: #354463;
  `}
`;

const BackgroundDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: #91b7bd;
  ${media.phone`
         background-color: #354463;
  `}
`;
const StyledJumbotron = styled.div`
  margin: 0 -1.5rem;
  grid-column: 1 / 13;
  grid-row: 1 / 2;
  min-height: 350px;
  background-image: url('https://i.imgur.com/dzy0eA5.jpg');
  background-position: center;
  background-size: cover;
  align-items: center;
  ${media.phone`
    font-size: .85rem;
    grid-column: 1 / 5;
    grid-row: 1 / 2;
    min-height: 40rem;
    max-height: 40rem;
    background-image: url(${mobileJumbotronColorAdjusted});
  `}
`;
const Title = styled.p`
  grid-row: 1 / 2;
  grid-column: 1 / 4;
  font-size: 3rem;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  letter-spacing: -1.5;
  color: white;
  z-index: 1;
  ${media.phone`
    text-align: end;
    font-size: 3.6rem;
    line-height: 3.2rem;
    margin-top: .5rem;
    margin-right: -1.2rem;
    grid-column: 1 / 5;
  
  `}
`;

const CardDiv = styled.div`
  grid-row: 1 / 2;
  grid-column: 7 / 12;
  max-width: 30rem;
  place-self: end center;
  padding: 0.5rem 0.7rem;
  justify-content: center;
  background-color: white;
  box-shadow: 5px 10px #635435;
  text-align: center;
  ${media.phone`
    font-size: .85rem;
    grid-column: 1 / 5;
    max-width: 100rem;
    margin-bottom: 3rem;
  `}
`;

const CardBodyText = styled.p`
  ${'' /* padding: 1vw; */}
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  letter-spacing: 0.15;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  ${media.phone`
    font-size: 1.3rem;
    grid-column: 1 / 5;
    grid-row: 2 / 3;
    padding: 1.5rem 1rem;
  `}
`;

const SkillsSummary = styled.div`
  font-size: 1.5rem;
  color: white;
  line-height: 1.7rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  letter-spacing: 0;
  grid-column: 2 / 12;
  grid-row: 2 / 3;
  padding: 4rem 0 4rem 0;
  text-align: center;
  vertical-align: middle;
  ${media.phone`
    font-size: 1.25rem;
    grid-column: 1 / 5;
  `}
`;
const SkillsContainer = styled.div`
  grid-column: 1 / 13;
  grid-row: 3 / 4;
  display: grid;
  padding: 0 0 4rem 0;
  ${'' /* justify-items: stretch;
  align-items: stretch; */}
   ${media.tablet`
    ${'' /* font-size: .85rem;
    grid-column: 1 / 5; */}
  `}
  ${media.phone`
    font-size: .85rem;
    grid-column: 1 / 5;
  `}
`;
export class LandingPage extends Component {
  render() {
    return (
      <BackgroundDiv>
        <LandingDiv>
          <Title>
            Andrew B.
            <br /> McIntosh
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
          <SkillsContainer>
            <Skills />
          </SkillsContainer>
        </LandingDiv>
      </BackgroundDiv>
    );
  }
}

export default LandingPage;
