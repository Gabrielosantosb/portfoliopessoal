// Header.js
import React from "react";
import { useState } from "react";
import {
  HeaderContainer,
  HeaderTitle,
  Container,
  HeaderItem,
  ButtonsContainer,
  Divider,
  BackEndButton
} from "./styles";
import { BasicButton } from "../basicButton";

export const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [visibleButton, setVisibleButton] = useState(false);
  return (
    <>
      <Container>
        <HeaderContainer>
          <HeaderTitle>Portfólio de Gabriel</HeaderTitle>
        </HeaderContainer>
        <ButtonsContainer>
        <BasicButton title="Home" to="/home" />
          <BasicButton title={"Meus Projetos"}  />
        </ButtonsContainer>
        {visibleButton && (
          <ButtonsContainer>
            <BasicButton title={"Angular"} />
            <BasicButton title={"React"} />
            <BasicButton title={"Back-End"} />
            <BasicButton title={"Academicos"} />
          </ButtonsContainer>
        )}
      </Container>
      <Divider />
    </>
  );
};
