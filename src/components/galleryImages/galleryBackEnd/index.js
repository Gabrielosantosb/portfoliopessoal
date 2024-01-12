import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import lojaImage from "../../../assets/backEndProjects/lojaApi/lojaImage.png";
import minimalCatalogImage from "../../../assets/backEndProjects/minimalCatalogApi/minimalCatalogImage.png";
import crudImage from "../../../assets/backEndProjects/crud/crudImage.png";

import {
  LinksContainer,
  ProjectCard,
  SubTitle,
  Title,
  TitleLink,
} from "../../projects/styles";

export const GalleryBackEnd = ({ lojaAPI, crudAPI, catalogAPI }) => {
  const lojaImages = [
    {
      original: lojaImage,
    },
  ];

  const catalogImages = [
    {
      original: minimalCatalogImage,
    },
  ];

  const crudImages = [
    {
      original: crudImage,
    },
  ];
  if (lojaAPI)
    return (
      <ProjectCard>
        <Title>Loja API</Title>
        <ReactImageGallery
          items={lojaImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
          Um projeto completo da API de uma loja, desenvolvido .NET 5, que
          incorpora funcionalidades essenciais como migrations, autenticação por
          tokens e uma variedade de outras operações.
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/LojaAPI">
            Link para o repositório
          </TitleLink>
        </LinksContainer>
      </ProjectCard>
    );
  if (catalogAPI)
    return (
      <ProjectCard>
        <Title>Catalog Minimal API</Title>
        <ReactImageGallery
          items={catalogImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
          Uma Minimal API projetada para efetuar consultas de produtos e
          informações de clientes, desenvolvida utilizando .NET 6. Este projeto
          simplifica a interação com dados,e incorpora os recursos mais recentes
          e avançados oferecidos pela mais recente versão do .NET.
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/CatalogAPI">
            Link para o repositório
          </TitleLink>
        </LinksContainer>
      </ProjectCard>
    );
  if (crudAPI)
    return (
      <ProjectCard>
        <Title>Crud Angular Server</Title>
        <ReactImageGallery
          items={crudImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
          Uma API dedicada a dar suporte ao projeto AngularCrud, implementada
          com tecnologia .NET 5, proporcionando eficiência necessárias para a
          integração eficaz com a aplicação Angular
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/crud_angular_server">
            Link para o repositório
          </TitleLink>
        </LinksContainer>
      </ProjectCard>
    );
};
