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
  ButtonContainer,
  ProfissionalExperienceConteiner,
  ProfissionalExperience,
  ExerienceText,
  Divisor,
  Divider,
  MySkills,
  ExperienceText,
  ExperienceProfessional,
  SkillsContainer,
  ExperienceContainer,
  DividerExperience,
  ExperienceSubtitle,
  ExperienceTitle,
  ContainerResumo,
  AcademicConteiner,
  Academic,
  AcademicText,
  Profissional,
  DescriptionExperience,
  ExperienceDescriptionConteiner,
} from "./styles";
import DeveloperSVG from "../../assets/svg/developerImg.svg"
import CertificateSVG from "../../assets/svg/certification.svg"
import DivisorPNG from "../../imgs/background/Divisor.png"
import { FadeIn } from "../../components/fadeIn";
import { FaEnvelope, FaLaptop, FaTools, FaBook } from "react-icons/fa";
import { BasicButton } from "../../components/basicButton";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export const Home = () => {
  return (
    <FadeIn>
      <ContainerResumo>
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
            <ButtonContainer>

              <BasicButton title='Entrar em contato'></BasicButton>
            </ButtonContainer>
          </ProfessionalSummary>
          <SVGContainer>
            <img src={DeveloperSVG} alt="DeveloperSVG" style={{ width: '500px', height: '600px' }} />
          </SVGContainer>
        </ContainerIntodrodution>
      </ContainerResumo>

      <ProfissionalExperienceConteiner>
        <Profissional>
          <ProfissionalExperience>
            <ExperienceTitle>Experiência Profissional</ExperienceTitle>
            <ExperienceSubtitle>Estágio em Desenvolvimento - UniversalPay</ExperienceSubtitle>
            <ExperienceDescriptionConteiner>
              <DescriptionExperience>
                - Participação ativa na <DescriptionRed>criação e manutenção</DescriptionRed> do aplicativo <DescriptionRed>UniversalPay</DescriptionRed>, utilizando <DescriptionRed>React Native</DescriptionRed> com auxílio Expo.<br></br>

                - Realização de <DescriptionRed>manutenções no site de pagamentos</DescriptionRed>,com o uso do Angular<br></br>

                - Integrações, melhorias e resoluções de problemas nosistema <DescriptionRed>Back-End</DescriptionRed>, com o uso de <DescriptionRed>.NET</DescriptionRed><br></br>

                - Atualmente participo ativamente na implementaçãode melhorias nas principais aplicações da empresa,tanto <DescriptionRed>Front-End</DescriptionRed> em Angular, como em .NET<br></br>
              </DescriptionExperience>
            </ExperienceDescriptionConteiner>
          </ProfissionalExperience>
        </Profissional>
      </ProfissionalExperienceConteiner>

      <AcademicConteiner>
        <Academic>
          <ProfessionalSummary>
            <MyNameContainer>
              <TitleIntrodution>
                Currículo Acadêmico <br />
                <NameText>Minhas formações</NameText>
              </TitleIntrodution>
            </MyNameContainer>
            <DescriptionConteiner>
              <Description>
                - Bacharelado em Ciências da Computação - 5º semestre Universidade de Brasília (CEUB)<br></br>
                - Curso React - OrigamidFormação Angular(v2+) - LoianeTrainig<br></br>
                - Formação Angular 2024 - Udemy<br></br>
                - Curso Web API ASP .NET Core Essencial (.NET 8) -Udemy<br></br>
                - Arquitetura de Microsserviços com ASP.NET, .(NET 6)-Udemy<br></br>
                - Desenvolvimento WEB - Udemy<br></br>
              </Description>
            </DescriptionConteiner>
            <ButtonContainer>
            </ButtonContainer>
          </ProfessionalSummary>
          <SVGContainer>
            <img src={CertificateSVG} alt="CertificateSVG" style={{ width: '500px', height: '600px' }} />
          </SVGContainer>
        </Academic>
      </AcademicConteiner>
    </FadeIn>
  );
};
