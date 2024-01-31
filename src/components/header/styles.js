import { styled } from "styled-components";



export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center; 
  padding: 20px;
  background: ${(props) => props.theme.headerBackground};
`;

export const HeaderTitle = styled.p`
  text-align: center;
  list-style: none;
  font-size: 22px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px;
  &:hover {
    color: gray;
    /* border-bottom: 2px solid black; */
    /* border-radius: 10px; */
    transition: 0.1s;  
  }
`

export const HeaderList = styled.ul`
  display: flex;
  flex: 1; 
`;

export const ButtonsContainer = styled.div`
  display: flex;

`

export const ProjectsButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  transition:1;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const SingleButtonContainer = styled.div`
  margin-top: 30px;

`
export const HeaderItem = styled.button`
  text-align: center;
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
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 30px;
  margin-bottom: 20px;
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