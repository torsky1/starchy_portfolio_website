import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 960px;
  padding-top: 100px;
  gap: 40px;
`;

export const AboutImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  margin-top: 20px;
`;

export const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  margin-top: 20px;
  text-align: left;
  height: 600px;
`;

export const TextContainer = styled.div`
  height: 600px;
  max-width: 300px;
`;
