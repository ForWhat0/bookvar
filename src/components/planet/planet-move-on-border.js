import styled, { keyframes } from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

const moveContainerTopPosition = (size, calcSize) => keyframes`
  25% { left: -${size}px; top: ${calcSize}; transform: translate(0%, -100%); }
  50% { left: ${calcSize}; top: ${calcSize}; transform: translate(-100%, -100%); }
  75% { left: ${calcSize}; top: -${size}px; transform: translate(-100%, 0%); }
  100% { left: -${size}px; top: -${size}px; transform: translate(-0%, 0%); }
`;

const moveContainer = (size, calcSize) => keyframes`
  25% { left: ${calcSize}; top: -${size}px; transform: translate(-100%, 0%); }
  50% { left: -${size}px; top: -${size}px; transform: translate(-0%, 0%); }
  75% { left: -${size}px; top: ${calcSize}; transform: translate(0%, -100%); }
  100% { left: ${calcSize}; top: ${calcSize}; transform: translate(-100%, -100%); }
`;

const formMoveContainer = (size) => keyframes`
  25% { left: calc(95% + ${size}px); top: calc(5% - ${size}px); transform: translate(-100%, 0%); }
  50% { left: calc(8% - ${size}px); top: calc(5% - ${size}px); transform: translate(-0%, 0%); }
  75% { left: calc(95% + ${size}px); top: calc(5% - ${size}px); transform: translate(-100%, 0%); }
  100% { left: calc(95% + ${size}px); top: calc(72% + ${size}px); transform: translate(-100%, -100%); }
`;

const formMoveContainerTopPosition = (size) => keyframes`
  25% { left: calc(3% - ${size}px); top: calc(96% + ${size}px); transform: translate(0%, -100%); }
  50% { left: calc(82% + ${size}px); top: calc(96% + ${size}px); transform: translate(-100%, -100%); }
  75% { left: calc(3% - ${size}px); top: calc(96% + ${size}px); transform: translate(0%, -100%); }
  100% { left: calc(3% - ${size}px); top: calc(15% - ${size}px); transform: translate(-0%, 0%); }
`;



const WrapRotate = keyframes`
  0%{
    transform:rotateZ(0);
  }
  100%{
    transform:rotateZ(-360deg);
  }
`;
const PlanetContainer = styled.div`
  width: ${(props) => props.size}px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.translate};
  animation: ${(props) =>
      props.form && props.topPosition
        ? formMoveContainerTopPosition(props.halfSize)
        : props.form
        ? formMoveContainer(props.halfSize)
        : props.topPosition
        ? moveContainerTopPosition(props.halfSize, props.calcSize)
        : moveContainer(props.halfSize, props.calcSize)}
    50s infinite linear;
  height: ${(props) => props.size}px;
  position: absolute;
  border-radius: 50%;

  @media screen and ${device.laptop} {
    display: ${(props) => props.display};
  }

  @media screen and ${device.tablet} {
    width: ${(props) => props.mobileSize}px;
    height: ${(props) => props.mobileSize}px;
    top: ${(props) => props.mobileTop};
    left: ${(props) => props.mobileLeft};
    transform: ${(props) => props.translate};
    animation: ${(props) =>
        props.form && props.topPosition
          ? formMoveContainerTopPosition(props.mobileHalfSize)
          : props.form
          ? formMoveContainer(props.mobileHalfSize)
          : props.topPosition
          ? moveContainerTopPosition(props.mobileHalfSize, props.mobileCalcSize)
          : moveContainer(props.mobileHalfSize, props.mobileCalcSize)}
      50s infinite linear;
  }
`;

const PlanetWrap = styled.div`
  animation: ${WrapRotate} 10s infinite linear;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  border-radius: 50%;

  @media screen and ${device.tablet} {
    width: ${(props) => props.mobileSize}px;
    height: ${(props) => props.mobileSize}px;
  }
`;

const PlanetBackground = styled.div`
  background: radial-gradient(
      96% 96% at 70.4% 31.2%,
      #0089e3 0%,
      rgba(0, 2, 16, 0) 100%
    ),
    #0069ae;
  box-shadow: 0px 4px 80px #0089e3, inset 0px 2px 10px rgba(255, 255, 255, 0.58),
    inset 10px 16px 20px rgba(42, 246, 255, 0.95);
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  border-radius: 50%;

  @media screen and ${device.tablet} {
    width: ${(props) => props.mobileSize}px;
    height: ${(props) => props.mobileSize}px;
  }
`;
export const PlanetMoveBorder = ({ topPosition, size, form }) => {
  const halfSize = size / 2;
  const calcSize = `calc(100% + ${halfSize}px)`;
  const doubleSize = size * 2;

  const mobileSize = 40;
  const mobileHalfSize = mobileSize / 2;
  const mobileCalcSize = `calc(100% + ${mobileHalfSize}px)`;
  const mobileDoubleSize = mobileSize * 2;

  const top =
    form && topPosition
      ? `calc(15% - ${halfSize}px)`
      : form
      ? `calc(72% + ${halfSize}px)`
      : topPosition
      ? `-${halfSize}px`
      : calcSize;
  const mobileTop =
    form && topPosition
      ? `calc(15% - ${mobileHalfSize}px)`
      : form
      ? `calc(72% + ${mobileHalfSize}px)`
      : topPosition
      ? `-${mobileHalfSize}px`
      : mobileCalcSize;
  const left =
    form && topPosition
      ? `calc(3% - ${halfSize}px)`
      : form
      ? `calc(95% + ${halfSize}px)`
      : topPosition
      ? `-${halfSize}px`
      : calcSize;
  const mobileLeft =
    form && topPosition
      ? `calc(3% - ${mobileHalfSize}px)`
      : form
      ? `calc(95% + ${mobileHalfSize}px)`
      : topPosition
      ? `-${mobileHalfSize}px`
      : mobileCalcSize;
  const translate = topPosition
    ? `translate(-0%, 0%)`
    : `translate(-100%, -100%)`;
  const display = form ? "none" : "initial";
  return (
    <PlanetContainer
      size={size}
      halfSize={halfSize}
      calcSize={calcSize}
      mobileSize={mobileSize}
      mobileHalfSize={mobileHalfSize}
      mobileCalcSize={mobileCalcSize}
      topPosition={topPosition}
      top={top}
      left={left}
      mobileTop={mobileTop}
      mobileLeft={mobileLeft}
      translate={translate}
      form={form}
      display={display}
    >
      <PlanetWrap mobileSize={mobileSize} size={size}>
        <PlanetBackground
          mobileDoubleSize={mobileDoubleSize}
          mobileSize={mobileSize}
          doubleSize={doubleSize}
          size={size}
        />
      </PlanetWrap>
    </PlanetContainer>
  );
};
