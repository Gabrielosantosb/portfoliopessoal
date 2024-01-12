import React from 'react'
import {
    HeaderContainer,
    ProjectTitle,    
    ProjectsContainer,    
  } from "../styles";
import { GalleryBackEnd } from '../../../components/galleryImages/galleryBackEnd';
export const BackEndPage = () => {
  return (
    <ProjectsContainer>
      <HeaderContainer>
        <ProjectTitle>Projetos Back-End</ProjectTitle>
      </HeaderContainer>
     <GalleryBackEnd lojaAPI/>
     <GalleryBackEnd catalogAPI/>
     <GalleryBackEnd crudAPI/>
    </ProjectsContainer>
  )
}
