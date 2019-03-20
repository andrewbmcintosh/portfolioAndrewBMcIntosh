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
  ${'' /* text-align: center; */}
  align-items: start;
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
  vertical-align: middle;
  ${media.tablet`
   font-size: 1.25rem;
  `}
  ${media.phone`
   text-align: center;
  `}
`;
const SkillBody = styled.p`
  font-size: 0.875rem;
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
            Want to automate the work you do? Establish an e-commerce platform?
            Or create a web page that utilizes machine learning to predict what
            items people would like to view on your store? Javascript can do all
            of that. Which is why it is one of my favorite tools
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={react} />
          <SkillHeader>React</SkillHeader>
          <SkillBody>
            React is a Javascript library for building user interfaces. It works
            great for single-page or mobile applications and when combined with
            state management tools can efficiently scale and become a powerhouse
            for any front-end development.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={nodeJs} />
          <SkillHeader>Node.js</SkillHeader>
          <SkillBody>
            Is a JavaScript runtime environment. This is one of the integral
            pieces of creating a full stack application because it allows me to
            create a backend application in JavaScript.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={python} />
          <SkillHeader>Python</SkillHeader>
          <SkillBody>
            Python is a server side language that is used primarily on the
            backend. Python is a great tool for a great tool for data analytics
            and machine learning.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={communication} />
          <SkillHeader>Communication</SkillHeader>
          <SkillBody>
            By leveraging my background in public speaking and teaching I am
            able to communicate the value of any organization or project clearly
            and effectively.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={collaboration} />
          <SkillHeader>Collaboration</SkillHeader>
          <SkillBody>
            I believe that work is best done when many voices are heard.
            Surrounding yourself with people that inspire you to be your best
            and look at old concepts in new ways are some of the first-rate
            outcomes of a team grounded in collaboration.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={resiliency} />
          <SkillHeader>Resiliency</SkillHeader>
          <SkillBody>
            I have an adaptive ability to make sure that the work that I do is
            always guided by the values and principles of the design.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={research} />
          <SkillHeader>Research</SkillHeader>
          <SkillBody>
            I have endless curiosity that drives me to always want to know more.
            In every project, I challenged myself to try new techniques and
            study best practices. I am not satisfied with simply knowing the
            bare minimum of a technique or topic.
          </SkillBody>
        </SingleSkillContainer>
      </SkillsSectionContainer>
    );
  }
}

export default Skills;
