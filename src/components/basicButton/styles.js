import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

export const CustomButton = styled(Link)`
  margin: 10px;
  background-color: ${(props) => (props.selected ? "#e74c3c" : "#3498db")};
  color: white;
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 600px) {
    margin-top: 10px;
    background-color: ${(props) => (props.selected ? "#e74c3c" : "#3498db")};
  }
`;