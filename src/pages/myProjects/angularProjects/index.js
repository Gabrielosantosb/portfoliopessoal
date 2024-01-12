import React from "react";
import {
  HeaderContainer,
  ProjectTitle,
  ProjectsContainer,
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
