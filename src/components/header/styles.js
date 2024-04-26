import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderContainer = styled.section`
  margin-top: 20px;
  position: absolute;  
  top: 0; 
  width: 100%; 
  display: flex;
  justify-content: center;
  flex-direction: column; 
  align-items: center; 
  margin-bottom: 30%;

  @media screen and (max-width: 768px) {
    /* align-items: stretch; */
  }
`;
export const IconsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 20px;
  margin-right: 30px;
  @media screen and (max-width: 768px) {
    position: static; 
    margin: 5px 0;
  }

`;
export const Container = styled.div`
  display: flex;
  align-items: center;  
`;

export const ButtonsHeader = styled(Link)`
  margin: 0 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background: none;
  border: none;
  color: white; 
  font-weight: bold; 
  font-size: 28px;
  text-decoration: none;  
  transition: transform 0.3s ease; 
  &:hover {
    transform: scale(1.1); /* Aumenta em 10% */
  }
`;

export const ProjectsButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SingleButtonContainer = styled.div`
  margin-top: 30px;
  
  @media screen and (max-width: 768px) {
   margin-top: 60px;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 10px;
    color: ${(props) => (props.isDarkMode ? "#fff" : "#000")}; 
    text-decoration: none;
    font-size: 24px;

    &:hover {
      opacity: 0.7;
    }
  }
`;
