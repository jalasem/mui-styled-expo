import styled, { css } from "styled-components";

const Button = styled.button`
  background: #ccd;
  color: #333;
  border: 0;
  border-radius: 5px;
  margin: 0.5rem;
  padding: ${(props) => props.padding || "0.5rem 1rem"};
  ${(props) =>
    props.primary &&
    css`
      background: mediumseagreen;
      color: white;
    `}
  cursor: pointer;
`;

export default Button;
