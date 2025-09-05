import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  max-width: 960px;
  padding-bottom: 0;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 40px;
    gap: 20px;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  margin-top: 20px;

  @media (max-width: 768px) {
    max-width: 300px;
    margin-top: 0;
  }
`;

export const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  margin-top: 20px;
  text-align: left;
  height: auto;

  @media (max-width: 768px) {
    height: auto;
    font-size: 14px;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  height: auto;
  max-width: 300px;

  @media (max-width: 768px) {
    height: auto;
    max-width: 90vw;
  }
`;
