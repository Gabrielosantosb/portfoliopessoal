import React from "react";
import { HeaderContainer, HeaderItem, HeaderList, ThemeToggleContainer } from "./styles";
import { ThemeToggle } from "../../styles/global";

export const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <HeaderContainer>
      <HeaderList>
        <HeaderItem className="item-lista">Projetos de Gabriel</HeaderItem>
      </HeaderList>
      <ThemeToggleContainer>
        <ThemeToggle onClick={toggleDarkMode}>
          {isDarkMode ? "Modo Claro" : "Modo Escuro"}
        </ThemeToggle>
      </ThemeToggleContainer>
    </HeaderContainer>
  );
};