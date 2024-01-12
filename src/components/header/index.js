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
} from "./styles";
import { BasicButton } from "../basicButton";
import { ThemeToggle, ThemeToggleContainer } from "../../styles/global";

export const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [visibleButton, setVisibleButton] = useState(false);
  return (
    <>
      <Container>
        <HeaderContainer>
          <HeaderTitle>Portfólio de Gabriel</HeaderTitle>
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
