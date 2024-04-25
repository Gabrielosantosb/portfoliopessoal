import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
`;

export const HeaderContainer = styled.div`  
  padding: 20px;
  margin-top: 10%;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 768px) {
   margin-top: 60%;
  }
`;

export const ProjectTitle = styled.h1`
  text-align: center;
  font-size: 32px; 
  margin-bottom: 10px;
  color: white;
  
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); 
`;
export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;  
  background: linear-gradient(to bottom, #150a0a, #2E0909);

`;

export const ProjectCard = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.cardTextColor};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
  width: 90%;
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
  padding: 10px;
  margin: 10px;
  font-size: 18px;
  background-color: ${(props) => props.theme.linkBgColor};
  color: ${(props) => props.theme.linkTextColor};
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  :hover {
    background-color: ${(props) => props.theme.linkHoverBgColor};
    color: ${(props) => props.theme.linkHoverTextColor};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 80%;
`;

