// basicButton.js
import React from "react";
import { CustomButton } from "./styles";

export const BasicButton = ({ onPress, title, to,  ...props }) => (
  <div>
    <CustomButton onClick={onPress} to ={to}>{title}</CustomButton>
  </div>
);
