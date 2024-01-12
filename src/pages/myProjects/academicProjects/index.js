import React from "react";
import {
  HeaderContainer,
  ProjectTitle,
  ProjectsContainer,
} from "../styles";
import { GalleryAcademicImages } from "../../../components/galleryImages/galleryAcademic";
export const AcademicPage = () => {
  return (
    <ProjectsContainer>
      <HeaderContainer>
        <ProjectTitle>Projetos Academicos</ProjectTitle>
      </HeaderContainer>
      <GalleryAcademicImages rollerCoster/>
      <GalleryAcademicImages csv/>
      
    </ProjectsContainer>
  );
};
