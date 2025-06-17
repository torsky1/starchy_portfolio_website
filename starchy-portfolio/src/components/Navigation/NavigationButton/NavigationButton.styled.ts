import styled, { css } from "styled-components";
export const NavButton = styled.button<{
  $isActive: boolean;
}>`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-family: inherit;
  &:hover {
    color: #b1f030;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: #b1f030;
    `}
`;
