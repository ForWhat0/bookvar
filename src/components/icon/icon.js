import Image from "next/image";
import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

const IconBackground = styled.div`
  background: url(${(props) => props.src}) no-repeat;
  width: 60%;
  background-size: contain;
  height: 80%;
  background-position: center;
`;
const IconBackgroundContainer = styled.div`
  min-height: 30px;
  min-width: 30px;
  width: 30px;
  height: 30px;
  margin-right: 20px;
  display: flex;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
`;
export const IconBackgroundSvg = ({ src }) => {
  return (
    <IconBackgroundContainer>
      <IconBackground src={src} />
    </IconBackgroundContainer>
  );
};

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

export const Icon = ({ src }) => {
  return <IconContainer src={src} />;
};
