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
} from "./styles";
import { BasicButton } from "../basicButton";
import { ThemeToggle, ThemeToggleContainer } from "../../styles/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
            <BasicButton title={"Angular"} to="/meus-projetos-angular" />
            <BasicButton title={"React"} to="/meus-projetos-react" />
            <BasicButton title={"Back-End"} to="/meus-projetos-back" />
            <BasicButton title={"Academicos"} to="/meus-projetos-academico" />
          </ProjectsButtonsContainer>
        )}
      </Container>
      <Divider />
    </>
  );
};
