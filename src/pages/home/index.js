
import React from "react";
import {
  Container,
  ProfessionalSummary,
  Title,
  Description,
  SkillsContainer,
  SkillCard,
  ContactContainer,
  ContactCard,
} from "./styles";
import { FadeIn } from "../../components/fadeIn";

export const Home = () => {
  return (
    <FadeIn>
      <Container>
        <ProfessionalSummary>
          <Title>Gabriel Barbosa dos Santos</Title>
          <Description>
            Estudante de Ciências da Computação, entusiasta da programação,
            dedicado a buscar oportunidades para crescer profissionalmente e aprofundar
            conhecimentos em tecnologias modernas. Possuo facilidade de aprendizado,
            habilidades em comunicação e um comprometimento constante com a evolução pessoal.
          </Description>
        </ProfessionalSummary>

        <SkillsContainer>
          <SkillCard>
            <h3>Habilidades</h3>
            <ul>
              <li>Lógica de Programação</li>
              <li>React Native</li>
              <li>Angular</li>              
              <li>SQL</li>
              <li>Postman</li>
              <li>.NET</li>                                                                            
            </ul>
          </SkillCard>
        <ContactContainer>
          <ContactCard>
            <h3>Contato</h3>
            <ul>
              <li>Website: <a href="https://portfoliopessoal-kappa.vercel.app" target="_blank" rel="noopener noreferrer">portfoliopessoal-kappa.vercel.app</a></li>
              <li>GitHub: <a href="https://github.com/Gabrielosantosb" target="_blank" rel="noopener noreferrer">Gabrielosantosb</a></li>
            </ul>
          </ContactCard>
        </ContactContainer>
        </SkillsContainer>


      </Container>
    </FadeIn>
  );
};
