import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;
export const NavigationButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;
