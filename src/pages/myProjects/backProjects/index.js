import React from "react";
import { HeaderContainer, ProjectTitle, ProjectsContainer } from "../styles";
import { GalleryBackEnd } from "../../../components/galleryImages/galleryBackEnd";
import { FadeIn } from "../../../components/fadeIn";
import { Header } from "../../../components/header";
export const BackEndPage = () => {
  return (
    // <FadeIn>
    <>
      <Header />
      <ProjectsContainer>
        <HeaderContainer>
          <ProjectTitle>Projetos Back-End</ProjectTitle>
        </HeaderContainer>
        <GalleryBackEnd anamneseAPI />
        <GalleryBackEnd lojaAPI />
        <GalleryBackEnd catalogAPI />
        <GalleryBackEnd crudAPI />
      </ProjectsContainer>
    </>
    // </FadeIn>
  );
};
