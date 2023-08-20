import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

export const ProjectCard = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
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
