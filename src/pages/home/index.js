import React from 'react';
import styled from 'styled-components';
import { Container, Description, ProfessionalSummary, Title } from './styles';



export const Home = () => {
  return (
    <Container>
      <ProfessionalSummary>
        <Title>Professional Summary</Title>
        <Description>
          Experienced and passionate web developer with a strong background in front-end technologies. 
          Proven ability to design and implement responsive and user-friendly interfaces. 
          Detail-oriented with excellent problem-solving skills. 
          Adept at collaborating with cross-functional teams to drive project success.
        </Description>
      </ProfessionalSummary>
    </Container>
  );
};
