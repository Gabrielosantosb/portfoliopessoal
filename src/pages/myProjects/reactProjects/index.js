import React from "react";
import {
  HeaderContainer,
  ProjectTitle,
  ProjectsContainer,
} from "../styles";
import { GalleryImages } from "../../../components/galleryImages";
export const ReactPage = () => {
  return (
    <ProjectsContainer>
      <HeaderContainer>
        <ProjectTitle>Projetos React</ProjectTitle>
      </HeaderContainer>
      <GalleryImages instaDogs />
      <GalleryImages hanoi />
      <GalleryImages organo />
    </ProjectsContainer>
  );
};
