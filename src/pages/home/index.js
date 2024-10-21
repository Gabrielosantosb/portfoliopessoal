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
    SkillsContainer,
    ExperienceSubtitle,
    ExperienceTitle,
    ContainerResumo,
    AcademicConteiner,
    Academic,
    AcademicText,
    Profissional,
    DescriptionExperience,
    ExperienceDescriptionConteiner,
    DescriptionBolder,
    DivisorImage,
    DivisorContainer,
    InformationContainer,
    InformationText,
    CertificationSVG,
    WppButton,
    WhatsAppButton,
    WhatsAppButtonConteiner,
    ImgSVG,
} from "./styles";
import DeveloperSVG from "../../assets/svg/developerImg.svg"
import CertificateSVG from "../../assets/svg/certification.svg"
import DivisorPNG from "../../imgs/background/Divisor.png"
import WppButtonPNG from "../../imgs/background/buttonWpp.png"
import {FaWhatsapp} from "react-icons/fa";


export const Home = () => {

    const handleWppButtonClick = () => {
        window.open("https://wa.me/61982420900", "_blank");
    };

    return (
        <>
            <ContainerResumo>
                <ContainerIntodrodution>
                    <ProfessionalSummary>
                        <MyNameContainer>
                            <TitleIntrodution>
                                Olá, meu nome é <br/>
                                <NameText>Gabriel Barbosa</NameText>
                            </TitleIntrodution>
                        </MyNameContainer>
                        <DescriptionConteiner>
                            <Description>
                                Sou um <DescriptionRed>Desenvolvedor</DescriptionRed> com experiência em integração e
                                programação. Minhas habilidades se destacam principalmente em <DescriptionRed>React
                                Native</DescriptionRed>, <DescriptionRed>Angular</DescriptionRed> e <DescriptionRed>.NET</DescriptionRed>.
                                Atualmente, estou aprimorando meus conhecimentos como estudante de Ciências da
                                Computação. Estou sempre aberto a novas oportunidades e desafios.
                            </Description>
                        </DescriptionConteiner>
                        <WhatsAppButtonConteiner>
                            <WhatsAppButton onClick={handleWppButtonClick}>Entre em contato <FaWhatsapp
                                className="whatsapp-icon"/></WhatsAppButton>
                        </WhatsAppButtonConteiner>
                    </ProfessionalSummary>
                    <SVGContainer>
                        <ImgSVG src={DeveloperSVG} alt="DeveloperSVG"/>
                    </SVGContainer>
                </ContainerIntodrodution>
            </ContainerResumo>

            <ProfissionalExperienceConteiner>
                <Profissional>
                    <ProfissionalExperience>
                        <ExperienceTitle>Experiência Profissional</ExperienceTitle>
                        <ExperienceSubtitle>Estágio em Desenvolvimento - UniversalPay • 03/2023 –
                            06/2024</ExperienceSubtitle>
                        <ExperienceDescriptionConteiner>
                            <DescriptionExperience>
                                ● Participação ativa na <DescriptionRed>criação e manutenção</DescriptionRed> do
                                aplicativo <DescriptionRed>UniversalPay</DescriptionRed>, utilizando <DescriptionRed>React
                                Native</DescriptionRed> com auxílio Expo.<br></br>

                                ● Realização de <DescriptionRed>manutenções no site de pagamentos</DescriptionRed>,com o
                                uso do Angular<br></br>

                                ● Integrações, melhorias e resoluções de problemas
                                nosistema <DescriptionRed>Back-End</DescriptionRed>, com o uso
                                de <DescriptionRed>.NET</DescriptionRed><br></br>

                                ● Atualmente participo ativamente na implementaçãode melhorias nas principais aplicações
                                da empresa,tanto <DescriptionRed>Front-End</DescriptionRed> em Angular, como em
                                .NET<br></br>
                            </DescriptionExperience>
                        </ExperienceDescriptionConteiner>
                        <ExperienceSubtitle>Desenvolvedor Júnior Full-Stack - VenderGás • 07/2024 -
                            Atualmente</ExperienceSubtitle>
                        <ExperienceDescriptionConteiner>
                            <DescriptionExperience>
                                ● Implementação de melhorias contínuas e novas funcionalidades
                                em <DescriptionRed>Angular</DescriptionRed>.<br></br>

                                ●  Experiência no desenvolvimento Front-End com <DescriptionRed>React</DescriptionRed>, focando na manutenção e implementação de novas funcionalidades.<br></br>

                                ● Manutenção e resolução de problemas no Back-End
                                utilizando <DescriptionRed>Node.js</DescriptionRed>, aprimorando a
                                eficiência e estabilidade do sistema.<br></br>

                                ● Responsável pelo desenvolvimento do sistema de administração da empresa
                                em <DescriptionRed>Angular</DescriptionRed>,
                                integrando soluções de gestão interna.
                            </DescriptionExperience>

                        </ExperienceDescriptionConteiner>
                    </ProfissionalExperience>


                    <DivisorImage src={DivisorPNG} alt="Divisor"/>


                    <SkillsContainer>
                        <ExperienceTitle>Minhas habilidades</ExperienceTitle>
                        <ExperienceDescriptionConteiner>
                            <DescriptionExperience>
                                ● <DescriptionBolder>Front-End:</DescriptionBolder> React-Native, Angular,
                                HTML/CSS,JavaScript, TypeScript<br></br>

                                ● <DescriptionBolder>Back-End:</DescriptionBolder> ASP .NET Core,
                                SQL,Postman,EntityFramework, SQL<br></br>

                                ● <DescriptionBolder>Adicionais:</DescriptionBolder> Git, Docker, ExpoGO,
                                Styled-Components<br></br>

                            </DescriptionExperience>
                            <InformationContainer>
                                <InformationText>Estou sempre aberto a novos desafios e projetos
                                    desafiadores. Vamos trabalhar juntos para criar soluções incríveis para sua
                                    empresa!</InformationText>
                            </InformationContainer>
                        </ExperienceDescriptionConteiner>
                    </SkillsContainer>
                </Profissional>
            </ProfissionalExperienceConteiner>

            <AcademicConteiner>
                <Academic>
                    <ProfessionalSummary>
                        <MyNameContainer>
                            <TitleIntrodution>
                                Currículo Acadêmico <br/>
                                <NameText>Minhas formações</NameText>
                            </TitleIntrodution>
                        </MyNameContainer>
                        <DescriptionConteiner>
                            <Description>
                                <ul>
                                    <li>
                                        Bacharelado em <DescriptionRed>Ciências da Computação</DescriptionRed> - 6º
                                        semestre Universidade de Brasília (CEUB)
                                    </li>
                                    <li>
                                        Curso <DescriptionRed>React</DescriptionRed> - Origamid
                                    </li>
                                    <li>
                                        Formação Angular(v2+) - LoianeTrainig
                                    </li>
                                    <li>
                                        Formação <DescriptionRed>Angular</DescriptionRed> 2024 - Udemy
                                    </li>
                                    <li>
                                        Curso Web API <DescriptionRed>ASP .NET</DescriptionRed> Core Essencial (.NET 8)
                                        - Udemy
                                    </li>
                                    <li>
                                        Arquitetura de Microsserviços com <DescriptionRed>ASP.NET</DescriptionRed>, .NET
                                        6 - Udemy
                                    </li>
                                    <li>
                                        Desenvolvimento .NET CORE: <DescriptionRed>Orientado para mercado de
                                        trabalho</DescriptionRed> - Udemy
                                    </li>
                                    <li>
                                        Desenvolvimento <DescriptionRed>WEB</DescriptionRed> - Udemy
                                    </li>
                                </ul>
                            </Description>
                        </DescriptionConteiner>
                        <ButtonContainer>
                        </ButtonContainer>
                    </ProfessionalSummary>
                    <CertificationSVG>
                        <ImgSVG src={CertificateSVG} alt="CertificateSVG"/>
                    </CertificationSVG>
                </Academic>
            </AcademicConteiner>
        </>
    );
};
