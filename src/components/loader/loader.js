import styled, { keyframes } from "styled-components";
import { PlanetMoveBorder } from "../planet/planet-move-on-border";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const dots = keyframes`
0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;}}
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextContainer = styled.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.04em;
  color: #ffffff;
  padding-top: 80px;
  margin:0;
  &:after {
    content: " .";
    animation: ${dots} 1s steps(5, end) infinite;
  }
`;

const Loader = styled.div`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  transform: matrix(0.94, -0.33, 0.35, 0.94, 0, 0);
  width: 150px;
  height: 150px;
  animation: ${rotate} 5s linear infinite;
`;
export const LoaderContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  align-items: center;
`;
const StyledLoader = () => {
  return (
    <Container>
      <Loader>
        <PlanetMoveBorder topPosition={true} size={40} />
        <PlanetMoveBorder size={60} />
      </Loader>
      <TextContainer>Ожидайте</TextContainer>
    </Container>
  );
};
export default StyledLoader;
