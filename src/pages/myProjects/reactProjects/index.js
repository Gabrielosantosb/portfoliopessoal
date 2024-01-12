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
export const ReactPage = ()=>{
  return (
    <ProjectsContainer>
      <HeaderContainer>
        <ProjectTitle>Projetos React</ProjectTitle>
      </HeaderContainer>
      <ProjectCard>
        <Title>InstaDogs</Title>
        <ImageContainer>
          {/* <Image src={} alt="InstaDogs"/> */}
        </ImageContainer>
        <SubTitle>
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
        </SubTitle>
      </ProjectCard>

      <ProjectCard>
        <Title>Aplicativo Torre de Hanoi</Title>
        <ImageContainer>
          {/* <Image src={} alt="InstaDogs"/> */}
        </ImageContainer>
        <SubTitle>
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
        </SubTitle>
      </ProjectCard>

      <ProjectCard>
        <Title>Organo</Title>
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

