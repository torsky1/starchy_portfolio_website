import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1080px;
  padding-top: 50px;

  @media (max-height: 900px) {
    padding-top: 16px;
  }
`;
//padding-top: 20px;
