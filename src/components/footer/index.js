import React from "react";
import { FooterContainer, FooterItem, FooterList } from "./styles";


export const Footer = () => {
  return (
    <FooterContainer>
      <FooterList>
        <FooterItem className="item-lista">Vamos trabalhar juntos?</FooterItem>
        <FooterItem className="item-lista">Entre em contato!</FooterItem>
      </FooterList>
    </FooterContainer>
  );
};