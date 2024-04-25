import React from "react";
import { HeaderContainer, ProjectTitle, ProjectsContainer } from "../styles";
import { GalleryReactImages } from "../../../components/galleryImages/galleryReact";
import { FadeIn } from "../../../components/fadeIn";
import { Header } from "../../../components/header";
export const ReactPage = () => {
  return (
    <>
            
        <ProjectsContainer>
          <HeaderContainer>
            <ProjectTitle>Projetos React</ProjectTitle>
          </HeaderContainer>
          <GalleryReactImages instaDogs />
          <GalleryReactImages hanoi />
          <GalleryReactImages organo />
        </ProjectsContainer>
      
    </>
  );
};
