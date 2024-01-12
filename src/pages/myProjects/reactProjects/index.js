import React from "react";
import {
  HeaderContainer,
  ProjectTitle,
  ProjectsContainer,
} from "../styles";
import { GalleryReactImages } from "../../../components/galleryImages/galleryReact";
export const ReactPage = () => {
  return (
    <ProjectsContainer>
      <HeaderContainer>
        <ProjectTitle>Projetos React</ProjectTitle>
      </HeaderContainer>
      <GalleryReactImages instaDogs />
      <GalleryReactImages hanoi />
      <GalleryReactImages organo />
    </ProjectsContainer>
  );
};
