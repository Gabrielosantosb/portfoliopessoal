import React from 'react'
import {
    HeaderContainer,
    ProjectTitle,    
    ProjectsContainer,
    ProjectCard,
    Title,
    ImageContainer,
    SubTitle,
  } from "../styles";
export const BackEndPage = () => {
  return (
    <ProjectsContainer>
      <HeaderContainer>
        <ProjectTitle>Projetos Back-End</ProjectTitle>
      </HeaderContainer>
      <ProjectCard>
        <Title>Complete CatalogAPI</Title>
        <ImageContainer>
          {/* <Image src={} alt="InstaDogs"/> */}
        </ImageContainer>
        <SubTitle>
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
        </SubTitle>
      </ProjectCard>

      <ProjectCard>
        <Title>Minimal API Catalog</Title>
        <ImageContainer>
          {/* <Image src={} alt="InstaDogs"/> */}
        </ImageContainer>
        <SubTitle>
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
        </SubTitle>
      </ProjectCard>

      <ProjectCard>
        <Title>CRUD Service</Title>
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
