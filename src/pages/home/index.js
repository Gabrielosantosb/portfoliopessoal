import React from "react";
import { Container, Description, ProfessionalSummary, Title } from "./styles";
import { AnimatedPages, StyledFadeIn } from "../../styles/global";
import { useSpring, animated } from "react-spring";
import { FadeIn } from "../../components/fadeIn";

export const Home = () => {
  return (
    <FadeIn>
      <Container>
        <ProfessionalSummary>
          <Title>Professional Summary</Title>
          <Description>
            Experienced and passionate web developer with a strong background in
            front-end technologies. Proven ability to design and implement
            responsive and user-friendly interfaces. Detail-oriented with
            excellent problem-solving skills. Adept at collaborating with
            cross-functional teams to drive project success.
          </Description>
        </ProfessionalSummary>
      </Container>
    </FadeIn>
  );
};
