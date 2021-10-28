import styled, { css } from "styled-components";

const Button = styled.button`
  background: #ccd;
  color: #333;
  border: 0;
  border-radius: 5px;
  margin: 0.5rem;
  padding: ${(props) => props.padding || "0.5rem 1rem"};
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    height: 1.5rem;
  }
  span {
    font-size: 1rem;
  }

  &:hover {
    border: 1px solid #999;
  }

  ${(props) =>
    props.primary &&
    css`
      background: mediumseagreen;
      color: white;
    `}
`;

export default Button;
