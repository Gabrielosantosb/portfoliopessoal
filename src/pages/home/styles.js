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
  font-size: 22px;
  color: ${(props) => props.theme.textColor};
  line-height: 1.6;
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