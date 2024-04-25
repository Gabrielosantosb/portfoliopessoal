import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const CustomButton = styled(Link)`
  background-color: transparent;
  border: 2px solid #EF3A5D;
  color: #EF3A5D;
  margin: 20px;
  padding: 15px 25px; 
  font-size: 20px; 
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  border-radius: 20px;  
  &:hover {
    background-color: #EF3A5D;
    color: white;
  }
  @media (max-width: 600px) {
    margin-top: 10px;
    background-color: ${(props) => (props.selected ? "#e74c3c" : "#3498db")};
  }
`;