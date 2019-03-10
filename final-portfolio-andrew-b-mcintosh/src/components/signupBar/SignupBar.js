import React, { Component } from 'react';
import styled from 'styled-components/macro';
import SignupForm from './SignupForm';
import PropTypes from 'prop-types';

const SignupSection = styled.div`
  height: 200px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5% 5% 5% 5% 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  background-color: #91b7bd;
`;

export class SignupBar extends Component {
  render() {
    return (
      <SignupSection>
        <SignupForm env={this.props.env} />
      </SignupSection>
    );
  }
}

SignupBar.propTypes = {
  env: PropTypes.object.isRequired
};

export default SignupBar;
