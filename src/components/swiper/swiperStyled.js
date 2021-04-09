import styled, { keyframes } from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

const open = keyframes`
0%{
opacity:0;
}
100%{
opacity:1;
}
`;
const shine = keyframes`
  10% {
    opacity: 1;
    z-index:1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 1s, 1s, 0.1s;
    transition-timing-function: ease;
}
  100% {
    z-index:-1;
    opacity: 0;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
}
`;
export const Video = (isActive) => styled.div`
  overflow: hidden;
  z-index: 2;
  position: absolute;
  box-shadow: 0 10px 10px rgb(0 0 0 / 20%);
  background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%) border-box;
  color: #313149;
  border: 4px solid transparent;
  border-radius: 33px;
  width: calc(100% - 8px) !important;
`;
const WrapRotate = keyframes`
  0%{
    transform:rotateX(0);
  }
  100%{
    transform:rotateX(-360deg);
  }
`;
export const ArrowContainer = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and ${device.laptop} {
    padding-top: 10px;
    position: initial;
  }
`;
export const Arrow = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  z-index: 2;

  &:hover div {
    animation: ${WrapRotate} 0.5s ease-in-out;
  }
  
   @media screen and ${device.mobileL} {
    width:44px;
    height:33px;
  }

  div {
    position: relative;
    background: url(${(props) => props.arrow}) center center no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
  }
`;
export const SwiperContainerWrapper = styled.div`
  height: 360px;
  position: relative;
  @media screen and ${device.tablet} {
    height: 250px;
  }
  @media screen and ${device.mobileL} {
    height: 200px;
  }
`;
export const SwiperContainer = styled.div`
  overflow: ${(props) => props.overflow};
  width: 100%;
  position: relative;
`;
export const SwiperContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StepTitle = styled.span`
  background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 40px;
  padding-top: 10px;

  @media screen and ${device.laptop} {
    font-size: 32px;
  }
  @media screen and ${device.tablet} {
    font-size: 24px;
     line-height: 24px;
  }
  @media screen and ${device.mobileL} {
    font-size: 20px;
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
export const Text = styled.div`
  margin-top: 10px;
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${open} 2s ease-in-out;
  width: ${(props) => props.width};
  padding-left: ${(props) => props.paddingLeft};

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.8);
    padding-top: 20px;
    margin: 0;

    @media screen and ${device.mobileL} {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
export const IndexContainer = styled.div`
  position: relative;
  width: 100%;

  h1 {
    text-align: left;
    font-weight: bold;
    font-size: 65px;
    line-height: 79px;
    letter-spacing: 0.04em;
    background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    padding: 0;

    @media screen and ${device.laptop} {
      font-size: 45px;
    }
    @media screen and ${device.mobileL} {
      font-size: 25px;
    }
  }
`;
