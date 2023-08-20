import React from "react";
import { FooterContainer, FooterItem, FooterList } from "./styles";


export const Footer = () => {
  return (
    <FooterContainer>
      <FooterList>
        <FooterItem className="item-lista">© 2023 Gabriel's Projects</FooterItem>
      </FooterList>
    </FooterContainer>
  );
};