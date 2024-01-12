import React from "react";
import { StyledFadeIn } from "./styles";
import { animated, useSpring } from "react-spring";

// import { Container } from './styles';

export const FadeIn = ({children}) => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  return <StyledFadeIn style={fadeIn} as={animated.div}>{children}</StyledFadeIn>;
};
