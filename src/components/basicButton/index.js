// basicButton.js
import React from "react";
import { CustomButton } from "./styles";

export const BasicButton = ({ onPress, title, to, selected,  ...props }) => (
  <div>
    <CustomButton onClick={onPress} selected={selected} to ={to}>{title}</CustomButton>
  </div>
);
