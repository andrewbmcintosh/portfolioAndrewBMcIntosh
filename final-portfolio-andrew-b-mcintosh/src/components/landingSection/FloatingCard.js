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
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 5px 10px;
  text-align: center;
`;

const CardBodyText = styled.p`
  ${'' /* padding: 1vw; */}
  font-size: 1.8vw;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin: auto;
  text-align: center;
  vertical-align: middle;
`;

export class FloatingCard extends Component {
  render() {
    return (
      <CardDiv>
        <CardBodyText>
          Full stack web developer with skills in React, Python, Javascript,
          Express and a passion for connecting people.
        </CardBodyText>
      </CardDiv>
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
