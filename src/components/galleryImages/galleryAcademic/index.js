import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import coastImage1 from "../../../assets/academicProjects/RollerCoaster/coasterImage1.png";
import coastImage2 from "../../../assets/academicProjects/RollerCoaster/coasterImage2.png";
import coastImage3 from "../../../assets/academicProjects/RollerCoaster/coasterImage3.png";

import csvImage1 from "../../../assets/academicProjects/CSVDataProcess/csvImage1.png";
import csvImage2 from "../../../assets/academicProjects/CSVDataProcess/csvImage2.png";

import {
  LinksContainer,
  ProjectCard,
  SubTitle,
  Title,
  TitleLink,
} from "../../projects/styles";

export const GalleryAcademicImages = ({ rollerCoster, csv }) => {
  const rollerCosterImages = [
    {
      original: coastImage1,
      thumbnail: coastImage1,
    },
    {
      original: coastImage2,
      thumbnail: coastImage2,
    },

    {
      original: coastImage3,
      thumbnail: coastImage3,
    },
  ];

  const csvImages = [
    {
      original: csvImage1,
      thumbnail: csvImage1,
    },
    {
      original: csvImage2,
      thumbnail: csvImage2,
    },
  ];

  if (rollerCoster)
    return (
      <ProjectCard>
        <Title>Montanha-Russa MultiThreads</Title>
        <ReactImageGallery
          items={rollerCosterImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
          Este projeto demonstra como criar uma simulação de montanha-russa
          utilizando Python, com o uso de semáforos e locks para coordenar as
          operações
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://replit.com/@Gabrielosantosb/MontanhaRussaPy">
            Link para o código
          </TitleLink>
          <TitleLink href="https://github.com/Gabrielosantosb/multithreadingRollerCoaster">
            Link para o repositório
          </TitleLink>
        </LinksContainer>
      </ProjectCard>
    );
  if (csv)
    return (
      <ProjectCard>
        <Title>CSV Data Process</Title>
        <ReactImageGallery
          items={csvImages}
          showPlayButton={false}
          slideInterval={1000}
        ></ReactImageGallery>
        <SubTitle>
        Este projeto representa uma abordagem para a análise eficiente de
          grandes volumes de dados em sistemas operacionais. Ao longo do
          desenvolvimento, focamos em estratégias que visam não apenas acelerar
          o processamento, mas também facilitar a interpretação e a aplicação
          prática dos resultados obtidos.
        </SubTitle>
        <LinksContainer>
          <TitleLink href="https://github.com/Gabrielosantosb/CSVDataProcess">
            Link para o repositório
          </TitleLink>
        </LinksContainer>
      </ProjectCard>
    );
};
