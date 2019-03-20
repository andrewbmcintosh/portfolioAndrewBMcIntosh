import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components/macro';
import { media } from '../../styleUtils.js';

const StyledNavbar = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto auto;
  column-gap: 0.5rem;
  margin: 0 2rem;
  background-color: white;
  ${'' /* vertical-align: middle; */}
  ${'' /* opacity: 0.2; */}
    ${media.largeDesktop`
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
  `}
  ${media.desktop`
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
  `}
  ${media.tablet`
      display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto auto;
  column-gap: 0.5rem;
  margin: 0 2rem;
  background-color: white;
  `}
  ${media.phone`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto auto;
  column-gap: 0.5rem;
  margin: 0 2rem;
  background-color: white;
  `}

`;

const StyledName = styled.div`
  place-self: center start;
  grid-column: 1 / 5;
  line-height: 1.75rem;
  grid-row: 1;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  font-weight: 700;
    ${media.largeDesktop`
    grid-column: 1;
    grid-row: 1;
    font-size: 1.25rem;
    line-height: 1.25rem;
  `}
  ${media.desktop`
    grid-column: 1;
      grid-row: 1;
      font-size: 1.25rem;
      line-height: 1.25rem;
  `}
    ${media.tablet`
  place-self: center start;
  grid-column: 1 / 5;
  line-height: 1.75rem;
  grid-row: 1;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  font-weight: 700;
  `}
  ${media.phone`
  place-self: center start;
  grid-column: 1 / 5;
  line-height: 1.75rem;
  grid-row: 1;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  font-weight: 700;
  `}
`;

const LinksContainer = styled.div`
  diplay: flex;
  flex-direction: column;
  place-self: center start;
  margin: 0;
  padding: 1rem 0 1rem 0.7rem;
  grid-column: 5 / 9;
  grid-row: 1;
  ${media.largeDesktop`
  grid-column: 2;
   display: inline-block;
   padding: .5rem 0;
  `}
  ${media.desktop`
  grid-column: 2;
   display: inline-block;
   padding: .5rem 0;
  `}
    ${media.tablet`
  diplay: flex;
  flex-direction: column;
  place-self: center start;
  margin: 0;
  padding: 1rem 0 1rem 0.7rem;
  grid-column: 5 / 9;
  grid-row: 1;
  `}
  ${media.phone`
  diplay: flex;
  flex-direction: column;
  place-self: center start;
  margin: 0;
  padding: 1rem 0 1rem 0.7rem;
  grid-column: 5 / 9;
  grid-row: 1;
  `}
`;
const StyledLinks = styled.div`
  place-self: center start;
  margin: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.9rem;
  ${media.largeDesktop`
  place-self: ;
  display: inline-block;
  letter-spacing: 0.25;
  line-height: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  `}
  ${media.desktop`
    place-self: ;
    display: inline-block;
    letter-spacing: 0.25;
  line-height: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  `}
    ${media.tablet`
  place-self: center start;
  margin: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.9rem;
  `}
  ${media.phone`
  place-self: center start;
  margin: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.9rem;
  `}
`;

const StyledButton = styled.div`
  animation: bouncy 5s infinite linear;
  position: relative;
  animation-delay: 0.07s;
  place-self: center stretch;
  text-align: center;
  grid-column: 1 / 9;
  background: #c1f7d5;
  color: #354463;
  grid-row: 2;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0.5rem 0rem;
  border-radius: 3px;
  z-index: 1;
  ${'' /* box-shadow: 5px 10px #635435; */}
  @keyframes bouncy {
     0% {
      top: 0em;
    }
     40% {
      top: 0em;
    }
     43% {
      top: -0.9em;
    }
     46% {
      top: 0em;
    }
     48% {
      top: -0.4em;
    }
     50% {
      top: 0em;
    }
     100% {
      top: 0em;
    }
  }
  ${media.largeDesktop`
    grid-column: 3;
      grid-row: 1;
      font-size: .875rem;
  `}
  ${media.desktop`
    grid-column: 3;
      grid-row: 1;
      font-size: .875rem;
  `}
    ${media.tablet`
  animation-delay: 0.07s;
  place-self: center stretch;
  text-align: center;
  grid-column: 1 / 9;
  background: #c1f7d5;
  color: #354463;
  grid-row: 2;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0.5rem 0rem;
  border-radius: 3px;
  `}
  ${media.phone`
  animation-delay: 0.07s;
  place-self: center stretch;
  text-align: center;
  grid-column: 1 / 9;
  background: #c1f7d5;
  color: #354463;
  grid-row: 2;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0.5rem 0rem;
  border-radius: 3px;
  `}
`;
const StyledButtonBackground = styled.div`
  position: relative;
  place-self: center stretch;
  text-align: center;
  grid-column: 1 / 9;
  background: #354463;
  color: #354463;
  grid-row: 2;
  font-size: 1em;
  font-family: 'Proza Libre', sans-serif;
  font-weight: 700;
  margin: -0rem -0.3rem -0rem 0.2rem;
  padding: 0.5rem 0rem;
  border-radius: 3px;
  z-index: 0;
  ${media.largeDesktop`
    grid-column: 3;
    grid-row: 1;
          font-size: .875rem;

  `}
  ${media.desktop`
    grid-column: 3;
    grid-row: 1;
  `}
    ${media.tablet`
  animation-delay: 0.07s;
  place-self: center stretch;
  text-align: center;
  grid-column: 1 / 9;
  background: #354463;
  color: #354463;
  grid-row: 2;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0.5rem 0rem;
  border-radius: 3px;
  `}
  ${media.phone`
  animation-delay: 0.07s;
  place-self: center stretch;
  text-align: center;
  grid-column: 1 / 9;
  background: #354463;
  color: #354463;
  grid-row: 2;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0.5rem 0rem;
  border-radius: 3px;
  `}
`;
const StyledA = styled.a`
  text-decoration: none;
  color: #212529;
`;
const StyledB = styled.a`
  text-decoration: none;
  color: #354463;
`;
export class TopNavBar extends Component {
  render() {
    return (
      <StyledNavbar>
        <StyledName>
          Andrew B.
          <br /> McIntosh
        </StyledName>
        <LinksContainer>
          <StyledLinks>
            <StyledA href="mailto: abmcintosh7@gmail.com" target="_blank">
              abmcintosh7@gmail.com
            </StyledA>
          </StyledLinks>
          <StyledLinks>
            <StyledA href="https://twitter.com/Andrew_McIntosh" target="_blank">
              @Andrew_McIntosh
            </StyledA>
          </StyledLinks>
          <StyledLinks>(470) 384-9795</StyledLinks>
        </LinksContainer>
        <StyledButton>
          <StyledB
            href="https://kvisit.com/Ow/-KEB/6YIGyfTey0A,1,Nzb0PMdieZsdluy_V-MVcGXtSFRA-fYQdQwSXFptZBI"
            download
            target="_blank"
          >
            Check out my Resume
          </StyledB>
        </StyledButton>
        <StyledButtonBackground>Check out my Resume</StyledButtonBackground>
      </StyledNavbar>
    );
  }
}

export default TopNavBar;
