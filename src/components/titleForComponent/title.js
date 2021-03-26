import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

const Text = styled.div`
  display: inline-block;
  flex: wrap;
  align-items: center;
  font-weight: 500;
  font-size: 30px;
  line-height: 60px;
  letter-spacing: 0.04em;
  color: #ffffff;
  width: 100%;
  text-align: center;
  text-align: center;
  padding: 0 0 80px 0;

  @media screen and ${device.tablet} {
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.04em;
     padding: 0 0 40px 0;
  }

  @media screen and ${device.mobileL} {
    font-size: 16px;
  }

  h1 {
    background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 64px;
    padding: 10px;
    margin: 0;
    display: inline-block;

    @media screen and ${device.tablet} {
      font-size: 25px;
      line-height: 30px;
      letter-spacing: 0.04em;
    }

    @media screen and ${device.mobileL} {
      font-size: 16px;
    }
  }
`;

export const TitleForComponent = ({ children }) => {
  return <Text>{children}</Text>;
};
