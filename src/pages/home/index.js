// Home.js
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
  ExperienceContainer,
  ExperienceCard,
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
        </SkillsContainer>
{/* 
        <ContactContainer>
          <ContactCard>
            <h3>Contato</h3>
            <ul>
              <li>Website: <a href="https://portfoliopessoal-kappa.vercel.app" target="_blank" rel="noopener noreferrer">portfoliopessoal-kappa.vercel.app</a></li>
              <li>GitHub: <a href="https://github.com/Gabrielosantosb" target="_blank" rel="noopener noreferrer">Gabrielosantosb</a></li>
            </ul>
          </ContactCard>
        </ContactContainer> */}

        <ExperienceContainer>
          <ExperienceCard>
            <h3>Experiência</h3>
            <p>
              <strong>Estágio em Desenvolvimento - UniversalPay</strong>
              <br />
              - Participação ativa na criação e manutenção do aplicativo UniversalPay, utilizando React Native com auxílio Expo.
              <br />
              - Realização de manutenções no site de pagamentos, com o uso de Angular 14.
              <br />
              - Execução de consultas SQL e realização de testes com Postman.
            </p>
          </ExperienceCard>          
        </ExperienceContainer>
      </Container>
    </FadeIn>
  );
};
