import React, { Component } from 'react';
import styled from 'styled-components/macro';
import githubLogo from '../../media/githubLogo.png';
import resume from '../../media/resume.png';
import linkedin from '../../media/linkedin.png';

import { media } from '../../styleUtils.js';

const CallToActionSectionContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(12, 1fr);
  background-color: #b1e1c9;
  ${'' /* height: 100%; */}
  ${media.phone`
    grid-template-columns: 1fr;
    padding: 0 1rem;
  `}
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
  ${media.phone`
    grid-column: 1;
    font-size:1.5rem;
    padding: 0;
    text-align: center;
  `}
`;
const CallToActionBtn = styled.a`
  align-self: center;
  margin-top: 2.5rem;
  font-size: 1rem;
  height: 2rem;
  padding: 0.5rem 1rem;
  background: palevioletred;
  border: none;
  color: white;
  ${media.phone`
    grid-column: 1;
  `}
`;

const CallToActionHeader = styled.h1`
  font-size: 1.4rem;
  grid-column: 1;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  ${media.phone`
    grid-column: 1;
  `}
`;
const CallToActionBody = styled.p`
  font-size: 0.8rem;
  grid-column: 1;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  ${media.phone`
    grid-column: 1;
  `}
`;

const FirstCallCardDiv = styled.div`
  padding: 2rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
  ${'' /* width: 100%; */}
  display: grid;
  grid-template-columns: 1fr 5%;
  grid-column-gap: 1rem;
  justify-content: center;
  background-color: white;
  grid-column: 8/12;
  z-index: 1;
  ${media.phone`
    grid-column: 1;
    margin-top:2rem;
  `}
`;

const LastCallCardDiv = styled.div`
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
  ${'' /* width: 100%; */}
  display: grid;
  grid-template-columns: 1fr 5%;
  grid-column-gap: 1rem;
  justify-content: center;
  background-color: white;
  grid-column: 8/12;
  z-index: 1;
  ${media.phone`
    grid-column: 1;
  `}
`;
const CallCardDiv = styled.div`
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${'' /* width: 100%; */}
  display: grid;
  grid-template-columns: 1fr 5%;
  grid-column-gap: 1rem;
  justify-content: center;
  background-color: white;
  grid-column: 8/12;
  z-index: 1;
  ${media.phone`
    grid-column: 1;
  `}
`;

const SocialIcon = styled.div`
  justify: right;
  background-image: ${props => `url(${props.background})`};
  ${'' /* background-image: url(${icon}); */}
  background-size: cover;
  grid-column: 1;
  width: 30px;
  height: 30px;
`;

const StyledA = styled.a`
  text-decoration: none;
`;

export class CallToActionSection extends Component {
  render() {
    return (
      <React.Fragment>
        <CallToActionSectionContainer>
          <CallToActionSummary>
            I believe that my skills as a full stack web developer combined with
            my love of collaboration, sense of resiliency, and passion for
            connecting people make me especially equipped to be a part of your
            team.
            <br />
            <br />
            <CallToActionBtn
              href="https://kvisit.com/Ow/-KEB/6YIGyfTey0A,1,Nzb0PMdieZsdluy_V-MVcGXtSFRA-fYQdQwSXFptZBI"
              download
              target="_blank"
            >
              Download Resume
            </CallToActionBtn>
          </CallToActionSummary>

          <FirstCallCardDiv>
            <CallToActionHeader>Resume</CallToActionHeader>
            <CallToActionBody>
              <StyledA
                href="https://kvisit.com/Ow/-KEB/6YIGyfTey0A,1,Nzb0PMdieZsdluy_V-MVcGXtSFRA-fYQdQwSXFptZBI"
                download
                target="_blank"
              >
                Click here to download a copy of my resume.
              </StyledA>
            </CallToActionBody>
            <SocialIcon background={resume} />
          </FirstCallCardDiv>

          <CallCardDiv>
            <CallToActionHeader>Linkedin</CallToActionHeader>
            <CallToActionBody>
              <StyledA
                href="https://www.linkedin.com/in/andrewbmcintosh/"
                download
                target="_blank"
              >
                Click here so that we can connect on Linkedin.
              </StyledA>
            </CallToActionBody>
            <SocialIcon background={linkedin} />
          </CallCardDiv>
          <LastCallCardDiv>
            <CallToActionHeader>Github</CallToActionHeader>
            <CallToActionBody>
              <StyledA
                href="https://github.com/andrewbmcintosh"
                download
                target="_blank"
              >
                Click here to checkout other projects and what I'm working on
                right now.
              </StyledA>
            </CallToActionBody>
            <SocialIcon background={githubLogo} />
          </LastCallCardDiv>
          {/* <LastCallCardDiv>
            <CallToActionHeader>
              abmcintosh7
              <br />
              @gmail.com
            </CallToActionHeader>
            <CallToActionBody>
              <StyledA href="mailto: abmcintosh7@gmail.com" target="_blank">
                Lets continue the conversation! click here to send an email to
                abmcintosh7@gmail.com
              </StyledA>
            </CallToActionBody>
            <SocialIcon background={githubLogo} />
          </LastCallCardDiv> */}
        </CallToActionSectionContainer>
      </React.Fragment>
    );
  }
}

export default CallToActionSection;
