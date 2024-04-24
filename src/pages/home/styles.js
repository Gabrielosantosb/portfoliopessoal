import styled from "styled-components";

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
  color: ${(props) => props.theme.textColor};
  line-height: 1.6;
  margin: 0; 
`;

export const DescriptionRed = styled.span`
  font-size: 22px;
  color: rgb(239, 58, 93);
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
  background-image: linear-gradient(to bottom right, #EFE6E6, #F1A9A9);
  /* background-color: black; */
  color: black;  
  
`
export const ExperienceContainer = styled.div`
  margin-left: 10%; 
  max-width  :50% ;
`;

export const ExperienceTitle = styled.h2`
  color: black;
  font-size: 42px;
  margin-bottom: 10px; 
`
export const ExperienceSubtitle = styled.span`
  color: black;
  font-weight: bold;
  font-size: 32px;
`
export const ProfissionalExperience = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%; /* Adicionando altura total para que o divisor seja visível */
`;

export const ExperienceText = styled.p`
  font-size: 22px;
  /* color: ${(props) => props.theme.textColor}; */
  color: black;
`

export const DividerExperience = styled.div`
width: 1px;
  height: 20%; 
  background-color: #ccc;
  position: absolute; 
  
  left: 50%; /* Posicionando o divisor no centro vertical do contêiner pai */
  transform: translateX(-50%); /* Centralizando o divisor verticalmente */
`;
export const ExperienceProfessional = styled.div`
  flex: 1;
`;

export const MySkills = styled.div`
  flex: 1;
`;


export const SkillsContainer = styled.div`
  margin-top: 20px; /* Espaçamento entre a experiência profissional e as habilidades */
`;
// ---------------------------------------FIM EXPERIENCIA PROFISSIONAL-------------------------------------

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