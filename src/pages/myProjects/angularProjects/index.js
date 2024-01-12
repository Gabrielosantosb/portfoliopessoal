import React from "react";
import { HeaderContainer, ProjectTitle, ProjectsContainer } from "../styles";
import { GalleryAngularImages } from "../../../components/galleryImages/galleryAngular";
import { FadeIn } from "../../../components/fadeIn";

export const AngularPage = () => {
  return (
    <FadeIn>
      <ProjectsContainer>
        <HeaderContainer>
          <ProjectTitle>Projetos Angular</ProjectTitle>
        </HeaderContainer>
        <GalleryAngularImages stock />
        <GalleryAngularImages crud />
        <GalleryAngularImages weather />
      </ProjectsContainer>
    </FadeIn>
  );
};
