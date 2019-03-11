import React, { Component } from 'react';
import styled from 'styled-components/macro';
import icon from '../../media/icon.png';

const SkillsSectionContainer = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
  font-size: 1.4rem;

  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin: auto;
  text-align: center;
  vertical-align: middle;
`;
const SkillBody = styled.p`
  font-size: 0.8rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin: auto;
  text-align: center;
`;

const SkillImage = styled.div`
  background-image: ${props => `url(${props.background})`};

  ${'' /* background-image: url(${icon}); */}
  background-size: cover;
  height: 50px;
`;

export class Skills extends Component {
  render() {
    return (
      <SkillsSectionContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Work from love</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Work from love</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Work from love</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Work from love</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Work from love</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Work from love</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Work from love</SkillHeader>
          <SkillBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            scelerisque lectus.
          </SkillBody>
        </SingleSkillContainer>
        <SingleSkillContainer>
          <SkillImage background={icon} />
          <SkillHeader>Work from love</SkillHeader>
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
