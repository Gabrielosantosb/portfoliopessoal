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
import todoImage1 from "../../../assets/angularImages/todoImages/todoImage1.png"
import todoImage2 from "../../../assets/angularImages/todoImages/todoImage2.png"
import todoImage3 from "../../../assets/angularImages/todoImages/todoImage3.png"
import todoImage4 from "../../../assets/angularImages/todoImages/todoImage4.png"
import anamneseImage1 from "../../../assets/angularImages/anamnese/anamnese1.png"
import anamneseImage2 from "../../../assets/angularImages/anamnese/anamnese2.png"
import anamneseImage3 from "../../../assets/angularImages/anamnese/anamnese3.png"
import anamneseImage4 from "../../../assets/angularImages/anamnese/anamnese-4.png"
import anamneseImage5 from "../../../assets/angularImages/anamnese/anamnese5.png"
import anamneseImage6 from "../../../assets/angularImages/anamnese/anamnese6.png"
import anamneseImage7 from "../../../assets/angularImages/anamnese/anamnese7.png"

import paymentImage1 from "../../../assets/angularImages/payment_simulation/simulation1.png"
import paymentImage2 from "../../../assets/angularImages/payment_simulation/simulation2.png"
import paymentImage3 from "../../../assets/angularImages/payment_simulation/simulation_3.png"
import paymentImage4 from "../../../assets/angularImages/payment_simulation/simulation_4.png"
import paymentImage5 from "../../../assets/angularImages/payment_simulation/simulation_5.png"



import {
  LinksContainer,
  ProjectCard,
  SubTitle,
  Title,
  TitleLink,
} from "../../projects/styles";

export const GalleryAngularImages = ({ stock, crud, todo, weather,anamnese, paymentSimulation }) => {



  const paymentSimulationImages = [
    {
      original: paymentImage1,
      thumbnail: paymentImage1,
    },
    {
      original: paymentImage2,
      thumbnail: paymentImage2,
    },

    {
      original: paymentImage3,
      thumbnail: paymentImage3,
    },

    {
      original: paymentImage4,
      thumbnail: paymentImage4,
    },
    {
      original: paymentImage5,
      thumbnail: paymentImage5,
    },    
  ];

  const anamneseImages = [
    {
      original: anamneseImage1,
      thumbnail: anamneseImage1,
    },
    {
      original: anamneseImage2,
      thumbnail: anamneseImage2,
    },

    {
      original: anamneseImage3,
      thumbnail: anamneseImage3,
    },

    {
      original: anamneseImage4,
      thumbnail: anamneseImage4,
    },
    {
      original: anamneseImage5,
      thumbnail: anamneseImage5,
    },
    {
      original: anamneseImage5,
      thumbnail: anamneseImage5,
    },
    {
      original: anamneseImage6,
      thumbnail: anamneseImage6,
    },
    {
      original: anamneseImage7,
      thumbnail: anamneseImage7,
    },
  ];

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

  const todoImages = [
    {
      original: todoImage1,
      thumbnail: todoImage1,
    },
    {
      original: todoImage2,
      thumbnail: todoImage2,
    },

    {
      original: todoImage3,
      thumbnail: todoImage3,
    },

    {
      original: todoImage4,
      thumbnail: todoImage4,
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

  if (anamnese)
  return (
    <ProjectCard>
      <Title>Projeto Anamnese</Title>
      <ReactImageGallery
        items={anamneseImages}
        showPlayButton={false}
        slideInterval={1000}
      ></ReactImageGallery>
      <SubTitle>
      Projeto em Angular para aprimorar nosso sistema de ficha anamnese, onde integramos autenticação e preenchimento de formulários de forma eficiente. Uma das peças-chave desse projeto é a utilização da biblioteca PrimeNG.
      </SubTitle>
      <LinksContainer>
        <TitleLink href="https://github.com/Gabrielosantosb/Anamnese-FrontEnd">
          Link para o repositório
        </TitleLink>
        {/* <TitleLink href="https://insta-dogs-nine.vercel.app/home">
          Link para o projeto
        </TitleLink> */}
      </LinksContainer>
    </ProjectCard>
  );

  if(paymentSimulation)
  return (
    <ProjectCard>
      <Title>Simualação de Pagamento</Title>
      <ReactImageGallery
        items={paymentSimulationImages}
        showPlayButton={false}
        slideInterval={1000}
      ></ReactImageGallery>
      <SubTitle>
      Este projeto Angular destaca a criação de uma interface responsiva e atraente, priorizando HTML e CSS. Embora a lógica de programação seja secundária, o foco está na usabilidade e na estética, com atenção especial à adaptação a diferentes dispositivos e à acessibilidade para todos os usuários.
      </SubTitle>
      <LinksContainer>
        <TitleLink href="https://github.com/Gabrielosantosb/SimulacaoPagamento">
          Link para o repositório
        </TitleLink>
        {/* <TitleLink href="https://insta-dogs-nine.vercel.app/home">
          Link para o projeto
        </TitleLink> */}
      </LinksContainer>
    </ProjectCard>
  );

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
  
    if(todo)
    return (
      <ProjectCard>
        <Title>Lista de Tarefas</Title>
        <ReactImageGallery
          items={todoImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
        Um projeto básico que se concentra na implementação de uma lista de tarefas, destacando especialmente o uso de componentes independentes (standalone), sinais (signal), e armazenamento local (localStorage).
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://to-do-list-chi-ochre.vercel.app/">
            Link para o Projeto
          </TitleLink>
          <TitleLink href="https://github.com/Gabrielosantosb/to-do-list">
            Link para o código
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
