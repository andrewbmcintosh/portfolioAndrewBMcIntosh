import React, { Component } from 'react';
import styled from 'styled-components/macro';
import icon from '../../media/icon.png';
import javascript from '../../media/javascript.png';
import react from '../../media/react.png';
import nodeJs from '../../media/nodeJs.png';
import python from '../../media/python.png';
import communication from '../../media/communication.png';
import collaboration from '../../media/collaboration.png';
import resiliency from '../../media/resiliency.png';

import research from '../../media/research.png';

import { media } from '../../styleUtils.js';

const SkillsSectionContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-gap: 1.25rem;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  ${media.tablet`
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1rem;
  place-content: stretch;
  `}
  ${media.phone`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  `}
`;

const SingleSkillContainer = styled.div`
  text-align: center;
  padding: 1.5rem 2rem;
  ${media.tablet`
  padding: .8rem 1rem;
  `}
  ${media.phone`
  padding: .8rem 0;
  `}
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
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: white;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  ${media.tablet`
   font-size: 1.25rem;
  `}
`;
const SkillBody = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.25;
  line-height: 1.3rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  color: white;
  margin: auto;
  text-align: center;
  ${media.tablet`
   font-size: 1.25rem;
  `}
`;

const SkillImage = styled.div`
  background-image: ${props => `url(${props.background})`};

  ${'' /* background-image: url(${icon}); */}
  background-size: cover;
  height: 4rem;
  width: 4rem;
  ${media.tablet`
    margin: auto;
  `}
  ${media.phone`
    margin: auto;
  `}
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
          <SkillImage background={nodeJs} />
          <SkillHeader>Node.js</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={python} />
          <SkillHeader>Python</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={communication} />
          <SkillHeader>Communication</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={collaboration} />
          <SkillHeader>Collaboration</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={resiliency} />
          <SkillHeader>Resiliency</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={research} />
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
