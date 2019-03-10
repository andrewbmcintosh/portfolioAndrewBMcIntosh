import React, { Component } from 'react';
import styled from 'styled-components';
import githubLogo from '../../media/githubLogo.png';

const CallToActionSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #b1e1c9;
  height: 100%;
`;

const ProjectSummaryContainer = styled.div`
  margin-bottom: -50px;
  grid-column: 2/5;
  grid-row: 1;
  text-align: center;
`;
const CallToActionSummary = styled.h1`
  grid-column: 2/6;
  grid-row: 1/6;
  margin-top: 5rem;
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  color: white;
  padding: 1rem 0 4rem 0;
  ${'' /* text-align: center; */}
  vertical-align: middle;
  display: inline-block;
`;
const CallToActionBtn = styled.button`
  align-self: center;
  margin-top: 1.5rem;
  font-size: 1.4rem;
  height: 2rem;
  width: 9rem;
  background: palevioletred;
  border: none;
  color: white;
`;

const CallToActionHeader = styled.h1`
  font-size: 1.4rem;
  grid-column: 1;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
`;
const CallToActionBody = styled.p`
  font-size: 0.8rem;
  grid-column: 1;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
`;

const FirstCallCardDiv = styled.div`
  padding: 2rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5%;
  grid-column-gap: 1rem;
  justify-content: center;
  background-color: white;
  grid-column: 8/12;
  z-index: 1;
`;

const LastCallCardDiv = styled.div`
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5%;
  grid-column-gap: 1rem;
  justify-content: center;
  background-color: white;
  grid-column: 8/12;
  z-index: 1;
`;
const CallCardDiv = styled.div`
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5%;
  grid-column-gap: 1rem;
  justify-content: center;
  background-color: white;
  grid-column: 8/12;
  z-index: 1;
`;

const SocialIcon = styled.div`
  justify: right;
  background-image: ${props => `url(${props.background})`};
  ${'' /* background-image: url(${icon}); */}
  background-size: cover;
  grid-column: 2;
  width: 20px;
  height: 20px;
`;

export class CallToActionSection extends Component {
  render() {
    return (
      <React.Fragment>
        <CallToActionSectionContainer>
          <CallToActionSummary>
            I believe that my skills as a full stack web developer combined with
            my love of collaboration, sense of resiliency, and passion for
            connecting people make me <br />
            <CallToActionBtn>Take Action</CallToActionBtn>
          </CallToActionSummary>

          <FirstCallCardDiv>
            <CallToActionHeader>Resume</CallToActionHeader>
            <CallToActionBody>
              Follow the Link to Download a copy of my resume
            </CallToActionBody>
            <SocialIcon background={githubLogo} />
          </FirstCallCardDiv>
          <CallCardDiv>
            <CallToActionHeader>Resume</CallToActionHeader>
            <CallToActionBody>
              Follow the Link to Download a copy of my resume
            </CallToActionBody>
            <SocialIcon background={githubLogo} />
          </CallCardDiv>
          <CallCardDiv>
            <CallToActionHeader>Resume</CallToActionHeader>
            <CallToActionBody>
              Follow the Link to Download a copy of my resume
            </CallToActionBody>
            <SocialIcon background={githubLogo} />
          </CallCardDiv>
          <LastCallCardDiv>
            <CallToActionHeader>Resume</CallToActionHeader>
            <CallToActionBody>
              Follow the Link to Download a copy of my resume
            </CallToActionBody>
            <SocialIcon background={githubLogo} />
          </LastCallCardDiv>
        </CallToActionSectionContainer>
      </React.Fragment>
    );
  }
}

export default CallToActionSection;
