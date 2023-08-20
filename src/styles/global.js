import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    
  }
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
  textColor: "#fff",
  buttonBackground: "#222",
  buttonTextColor: "#fff",
  linkBgColor: "#333", 
  linkTextColor: "#fff", 
  linkHoverBgColor: "#555", 
  linkHoverTextColor: "#fff", 
};