import React from "react";
import { HeaderContainer, ProjectTitle, ProjectsContainer } from "../styles";
import { GalleryReactImages } from "../../../components/galleryImages/galleryReact";
import { FadeIn } from "../../../components/fadeIn";
export const ReactPage = () => {
  return (
    <FadeIn>
      <ProjectsContainer>
        <HeaderContainer>
          <ProjectTitle>Projetos React</ProjectTitle>
        </HeaderContainer>
        <GalleryReactImages instaDogs />
        <GalleryReactImages hanoi />
        <GalleryReactImages organo />
      </ProjectsContainer>
    </FadeIn>
  );
};
