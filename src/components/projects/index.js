import React from "react";
import {
  Image,
  ImageContainer,
  ProjectsContainer,
  Title,
  SubTitle,
  TitleLink,
  LinksContainer,
  ProjectCard, // Novo componente de card
} from "./styles"; // Importe todos os estilos necessários
import instDogsImage from "../../imgs/instDogs.png";
import organoImage from "../../imgs/organo.png";
import hanoiTower from "../../imgs/torre.png";

export const Projects = () => {
  return (
    <ProjectsContainer>
      {/* Projeto 1 */}
      <ProjectCard>
        <Title>InstaDogs</Title>
        <ImageContainer>
          <Image src={instDogsImage} alt="InstaDogs" />
        </ImageContainer>
        <SubTitle>
          Uma Plataforma Inspirada no Instagram, Criada Especialmente para
          Nossos Amigos Caninos! Desenvolvida com React, Integração de APIs
          Avançadas e Foco em Design Responsivo
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/InstaDogs">Link para o código</TitleLink>
          <TitleLink href="https://insta-dogs-nine.vercel.app/home">Link para o projeto</TitleLink>
        </LinksContainer>
      </ProjectCard>

      {/* Projeto 2 */}
      <ProjectCard>
        <Title>Organo</Title>
        <ImageContainer>
          <Image src={organoImage} alt="organoImage" />
        </ImageContainer>
        <SubTitle>
          Criando um Projeto Simples em React para Gerenciar Funcionários de um
          Restaurante com Ênfase nos Princípios SOLID e local storage
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/organo2">Link para o código</TitleLink>
          <TitleLink href="https://organo-project-xi.vercel.app">Link para o projeto</TitleLink>
        </LinksContainer>
      </ProjectCard>

      {/* Projeto 3 */}
      <ProjectCard>
        <Title>Torre de Hanoi</Title>
        <ImageContainer>
          <Image src={hanoiTower} alt="hanoiTower" />
        </ImageContainer>
        <SubTitle>
          Consiste no famoso jogo da torre de Hanoi, em que se tem que levar os
          blocos na mesma ordem da primeira até a última torre, mas só se pode
          botar blocos menores em cima de maiores, envolvendo muita lógica.
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/hanoiTorre">Link para o código</TitleLink>
          <TitleLink href="https://hanoi-torre.vercel.app">Link para o projeto</TitleLink>
        </LinksContainer>
      </ProjectCard>
    </ProjectsContainer>
  );
};

// Restante do código
