import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import stockImage1 from "../../../assets/angularImages/controleEstoqueImages/stock1.png";
import stockImage2 from "../../../assets/angularImages/controleEstoqueImages/stock2.png";
import stockImage3 from "../../../assets/angularImages/controleEstoqueImages/stock3.png";
import stockImage4 from "../../../assets/angularImages/controleEstoqueImages/stock4.png";
import crudImage1 from "../../../assets/angularImages/crudAngular/crudImage1.png";
import crudImage2 from "../../../assets/angularImages/crudAngular/crudImage2.png";
import crudImage3 from "../../../assets/angularImages/crudAngular/crudImage3.png";
import weatherImage1 from "../../../assets/angularImages/weatherApplication/weatherImage1.png";
import weatherImage2 from "../../../assets/angularImages/weatherApplication/weatherImage2.png";
import weatherImage3 from "../../../assets/angularImages/weatherApplication/weatherImage3.png";
import {
  LinksContainer,
  ProjectCard,
  SubTitle,
  Title,
  TitleLink,
} from "../../projects/styles";

export const GalleryAngularImages = ({ stock, crud, weather }) => {
  const stockImages = [
    {
      original: stockImage1,
      thumbnail: stockImage1,
    },
    {
      original: stockImage2,
      thumbnail: stockImage2,
    },

    {
      original: stockImage3,
      thumbnail: stockImage3,
    },

    {
      original: stockImage4,
      thumbnail: stockImage4,
    },
  ];

  const crudImages = [
    {
      original: crudImage1,
      thumbnail: crudImage1,
    },
    {
      original: crudImage2,
      thumbnail: crudImage2,
    },

    {
      original: crudImage3,
      thumbnail: crudImage3,
    },
  ];

  const weatherImages = [
    {
      original: weatherImage1,
      thumbnail: weatherImage1,
    },
    {
      original: weatherImage2,
      thumbnail: weatherImage2,
    },

    {
      original: weatherImage3,
      thumbnail: weatherImage3,
    },
  ];

  if (stock)
    return (
      <ProjectCard>
        <Title>Controle-Estoque</Title>
        <ReactImageGallery
          items={stockImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
          Implementação de um Projeto Angular com consumo de API, abordando
          memory leaks, gerenciamento de cookies e autenticação."
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/ControleEstoque">
            Link para o repositório
          </TitleLink>
          {/* <TitleLink href="https://insta-dogs-nine.vercel.app/home">
            Link para o projeto
          </TitleLink> */}
        </LinksContainer>
      </ProjectCard>
    );
  if (crud)
    return (
      <ProjectCard>
        <Title>Projeto CRUD</Title>
        <ReactImageGallery
          items={crudImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
          Simplificando a gestão de usuários com consumo de API para adição,
          edição, atualização e remoção
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/crudAngular">
            Link para o repositório
          </TitleLink>
        </LinksContainer>
      </ProjectCard>
    );

  if (weather)
    return (
      <ProjectCard>
        <Title>Aplicativo Previsão do Tempo</Title>
        <ReactImageGallery
          items={weatherImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
          Um aplicativo simples e eficiente de previsão de tempo, consumindo API
          externa para oferecer informações atualizadas
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/WeatherApplication">
            Link para o repositório
          </TitleLink>
          <TitleLink href="https://vercel.com/gabrielosantosb/weather-application/CjtekH8TtwpwYWkqg8t6yiKMdLzP">
            Link para o projeto
          </TitleLink>
        </LinksContainer>
      </ProjectCard>
    );
};
