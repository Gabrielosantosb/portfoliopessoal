// Header.js
import React from "react";
import { useState } from "react";
import {
  HeaderContainer,
  HeaderTitle,
  Container,
  ProjectsButtonsContainer,
  ButtonsContainer,
  Divider,
  SocialIconsContainer,
  SingleButtonContainer,
} from "./styles";
import { BasicButton } from "../basicButton";
import { ThemeToggle, ThemeToggleContainer } from "../../styles/global";

import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [visibleButton, setVisibleButton] = useState(false);
  return (
    <>
      <Container>
        <HeaderContainer>
          <HeaderTitle>Portfólio de Gabriel</HeaderTitle>
          <SocialIconsContainer isDarkMode={isDarkMode}>
            <a href="gabrielosantosb@gmail.com">
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/61982420900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/Gabrielosantosb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </SocialIconsContainer>
          <ThemeToggleContainer>
            <ThemeToggle onClick={toggleDarkMode}>
              {isDarkMode ? "Modo Claro" : "Modo Escuro"}
            </ThemeToggle>
          </ThemeToggleContainer>
        </HeaderContainer>
        <ButtonsContainer>
          <BasicButton
            title="Home"
            to="/home"
            onPress={() => setVisibleButton(false)}
          />

          <BasicButton
            title={"Meus Projetos"}
            to="/meus-projetos"
            onPress={() => setVisibleButton(true)}
          />
        </ButtonsContainer>
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
              <BasicButton title={"Academicos"} to="/meus-projetos-academico" />
            </SingleButtonContainer>
          </ProjectsButtonsContainer>
        )}
      </Container>
      <Divider />
    </>
  );
};
