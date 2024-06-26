import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

export const ProjectCard = styled.div`
  /* background-color: ${(props) => props.theme.cardBackground}; */
  background-color: #F2F2F2;
  color: ${(props) => props.theme.cardTextColor};  
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
  width: 80%;
`;

export const Title = styled.p`
  text-align: center;
  padding: 15px;
  font-weight: bolder;
  font-size: 28px;
`;

export const SubTitle = styled.p`
  text-align: center;
  padding: 10px;
  font-size: 24px;
  color: ${(props) => props.theme.subTitleColor};
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleLink = styled.a`
  display: inline-block;
  text-align: center;
  padding: 12px 20px; 
  margin: 10px;
  font-size: 24px; 
  background-color: ${(props) => props.theme.linkBgColor};
  /* color: ${(props) => props.theme.linkTextColor}; */
  color: #EF3A5D;
  border-radius: 8px; 
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, border-color 0.3s; 
  border: 2px solid ${(props) => props.theme.linkBorderColor}; /* Adicionando a borda */

  :hover {
    background-color: ${(props) => props.theme.linkHoverBgColor};
    color: ${(props) => props.theme.linkHoverTextColor};
    transform: scale(1.05); 
    border-color: ${(props) => props.theme.linkHoverBorderColor}; /* Mudando a cor da borda no hover */
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 80%;
`;
