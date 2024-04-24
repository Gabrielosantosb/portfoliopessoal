import styled from "styled-components";
import backgroundIntroduction from '../../imgs/background/background1.png';
import backgroundExperience from '../../imgs/background/background2.png';
import backgroundAcademic from '../../imgs/background/background3.png';


export const ContainerResumo = styled.section`
   background-image: url(${backgroundIntroduction});
  background-size: 100% auto; 
  background-repeat: no-repeat; 

  

`
export const ContainerIntodrodution = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 10%;

  
  @media (min-width: 768px) {
    flex-direction: row; 
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
`

export const DescriptionBolder = styled.span`
  font-size: 22px;
  font-weight: bolder;  
  line-height: 1.6;
`
export const SVGContainer = styled.div`
  margin-top: auto;
  margin-right :10% ;
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
export const ButtonContainer = styled.div`
margin-top: 30px;

`
export const CommonContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 80%;  
  margin-bottom: 60px;
`;


// ---------------------------------------EXPERIENCIA PROFISSIONAL-------------------------------------

export const ProfissionalExperienceConteiner = styled.section`  
  background-image: url(${backgroundExperience});    
  background-size: 100% auto; 
  background-repeat: no-repeat;   
  
`
export const Profissional = styled.div`
   display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 10%;
  

  
  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;
export const ExperienceTitle = styled.h2`
  color: black;
  font-size: 42px;
  margin-bottom: 10px; 
`

export const ExperienceSubtitle = styled.p`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px; 
`
export const ExperienceDescriptionConteiner = styled.div`
  max-width: 620px;    
  margin-bottom: 30px;
`;
export const ProfissionalExperience = styled.div`


`
export const DescriptionExperience = styled.p`
  font-size: 22px;
  color: black;
  line-height: 1.6;
  margin: 0; 
`;
export const SkillsContainer = styled.div`
margin-right: 5%;
`
export const DivisorImage = styled.img`
  width: 100px; 
  height: auto; 
  margin: 0 auto;
`;

// ---------------------------------------FIM EXPERIENCIA PROFISSIONAL-------------------------------------


// ----------------------------ACADEMICO------------------------------------------

export const AcademicConteiner = styled.section`
  background-image: url(${backgroundAcademic});
  background-size: 100% auto; 
  background-repeat: no-repeat; 
`;

export const Academic = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 10%;
  
  
  
  @media (min-width: 768px) {
    flex-direction: row; 
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

// Se preferir, você pode usar styled.img ao invés de styled.div para a imagem
// Isso tornará o código um pouco mais semântico.
export const AcademicImage = styled.img`
  width: 500px;
  height: 600px;
`;

// --------------------------FIM ACADEMICO------------------------------


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
`

export const CardSubtitle = styled.h2`
text-align: center;
  font-size: 22px;
  color: ${(props) => props.theme.textColorSecondary};
  margin-bottom: 20px;
`

export const CardP = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;

`