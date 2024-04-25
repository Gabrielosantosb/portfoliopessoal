import styled from "styled-components";
import backgroundIntroduction from '../../imgs/background/background1.png';
import backgroundExperience from '../../imgs/background/background2.png';
import backgroundAcademic from '../../imgs/background/background3.png';

export const ContainerResumo = styled.section`
  background-image: url(${backgroundIntroduction});
  background-size: 100% auto; 
  background-repeat: no-repeat; 
  @media screen and (max-width: 768px) {    
    background-size: auto auto; 
    background-repeat: no-repeat;    
    max-width: 100%;
    padding-top : 50px;
    padding-right : 10px;
    overflow-x: hidden;
  }
`;

export const ContainerIntodrodution = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 10%;

  @media screen and (max-width: 768px) {
    /* flex-direction: row;  */
    flex-direction: column;
    overflow-x: hidden;
    max-width: 100%;
  }
`;

export const SVGContainer = styled.div`
  margin-top: auto;
  margin-right: 10%;
  
  @media screen and (max-width: 768px) {    
    margin-top: 0;
    margin-right: 50%;
  }
`;

export const ProfessionalSummary = styled.div`
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    margin-bottom: 0; 
    margin-right: 20px;
  }
`;

export const TitleIntrodution = styled.p`
  color: rgb(239, 58, 93);
  font-size: 32px;
  margin-bottom: 0;
  margin-left: 0; 
  margin-top: 15%;
`;

export const MyNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleName = styled.h2`
  color: white;
  font-size: 32px;
  margin-bottom: 10px; 
`;

export const NameText = styled.span`
  color: white;  
  font-weight: bold;
  font-size: 42px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-size: 32px;
  margin-bottom: 20px;
`;

export const DescriptionConteiner = styled.div`
  max-width: 800px;    
`;
export const WppButton = styled.img`
  cursor: pointer;
`;

export const Description = styled.p`
  font-size: 22px;
  color: white;
  line-height: 1.6;
  margin: 0; 
`;

export const DescriptionRed = styled.span`
  font-size: 22px;
  color: #EF3A5D;
  line-height: 1.6;
`;

export const DescriptionBolder = styled.span`
  font-size: 22px;
  font-weight: bolder;  
  line-height: 1.6;
`;


export const ButtonContainer = styled.div`  
  cursor: pointer;
  background-color: aqua;
`;

export const CommonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 80%;  
  margin-bottom: 60px;
`;

export const ProfissionalExperienceConteiner = styled.section`  
  background-image: url(${backgroundExperience});    
  background-size: 100% auto; 
  background-repeat: no-repeat; 
  
  @media screen and (max-width: 768px) {    
    background-size: auto 100%; 
  }
`;

export const Profissional = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 10%;
  
  @media screen and (max-width: 768px) {
    flex-direction: column; 
  }
`;

export const DivisorContainer = styled.div`
@media screen and (max-width: 768px) {    
   display: none;
  }

`

export const ExperienceTitle = styled.h2`
  color: black;
  font-size: 42px;
  margin-bottom: 10px; 
  @media screen and (max-width: 768px) {    
   text-align: center;
  }
`;

export const ExperienceSubtitle = styled.p`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px; 
  @media screen and (max-width: 768px) {    
   text-align: center;
   margin-bottom: 30px; 
  }
`;

export const ExperienceDescriptionConteiner = styled.div`
  max-width: 620px;    
  margin-bottom: 30px;
`;

export const InformationContainer = styled.div`
  margin-top: 20px;
`
export const InformationText = styled.p`
  font-size: 24px;
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
`;

export const ProfissionalExperience = styled.div`

`;

export const DescriptionExperience = styled.p`
  font-size: 22px;
  color: black;
  line-height: 1.6;
  margin: 0; 
`;

export const SkillsContainer = styled.div`
  margin-right: 10%;
`;

export const DivisorImage = styled.img`
  width: 100px; 
  height: auto; 
  margin: 0 auto;
  @media screen and (max-width: 768px) {    
   display: none;
  }
`;

export const AcademicConteiner = styled.section`
   background-image: url(${backgroundIntroduction});
  background-size: 100% auto; 
  background-repeat: no-repeat; 
  @media screen and (max-width: 768px) {    
    background-size: auto auto; 
    background-repeat: no-repeat;    
    max-width: 100%;
    padding-top : 50px;
    padding-right : 10px;
    overflow-x: hidden;
  }
`;

export const CertificationSVG = styled.div`
 margin-top: auto;
  margin-right: 10%;  

  @media screen and (max-width: 768px) {    
     margin-top: 0; 
     margin-right: 90%;
    padding-right: 20%; 
  }
`

export const Academic = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 10%;

  @media screen and (max-width: 768px) {    
    overflow-x: hidden;
    max-width: 100%;
    flex-direction: column;
    
  }
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const AcademicText = styled.p`
  font-size: 22px;
  color: white;
`;

export const AcademicImage = styled.img`
  width: 500px;
  height: 600px;
`;

export const CommonCard = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
  width: 100%; 

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    text-align: left;
  }

  li {
    text-align: center;
    font-size: 18px;
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {    
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const CardTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const CardSubtitle = styled.h2`
  text-align: center;
  font-size: 22px;
  color: ${(props) => props.theme.textColorSecondary};
  margin-bottom: 20px;
`;

export const CardP = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
`;
