import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  background: url(${(props) => props.src}) center center no-repeat;
  background-size: contain;

  @media screen and ${device.tablet} {
    width: 25px;
    height: 25px;
  }
`;
export const IconBackground = styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  background-image: url("${(props) => props.background}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const Icon = ({ src }) => {
  return <IconContainer src={src} />;
};
