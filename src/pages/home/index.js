// Home.js
import React from "react";
import {
  Container,
  ProfessionalSummary,
  Title,
  Description,
  CommonContainer,
  CommonCard,
  CardTitle,
  CardSubtitle,
  CardP,
} from "./styles";
import { FadeIn } from "../../components/fadeIn";
import { FaEnvelope, FaLaptop, FaTools, FaBook } from "react-icons/fa";

export const Home = () => {
  return (
    <FadeIn>
      <Container>
        <ProfessionalSummary>
          <Title>Gabriel Barbosa dos Santos</Title>
          <Description>
            Estudante de Ciências da Computação e Desenvolvedor, estou buscando
            novas oportunidades para crescer profissionalmente e aprofundar
            conhecimentos em tecnologias.
          </Description>
        </ProfessionalSummary>

        <CommonContainer>
          <CommonCard>
            <CardTitle>Experiência<FaTools style={{marginLeft:'10px'}}/></CardTitle>
            <CardSubtitle>
              Estágio em Desenvolvimento - UniversalPay
            </CardSubtitle>
            <CardP>
              - Participação ativa na criação e manutenção do aplicativo
              UniversalPay, utilizando React Native com auxílio Expo.
            </CardP>
            <CardP>
              - Realização de manutenções no site de pagamentos, com o uso de
              Angular 14.
            </CardP>

            <CardP>
              - Realização de manutenções na parte de back-end, utilizando .NET 5
            </CardP>
            <CardP>
              - Execução de consultas SQL e realização de testes com Postman.
            </CardP>
          </CommonCard>
        </CommonContainer>

        <CommonContainer>
          <CommonCard>
            <CardTitle>Habilidades<FaLaptop style={{marginLeft:'10px'}}/></CardTitle>
            <ul>
              <li>- React Native</li>
              <li>- Styled-Components</li>
              <li>- Angular</li>
              <li>- SQL</li>
              <li>- Postman</li>
              <li>- .NET</li>
            </ul>
          </CommonCard>
        </CommonContainer>

        <CommonContainer>
          <CommonCard>
            <CardTitle>Acadêmico<FaBook style={{marginLeft:'10px'}}/></CardTitle>
            <ul>
              <li>- Bacharelado em Ciências da Computação - <strong>5º semestre Universidade de Brasília (CEUB)</strong></li>
              <li>- Curso React - <strong>Origamid</strong></li>
              <li>- Formação Angular - <strong>Udemy</strong></li>
              <li>- Curso Web API ASP .NET Core Essencial (.NET 8) - <strong>Udemy</strong></li>
              <li>
              - Arquitetura de Microsserviços do 0 com ASP.NET, .NET 6 - <strong>Udemy</strong>
              </li>
            </ul>
          </CommonCard>
        </CommonContainer>

        <CommonContainer>
          <CommonCard>
            <CardTitle>Contato <FaEnvelope/></CardTitle>
            <ul>
              <li>E-mail : <strong>gabrielosantosb@gmail.com </strong></li>
              <li>Número: <strong > <a  style={{color: 'black'}} href="https://wa.me/61982420900" target="_blank" rel="noopener noreferrer">61982420900</a></strong></li>
            </ul>
          </CommonCard>
        </CommonContainer>
      </Container>
    </FadeIn>
  );
};
