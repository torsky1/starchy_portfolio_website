import styled, { css } from "styled-components";
export const NavButton = styled.button<{
  $isActive: boolean;
}>`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-family: "Arial", serif;
  font-weight: 900;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 800;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    font-weight: 800;
  }
  &:hover {
    color: #b1f030;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: #b1f030;
    `}
`;
