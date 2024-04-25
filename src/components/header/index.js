import React, { useState } from "react";
import {
  HeaderContainer,
  Container,
  ProjectsButtonsContainer,
  SingleButtonContainer,
  ButtonsHeader,
  IconsContainer,
} from "./styles";
import { BasicButton } from "../basicButton";
import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [visibleButton, setVisibleButton] = useState(true);

  return (
    <HeaderContainer>
      <Container>
        <ButtonsHeader to="/home" onClick={() => setVisibleButton(false)}>
          Home
        </ButtonsHeader>
        <ButtonsHeader to="/meus-projetos" onClick={() => setVisibleButton(true)}>
          Projetos
        </ButtonsHeader>
      </Container>

      <IconsContainer>
        <a href="mailto:gabrielosantosb@gmail.com" style={{ color: "white" }}>
          <FaEnvelope size={28} />
        </a>
        <a href="https://wa.me/61982420900" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <FaWhatsapp size={28} />
        </a>
        <a href="https://github.com/Gabrielosantosb" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <FaGithub size={28} />
        </a>
      </IconsContainer>

      {visibleButton && (
        <ProjectsButtonsContainer>
          <SingleButtonContainer>
            <BasicButton title={"Angular"} to="/meus-projetos-angular" />
          </SingleButtonContainer>
          <SingleButtonContainer>
            <BasicButton title={"React"} to="/meus-projetos-react" />
          </SingleButtonContainer>
          <SingleButtonContainer>
            <BasicButton title={"Back-End"} to="/meus-projetos-back" />
          </SingleButtonContainer>
          <SingleButtonContainer>
            <BasicButton title={"Acadêmicos"} to="/meus-projetos-academico" />
          </SingleButtonContainer>
        </ProjectsButtonsContainer>
      )}
    </HeaderContainer>
  );
};
