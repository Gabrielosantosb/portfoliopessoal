import styled from "styled-components";
import backgroundFooter from '../../imgs/background/background5.png';

export const FooterContainer = styled.footer`
  background-image: url(${backgroundFooter});
  background-size: 100% auto; 
  background-repeat: no-repeat;   
  padding: 20px 0;
  text-align: center;
`;



export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;



export const FooterItem = styled.li`
  list-style: none;
  font-size: 18px;
  text-transform: uppercase;
  padding: 10px;
  color: #333;
`;