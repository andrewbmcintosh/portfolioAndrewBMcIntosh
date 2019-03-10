import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

const CardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  grid-column: 1/4;
  grid-row: 2/4;
  box-shadow: 5px 10px;
  z-index: 1;
  text-align: center;
`;
const BlueDiv = styled.div`
  background-color: navy;
  justify-self: stretch;
  grid-column: 2/3;
  grid-row: 1/2;
  margin: 0;
  color: white;
  height: 200%;
  z-index: 2;
  box-shadow: 1px 1px 8px #888888;
`;

const StyledDiv = styled.div`
  display: grid;
  max-width: 60rem;
  max-height: 60rem;
  grid-template-columns: 3fr 2fr 1fr;
  grid-template-rows: 10% 1fr 1fr;
`;

const BlueCardBodyText = styled.p`
  text-align: center;
  font-size: 1.8vw;
  font-family: 'Playfair Display', serif;
  color: white;
`;

const CardBodyText = styled.p`
  ${'' /* padding: 1vw; */}
  font-size: 1.8vw;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  display: inline-block;

  ${'' /* @media (max-width: 700px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
    padding: 0.7rem;
  } */}
`;

export class FloatingCard extends Component {
  render() {
    return (
      <StyledDiv>
        <BlueDiv>
          <BlueCardBodyText>Who:</BlueCardBodyText>
        </BlueDiv>
        <CardDiv>
          <Container>
            <CardBodyText>
              Full stack web developer with skills in React, Python, Javascript,
              Express and a passion for connecting people.
            </CardBodyText>
          </Container>
        </CardDiv>
      </StyledDiv>
    );
  }
}

export default FloatingCard;

// const CardDiv = styled.div`
//   background-color: white;

//   justify: top;
//   width: 417px;
//   height: 200px;
//   shadow: 5;
//   z-index: -1;
// `;
// const BlueDiv = styled.div`
//   background-color: navy;
//   position: absolute;
//   margin-top: -25px;
//   margin-left: 100px
//   color: white;
//   width: 165px;
//   height: 42px;
//   shadow: 5;
//   z-index: 1;
// `;

// const StyledDiv = styled.div`
//   padding-top: 130px;
//   position: absolute;
//   margin-left: auto;
//   right: 5%;
//   left: auto;
// `;

// export class FloatingCard extends Component {
//     render() {
//         return (
//             <StyledDiv>
//                 <BlueDiv>
//                     <p>Andrew</p>
//                 </BlueDiv>
//                 <CardDiv>
//                     <Container>
//                         <h1>Hello</h1>
//                     </Container>
//                 </CardDiv>
//             </StyledDiv>
//         );
//     }
// }

// export default FloatingCard;
