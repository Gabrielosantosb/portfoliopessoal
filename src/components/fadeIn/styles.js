
import { animated } from "react-spring";
import styled from "styled-components";

export const StyledFadeIn = styled(animated.div)`
    opacity: ${(props) => props.opacity};

`