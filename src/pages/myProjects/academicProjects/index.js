import React from "react";
import { HeaderContainer, ProjectTitle, ProjectsContainer } from "../styles";
import { GalleryAcademicImages } from "../../../components/galleryImages/galleryAcademic";
import { FadeIn } from "../../../components/fadeIn";
import { Header } from "../../../components/header";
export const AcademicPage = () => {
  return (
    <>
      {/* <FadeIn> */}        
        <ProjectsContainer>
          <HeaderContainer>
            <ProjectTitle>Projetos Acadêmicos</ProjectTitle>
          </HeaderContainer>
          <GalleryAcademicImages rollerCoster />
          <GalleryAcademicImages csv />
        </ProjectsContainer>
      {/* </FadeIn> */}
    </>
  );
};
