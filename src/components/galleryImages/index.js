import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import dogsImage1 from "../../assets/reactImages/instaDogs/dogsImage1.png";
import dogsImage2 from "../../assets/reactImages/instaDogs/dogsImage2.png";
import dogsImage3 from "../../assets/reactImages/instaDogs/dogsImage3.png";
import hanoiImage1 from "../../assets/reactImages/hanoiMobile/hanoiImage1.jpeg";
import hanoiImage2 from "../../assets/reactImages/hanoiMobile/hanoiImage2.jpeg";
import hanoiImage3 from "../../assets/reactImages/hanoiMobile/hanoiImage3.jpeg";
import hanoiImage4 from "../../assets/reactImages/hanoiMobile/hanoiImage4.jpeg";
import hanoiImage5 from "../../assets/reactImages/hanoiMobile/hanoiImage5.jpeg";
import hanoiImage6 from "../../assets/reactImages/hanoiMobile/hanoiImage6.jpeg";
import organoImage1 from "../../assets/reactImages/organo/organo1.png";
import organoImage2 from "../../assets/reactImages/organo/organo2.png";
import organoImage3 from "../../assets/reactImages/organo/organo3.png";
import organoImage4 from "../../assets/reactImages/organo/organo4.png";

import {
  LinksContainer,
  ProjectCard,
  SubTitle,
  Title,
  TitleLink,
} from "../projects/styles";
// import { Container } from './styles';

export const GalleryImages = ({ instaDogs, hanoi, organo }) => {
  const instaDogsImages = [
    {
      original: dogsImage1,
      thumbnail: dogsImage1,
    },
    {
      original: dogsImage2,
      thumbnail: dogsImage2,
    },

    {
      original: dogsImage3,
      thumbnail: dogsImage3,
    },
  ];

  const hanoiImages = [
    {
      original: hanoiImage1,
      thumbnail: hanoiImage1,
    },
    {
      original: hanoiImage2,
      thumbnail: hanoiImage2,
    },

    {
      original: hanoiImage3,
      thumbnail: hanoiImage3,
    },
    {
      original: hanoiImage4,
      thumbnail: hanoiImage4,
    },
    {
      original: hanoiImage5,
      thumbnail: hanoiImage5,
    },
    {
      original: hanoiImage6,
      thumbnail: hanoiImage6,
    },
  ];

  const organoImages = [
    {
      original: organoImage1,
      thumbnail: organoImage1,
    },
    {
      original: organoImage2,
      thumbnail: organoImage2,
    },

    {
      original: organoImage3,
      thumbnail: organoImage3,
    },

    {
      original: organoImage4,
      thumbnail: organoImage4,
    },
  ];

  if (instaDogs)
    return (
      <ProjectCard>
        <Title>InstaDogs</Title>
        <ReactImageGallery
          items={instaDogsImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
          Uma plataforma inspirada no Instagram, criada especialmente para
          nossos cachorros! Desenvolvida com React, Integração de APIs avançadas
          e foco em design responsivo
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/InstaDogs">
            Link para o código
          </TitleLink>
          <TitleLink href="https://insta-dogs-nine.vercel.app/home">
            Link para o projeto
          </TitleLink>
        </LinksContainer>
      </ProjectCard>
    );
  if (hanoi)
    return (
      <ProjectCard>
        <Title>Torre de Hanoi Mobile</Title>
        <ReactImageGallery
          items={hanoiImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
          Consiste no famoso jogo da torre de Hanoi, em que se tem que levar os
          blocos na mesma ordem da primeira até a última torre, mas só se pode
          botar blocos menores em cima de maiores, feito em Expo para mobile.
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/hanoiTorreMobile">
            Link para o código
          </TitleLink>
        </LinksContainer>
      </ProjectCard>
    );

  if (organo)
    return (
      <ProjectCard>
        <Title>Organo</Title>
        <ReactImageGallery
          items={organoImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
          Criando um Projeto Simples em React para Gerenciar Funcionários de um
          Restaurante com Ênfase nos Princípios SOLID e local storage
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/organo2">
            Link para o código
          </TitleLink>
          <TitleLink href="https://organo-project-xi.vercel.app">
            Link para o projeto
          </TitleLink>
        </LinksContainer>
      </ProjectCard>
    );
};
