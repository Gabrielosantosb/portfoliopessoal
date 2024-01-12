import React from 'react'
import {
    HeaderContainer,
    ProjectTitle,
    PageContainer,
    ProjectsContainer,
    ProjectCard,
    Title,
    ImageContainer,
    SubTitle,
  } from "../styles";
export const AcademicPage = () => {
  return (
    <ProjectsContainer>
    <HeaderContainer>
      <ProjectTitle>Projetos Academicos</ProjectTitle>
    </HeaderContainer>
    <ProjectCard>
      <Title>Montanha-Russa MultiThreads</Title>
      <ImageContainer>
        {/* <Image src={} alt="InstaDogs"/> */}
      </ImageContainer>
      <SubTitle>
        TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
      </SubTitle>
    </ProjectCard>

    <ProjectCard>
      <Title>CSV Data Process</Title>
      <ImageContainer>
        {/* <Image src={} alt="InstaDogs"/> */}
      </ImageContainer>
      <SubTitle>
        TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
      </SubTitle>
    </ProjectCard>

    <ProjectCard>
      <Title>Campo minado APP</Title>
      <ImageContainer>
        {/* <Image src={} alt="InstaDogs"/> */}
      </ImageContainer>
      <SubTitle>
        TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
      </SubTitle>
    </ProjectCard>
  </ProjectsContainer>
  )
}
