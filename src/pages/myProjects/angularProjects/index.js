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
import { GalleryAngularImages } from "../../../components/galleryImages/galleryAngular";

export const AngularPage = () => {
  return (
    <ProjectsContainer>
      <HeaderContainer>
        <ProjectTitle>Projetos Angular</ProjectTitle>
      </HeaderContainer>
      <GalleryAngularImages stock/>
      <GalleryAngularImages crud/>
      <GalleryAngularImages weather/>
    </ProjectsContainer>
  );
};
