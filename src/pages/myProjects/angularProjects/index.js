import React from "react";
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

export const AngularPage = () => {
  return (
    <ProjectsContainer>
      <HeaderContainer>
        <ProjectTitle>Projetos Angular</ProjectTitle>
      </HeaderContainer>
      <ProjectCard>
        <Title>Controle Estoque</Title>
        <ImageContainer>
          {/* <Image src={} alt="InstaDogs"/> */}
        </ImageContainer>
        <SubTitle>
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
        </SubTitle>
      </ProjectCard>

      <ProjectCard>
        <Title>Projeto CRUD</Title>
        <ImageContainer>
          {/* <Image src={} alt="InstaDogs"/> */}
        </ImageContainer>
        <SubTitle>
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
        </SubTitle>
      </ProjectCard>

      <ProjectCard>
        <Title>Aplicativo Previsão do Tempo</Title>
        <ImageContainer>
          {/* <Image src={} alt="InstaDogs"/> */}
        </ImageContainer>
        <SubTitle>
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
        </SubTitle>
      </ProjectCard>
    </ProjectsContainer>
  );
};
