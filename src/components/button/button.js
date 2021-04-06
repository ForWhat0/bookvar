import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

const Button = styled.div`
  width: 100%;
  cursor: pointer;
  width:fit-content;
  background: radial-gradient(
    233.93% 3285.08% at 52.55% 50%,
    #0367a9 0%,
    #2af6ff 100%
  );
  transition: all 0.1s linear;
  box-shadow: 0px 0px 10px 4px #02e2e4, 0px 0px 15px #00ffff;
  border-radius: 20px;
  border: unset;
  padding: 16px 30px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and ${device.tablet} {
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and ${device.mobileL} {
    padding: 16px 0;
    font-size: 14px;
    line-height: 17px;
    width:70%;
  }
`;

export const StyledButton = ({ onclick, text }) => {
  return <Button onClick={onclick}>{text}</Button>;
};
