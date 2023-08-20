import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: linear-gradient(
    0deg,
    rgba(171, 168, 168, 1) 100%,
    rgba(255, 255, 255, 1) 100%
  );
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