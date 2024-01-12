import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const CustomButton = styled(Link)`
  margin: 10px;
  background-color: #3498db;
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
`;
