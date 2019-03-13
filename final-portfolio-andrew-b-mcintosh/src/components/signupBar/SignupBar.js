import React, { Component } from 'react';
import styled from 'styled-components/macro';
import SignupForm from './SignupForm';
import PropTypes from 'prop-types';
import { media } from '../../styleUtils.js';

const SignupSection = styled.div`
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  background-color: #91b7bd;
  padding: 0 4rem;
  ${media.phone`
   grid-template-columns: 1fr;
    grid-template-rows: auto auto;

  `}
`;

const EmailHeader = styled.div`
text-align: center;
  grid-column:1;
  grid-row:1;
   font-size: 1.5rem;
  letter-spacing: 0;
  line-height: 2.25rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: white;
  padding-top: 2rem;
  ${'' /* vertical-align: middle; */}
  ${'' /* text-align: center; */}
  ${media.tablet`
   font-size: 1.25rem;
   grid-row: 1;
  `}
    ${media.phone`
   text-align: center;
  `}
`;
const EmailText = styled.p`
  font-size: 0.875rem;
  grid-column:1;
  grid-row:2;
  letter-spacing: 0.25;
  line-height: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  color: white;
  margin: auto;
  ${'' /* text-align: center; */}
  ${media.tablet`
   font-size: 1.25rem;
  `}
    ${media.phone`
   text-align: center;
  `}
`;
const PhoneHeader = styled.div`
text-align: center;
  grid-column:2;
  grid-row:1;
   font-size: 1.5rem;
  letter-spacing: 0;
  line-height: 2.25rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: white;
  padding-top: 2rem;
  ${'' /* vertical-align: middle; */}
  ${'' /* text-align: center; */}
  ${media.tablet`
  grid-column: 1;
   font-size: 1.25rem;
   grid-row: 2;
  `}
    ${media.phone`
      grid-column: 1;

   text-align: center;
  `}
`;
const PhoneText = styled.p`
  font-size: 0.875rem;
  grid-column:2;
  grid-row:2;
  letter-spacing: 0.25;
  line-height: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  color: white;
  margin: auto;
  ${'' /* text-align: center; */}
  ${media.tablet`
    grid-column: 1;

   font-size: 1.25rem;
  `}
    ${media.phone`
      grid-column: 1;

   text-align: center;
  `}
`;

const StyledA = styled.a`
  text-decoration: none;
  color: white;
`;
export class SignupBar extends Component {
  render() {
    return (
      <SignupSection>
        {/* <SignupForm env={this.props.env} /> */}
        <EmailHeader>
          Email
          <EmailText>
            <StyledA href="mailto: abmcintosh7@gmail.com" target="_blank">
              abmcintosh7@gmail.com
            </StyledA>
          </EmailText>
        </EmailHeader>
        <PhoneHeader>
          Phone<PhoneText>(470) 384-9795</PhoneText>
        </PhoneHeader>
      </SignupSection>
    );
  }
}

SignupBar.propTypes = {
  env: PropTypes.object.isRequired
};

export default SignupBar;
