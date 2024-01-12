// styles.js
import styled from "styled-components";

export const Container = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-bottom: 60px;
`;

export const ProfessionalSummary = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-size: 32px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  line-height: 1.6;
`;

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const SkillCard = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
  max-width: 300px;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ContactCard = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
  max-width: 300px;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 16px;
    margin-bottom: 8px;
  }

  a {
    color: ${(props) => props.theme.linkTextColor};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.linkHoverTextColor};
    }
  }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ExperienceCard = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
  max-width: 800px;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }
`;
