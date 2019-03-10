import React, { Component } from 'react';
import styled from 'styled-components';
import icon from '../../media/icon.png';

const SkillsSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const SingleSkillContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-column: ${props => `${props.column}`};
  grid-row: ${props => `${props.row}`};
  grid-template-row: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
`;

const SkillsSummaryContainer = styled.div`
  margin-bottom: -50px;
  grid-column: 1/5;
  grid-row: 1;
  text-align: center;
`;

const SummaryText = styled.p`
  font-size: 1.4rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  padding: 1rem 0 4rem 0;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
`;
const SkillHeader = styled.p`
  font-size: 1.4rem;
  grid-row: 2;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
`;
const SkillBody = styled.p`
  font-size: 0.8rem;
  grid-row: 3;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
`;

const SkillImage = styled.div`
  background-image: ${props => `url(${props.background})`};

  ${'' /* background-image: url(${icon}); */}
  background-size: cover;
  grid-row: 1;
  width: 50px;
  height: 50px;
`;

export class Skills extends Component {
  render() {
    return (
      <div>
        <SkillsSectionContainer>
          <SkillsSummaryContainer>
            <SummaryText>
              I am endlessly curious about others and learning new things, and
              my intuitive sense for the needs of others allows me to create
              value-driven work. After years of working with youth and their
              families, I understand that connection happens on a deeper level
              of shared understanding. Technology gives us a space to tell a
              story and to invite others to be a part of it.
            </SummaryText>
          </SkillsSummaryContainer>
          <SingleSkillContainer row={2} column={1}>
            <SkillImage background={icon} />
            <SkillHeader>Work from love</SkillHeader>
            <SkillBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis scelerisque lectus.
            </SkillBody>
          </SingleSkillContainer>
          <SingleSkillContainer row={2} column={2}>
            <SkillImage background={icon} />
            <SkillHeader>Work from love</SkillHeader>
            <SkillBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis scelerisque lectus.
            </SkillBody>
          </SingleSkillContainer>
          <SingleSkillContainer row={2} column={3}>
            <SkillImage background={icon} />
            <SkillHeader>Work from love</SkillHeader>
            <SkillBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis scelerisque lectus.
            </SkillBody>
          </SingleSkillContainer>
          <SingleSkillContainer row={2} column={4}>
            <SkillImage background={icon} />
            <SkillHeader>Work from love</SkillHeader>
            <SkillBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis scelerisque lectus.
            </SkillBody>
          </SingleSkillContainer>
          <SingleSkillContainer row={3} column={1}>
            <SkillImage background={icon} />
            <SkillHeader>Work from love</SkillHeader>
            <SkillBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis scelerisque lectus.
            </SkillBody>
          </SingleSkillContainer>
          <SingleSkillContainer row={3} column={2}>
            <SkillImage background={icon} />
            <SkillHeader>Work from love</SkillHeader>
            <SkillBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis scelerisque lectus.
            </SkillBody>
          </SingleSkillContainer>
          <SingleSkillContainer row={3} column={3}>
            <SkillImage background={icon} />
            <SkillHeader>Work from love</SkillHeader>
            <SkillBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis scelerisque lectus.
            </SkillBody>
          </SingleSkillContainer>
          <SingleSkillContainer row={3} column={4}>
            <SkillImage background={icon} />
            <SkillHeader>Work from love</SkillHeader>
            <SkillBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              quis scelerisque lectus.
            </SkillBody>
          </SingleSkillContainer>
        </SkillsSectionContainer>
      </div>
    );
  }
}

export default Skills;
