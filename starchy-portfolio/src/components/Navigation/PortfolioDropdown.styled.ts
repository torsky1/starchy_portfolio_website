import styled from "styled-components";

export const DropdownWrapper = styled.div`
  display: inline-block;
  padding-top: 0;
  /* show dropdown when hovering wrapper (label or list) */
  &:hover > ul {
    display: block;
  }

  @media (min-width: 768px) {
    position: relative;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  /* place directly under the label and slightly overlap to avoid hover gap */
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  background: rgba(0, 0, 0, 0.9);
  list-style: none;
  margin: 0;
  padding: 6px 0;
  /* responsive width: cap to viewport so it never overflows */
  box-sizing: border-box;
  width: 400px;
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: none; /* hidden by default, shown by wrapper:hover */

  /* on small screens use a safe viewport-based width with side margins */
  @media (max-width: 768px) {
    /* use fixed positioning on small screens so dropdown is centered in viewport
       and appears below the nav (slightly lower to avoid overlap). */
    position: absolute;
    width: calc(100vw - 32px);
    max-width: calc(100vw - 32px);
    z-index: 3;
  }
`;

export const DropdownItem = styled.li<{ $isActive: boolean }>`
  padding: 8px 16px;
  color: ${(p) => (p.$isActive ? "#b1f030" : "white")};
  cursor: pointer;
  font-size: 13px;
  /* allow wrapping so full titles are visible */
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  word-break: break-word;
  &:hover {
    background: rgba(177, 240, 48, 0.08);
    color: #b1f030;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;
