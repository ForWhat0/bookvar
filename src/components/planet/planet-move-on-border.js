import styled, { keyframes } from "styled-components";

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

const backgroundAnimation = (size) => keyframes`
  0%{
    background-position-x:0;
  }
  100%{
    background-position-x:-${size}px;
  }
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
`;

const PlanetWrap = styled.div`
  animation: ${WrapRotate} 10s infinite linear;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  border-radius: 50%;
`;

const PlanetBackground = styled.div`
  animation: ${(props) => backgroundAnimation(props.doubleSize)} 25s infinite
    linear;
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
`;
export const PlanetMoveBorder = ({ topPosition, size, form }) => {
  const halfSize = size / 2;
  const calcSize = `calc(100% + ${halfSize}px)`;
  const doubleSize = size * 2;
  const top =
    form && topPosition
      ? `calc(15% - ${halfSize}px)`
      : form
      ? `calc(72% + ${halfSize}px)`
      : topPosition
      ? `-${halfSize}px`
      : calcSize;
  const left =
    form && topPosition
      ? `calc(3% - ${halfSize}px)`
      : form
      ? `calc(95% + ${halfSize}px)`
      : topPosition
      ? `-${halfSize}px`
      : calcSize;
  const translate = topPosition
    ? `translate(-0%, 0%)`
    : `translate(-100%, -100%)`;

  return (
    <PlanetContainer
      size={size}
      halfSize={halfSize}
      calcSize={calcSize}
      topPosition={topPosition}
      top={top}
      left={left}
      translate={translate}
      form={form}
    >
      <PlanetWrap size={size}>
        <PlanetBackground doubleSize={doubleSize} size={size} />
      </PlanetWrap>
    </PlanetContainer>
  );
};
