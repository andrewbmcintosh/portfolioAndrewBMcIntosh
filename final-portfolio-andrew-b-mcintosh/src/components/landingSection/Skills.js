import React, { Component } from 'react';
import styled from 'styled-components/macro';
import icon from '../../media/icon.png';
import javascript from '../../media/javascript.png';
import react from '../../media/react.png';

import { media } from '../../styleUtils.js';

const SkillsSectionContainer = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  ${media.tablet`
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  `}
`;

const SingleSkillContainer = styled.div`
  text-align: center;
  padding: 1.5rem 2rem;
`;

// const SummaryText = styled.p`
//   font-size: 1.4rem;
//   font-family: 'Playfair Display', serif;
//   font-weight: bold;
//   padding: 1rem 0 4rem 0;
//   text-align: center;
//   vertical-align: middle;
//   display: inline-block;
// `;
const SkillHeader = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0;
  line-height: 2.25rem;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  margin: auto;
  text-align: center;
  vertical-align: middle;
`;
const SkillBody = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.25;
  line-height: 1.3rem;
  font-family: 'Proza Libre', sans-serif;
  font-weight: 400;
  margin: auto;
  text-align: center;
`;

const SkillImage = styled.div`
  background-image: ${props => `url(${props.background})`};

  ${'' /* background-image: url(${icon}); */}
  background-size: cover;
  height: 4rem;
  width: 4rem;
`;

export class Skills extends Component {
  render() {
    return (
      <SkillsSectionContainer>
        <SingleSkillContainer>
          <SkillImage background={javascript} />
          <SkillHeader>Javascript</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={react} />
          <SkillHeader>React</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Node.js</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Python</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Communication</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Collaboration</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Resiliency</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Research</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
      </SkillsSectionContainer>
    );
  }
}

export default Skills;
