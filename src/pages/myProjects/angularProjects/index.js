import React from "react";
import { HeaderContainer, ProjectBox, ProjectTitle, ProjectsContainer } from "../styles";
import { GalleryAngularImages } from "../../../components/galleryImages/galleryAngular";
import { FadeIn } from "../../../components/fadeIn";
import { Header } from "../../../components/header";

export const AngularPage = () => {
  return (
    <>
      {/* <FadeIn> */}
        <Header />
        <ProjectsContainer>
          <HeaderContainer>
            <ProjectTitle>Projetos Angular</ProjectTitle>
          </HeaderContainer>
          <GalleryAngularImages anamnese />
          <GalleryAngularImages paymentSimulation />
          <GalleryAngularImages stock />
          <GalleryAngularImages todo />
          <GalleryAngularImages crud />
        </ProjectsContainer>
      {/* </FadeIn> */}
    </>
  );
};
