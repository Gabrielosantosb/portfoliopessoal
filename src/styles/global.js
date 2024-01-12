import { Routes } from "react-router";
import { animated } from "react-spring";
import styled, { createGlobalStyle } from "styled-components";


export const StyledFadeIn = styled(animated.div)`
    opacity: ${(props) => props.opacity};

`
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    transition: background-color 0.2s, color 0.2s;
    
  }
`;

export const ThemeToggleContainer = styled.div`
 display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ThemeToggle = styled.button`
  background-color: ${(props) => props.theme.toggleBackground};
  color: ${(props) => props.theme.toggleTextColor};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.toggleHoverBackground};
    color: ${(props) => props.theme.toggleHoverTextColor};
  }
`;

export const lightTheme = {
  backgroundColor: "#fff",
  textColor: "black",
  buttonBackground: "#f0f0f0",
  buttonTextColor: "#333",
};

export const darkTheme = {
  backgroundColor: "#333",
  textColor: "#f8f8ff",
  buttonBackground: "#222",
  buttonTextColor: "#fff",
  linkBgColor: "#333",
  linkTextColor: "#fff",
  linkHoverBgColor: "#555",
  linkHoverTextColor: "#fff",
};
