// import React, { Component } from 'react';
// import styled from 'styled-components/macro';
// import { media } from '../../styleUtils.js';
// import ProjectCard from './ProjectCard';
// import ProjectCardTwo from './ProjectCardTwo';
// import ProjectCardThree from './ProjectCardThree';

// const BackgroundDiv = styled.div`
//   margin: 0;
//   padding: 0;
//   background-color: #354463;
//   ${media.phone`
//     background-color: #354463;
//   `}
// `;
// const ProjectSectionContainer = styled.div`
//   overflow-x: hidden;
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   grid-template-rows: auto auto auto;
//   column-gap: 1.5rem;
//   ${'' /* margin: 0 1.5rem; */}
//   background-color: #354463;
//   ${media.phone`
//       grid-template-columns: repeat(4, 1fr);
//       grid-template-rows: auto auto auto auto auto;
//       column-gap: 1rem;
//       ${'' /* margin: 0 1.5rem; */}
//       background-color: #354463;
//   `}
//   ${media.tablet`
//       grid-template-columns: repeat(4, 1fr);
//       grid-template-rows: auto auto auto;
//       column-gap: 1rem;
//       margin: 0 1.5rem;
//       padding-top: 1.5rem;
//       background-color: #354463;
//   `}
// `;
// const ProjectsContainer = styled.div`
//   overflow: hidden;
//   display: grid;
//   grid-gap: 1.25rem;
//   ${'' /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */}
//   ${media.tablet`
//   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//     grid-column: 1 / 5;
//   grid-row: 3;
//   grid-gap: 1rem;
//   place-content: stretch;
//   justify-items: center;
//   `}
//   ${media.phone`
//   align-content: space-around;
//   justify-content: stretch;
//   grid-column: 1 / 5;
//   grid-row: 3;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   grid-template-rows: auto auto auto;
//   grid-gap: 6rem;
//   padding-top: 4rem;
//   margin: 2.5rem .5rem;
//   `}
// `;

// const SummaryText = styled.div`
//   font-family: 'Open Sans', sans-serif;
//   color: white;
//   font-size: 1.5rem;
//   margin: 0;
//   padding: 0;
//   font-weight: 700;
//   text-align: center;
//   vertical-align: middle;
//   display: inline-block;
//   ${media.phone`
//     font-size: 1.25rem;
//     grid-column: 1 / 5;
//   `}
//   ${media.tablet`
//     font-size: 1.25rem;
//     grid-column: 1 / 5;
//   `}
// `;

// const TitleBox = styled.div`
//   position: relative;
//   place-self: center;
//   text-align: center;
//   grid-column: 1 / 9;
//   background: #ffffff;
//   color: #354463;
//   grid-row: 1;
//   font-size: 1em;
//   font-family: 'Open Sans', sans-serif;
//   font-weight: 700;
//   margin-bottom: 1rem;
//   padding: 0.5rem 2rem;
//   border-radius: ;
//   z-index: 1;
//   ${media.phone`
//     font-size: 1.25rem;
//     grid-column: 1 / 5;
//   `}
//   ${media.tablet`
//     font-size: 1.25rem;
//     grid-column: 1 / 5;
//   `}
// `;

// export class ProjectSection extends Component {
//     render() {
//         return (
//             <BackgroundDiv>
//                 <ProjectSectionContainer>
//                     <TitleBox>My Work</TitleBox>
//                     <SummaryText>
//                         I am endlessly curious about others and learning new things, and my
//                         intuitive sense for the needs of others allows me to create
//                         value-driven work.
//           </SummaryText>
//                     <ProjectsContainer>
//                         <ProjectCard />
//                         <ProjectCardTwo />
//                         <ProjectCardThree />
//                     </ProjectsContainer>
//                 </ProjectSectionContainer>
//             </BackgroundDiv>
//         );
//     }
// }

// export default ProjectSection;
