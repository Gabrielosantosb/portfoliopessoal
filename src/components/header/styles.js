import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center; /* Centralizar verticalmente */
  padding: 20px;
  background: ${(props) => props.theme.headerBackground};
`;

export const HeaderList = styled.ul`
  display: flex;
  flex: 1; /* Ocupar espaço disponível */
`;

export const HeaderItem = styled.li`
  list-style: none;
  font-size: 22px;
  text-transform: uppercase;
  padding: 10px;
  text-align: center; 
  &:hover {
    color: gray;
    border-bottom: 2px solid black;
    border-radius: 10px;
    transition: 0.2s;
    
  }
`;

export const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: flex-end; 
  flex: 1; 
`;