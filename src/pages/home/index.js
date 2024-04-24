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
  TitleIntrodution,
  TitleName,
  MyNameContainer,
  NameText,
  DescriptionRed,
  DescriptionConteiner,
  ContainerIntodrodution,
  SVGContainer,
} from "./styles";
import DeveloperSVG from "../../assets/svg/developerImg.svg"
import { FadeIn } from "../../components/fadeIn";
import { FaEnvelope, FaLaptop, FaTools, FaBook } from "react-icons/fa";

export const Home = () => {
  return (
    <FadeIn>
      <ContainerIntodrodution>
        <ProfessionalSummary>
          <MyNameContainer>
            <TitleIntrodution>
              Olá, meu nome é <br />
              <NameText>Gabriel Barbosa</NameText>
            </TitleIntrodution>
          </MyNameContainer>
          <DescriptionConteiner>
            <Description>
              Sou um <DescriptionRed>Desenvolvedor</DescriptionRed> com experiência em integração e programação, especializado em <DescriptionRed>React Native</DescriptionRed>, <DescriptionRed>Angular</DescriptionRed> e <DescriptionRed>.NET</DescriptionRed>, estou atualmente aprimorando meus conhecimentos como estudante de Ciências da Computação. Estou sempre aberto a novas oportunidades e desafios.
            </Description>
          </DescriptionConteiner>
        </ProfessionalSummary>
        <SVGContainer>
          <img src={DeveloperSVG} alt="DeveloperSVG" style={{ width: '500px', height: '600px' }} />
        </SVGContainer>
      </ContainerIntodrodution>
      {/* 
        <CommonContainer>
          <CommonCard>
            <CardTitle>Experiência<FaTools style={{ marginLeft: '10px' }} /></CardTitle>
            <CardSubtitle>
              Estágio em Desenvolvimento - UniversalPay
            </CardSubtitle>
            <CardP>
              - Participação ativa na criação e manutenção do aplicativo
              UniversalPay, utilizando React Native com auxílio Expo.
            </CardP>
            <CardP>
              - Realização de manutenções no site de pagamentos, com o uso do
              Angular.
            </CardP>
            <CardP>
              -Integrações, melhorias e resoluções de problemas no sistema Back-End, com o uso de .NET
            </CardP>
            <CardP>
              -Atualmente participo ativamente na implementação de
              melhorias nas principais aplicações da
              empresa, tanto Front-End em Angular, como
              em .NET
            </CardP>
          </CommonCard>
        </CommonContainer>

        <CommonContainer>
          <CommonCard>
            <CardTitle>Habilidades<FaLaptop style={{ marginLeft: '10px' }} /></CardTitle>
            <ul>
              <li> ✔<strong>Front-End:</strong> React-Native,
                Angular, HTML/CSS, JavaScript,
                TypeScript</li>
              <li> ✔<strong>Back-End</strong>: ASP .NET Core,
                SQL,Postman, EntityFramework,
                SQL</li>
              <li>✔ <strong>Adicionais:</strong> Git, Docker,
                ExpoGO, Styled-Components</li>
            </ul>
          </CommonCard>
        </CommonContainer>

        <CommonContainer>
          <CommonCard>
            <CardTitle>Acadêmico<FaBook style={{ marginLeft: '10px' }} /></CardTitle>
            <ul>
              <li>- Bacharelado em Ciências da Computação - <strong>5º semestre Universidade de Brasília (CEUB)</strong></li>
              <li>- Curso React - <strong>Origamid</strong></li>
              <li>- Formação Angular(v2+) - <strong>LoianeTrainig</strong></li>
              <li>- Formaçãao Angular 2024 - <strong>Udemy</strong></li>
              <li>- Curso Web API ASP .NET Core Essencial (.NET 8) - <strong>Udemy</strong></li>
              <li>- Arquitetura de Microsserviços com ASP.NET, .(NET 6)- <strong>Udemy</strong></li>
              <li>
                - Desenvolvimento WEB - <strong>Udemy</strong>
              </li>
            </ul>
          </CommonCard>
        </CommonContainer>

        <CommonContainer>
          <CommonCard>
            <CardTitle>Contato <FaEnvelope /></CardTitle>
            <ul>
              <li>E-mail : <strong>gabrielosantosb@gmail.com </strong></li>
              <li>Número: <strong > <a style={{ color: 'black' }} href="https://wa.me/61982420900" target="_blank" rel="noopener noreferrer">61982420900</a></strong></li>
            </ul>
          </CommonCard>
        </CommonContainer> */}
      {/* </Container> */}
    </FadeIn>
  );
};
