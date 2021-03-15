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

`;
const WrapRotate = keyframes`
  0%{
    transform:rotateX(0);
  }
  100%{
    transform:rotateX(-360deg);
  }
`;
export const Arrow = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  cursor: pointer;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;
export const ArrowIconMobile = styled.div`
  position: relative;
  background-position: center;
  background-size: contain;
  background: url(${(props) => props.arrow}) no-repeat;
  width: 100%;
  height: 100%;
  ${Arrow}:hover & {
    animation: ${WrapRotate} 0.5s ease-in-out;
  }
`;
export const SwiperContainerWrapper = styled.div`
  height: 360px;
  position: relative;
  @media screen and ${device.tablet} {
    height: 250px;
  }
`;
export const ArrowsMobile = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
export const SwiperContainer = styled.div`
  overflow: ${(props) => props.overflow};
  width: 100%;
  padding: 40px 0 0 0;
`;
export const SwiperContent = styled.div`
display:flex;
flex-direction:column;
`
export  const Text = styled.div`
    margin-top: 10px;
    display: ${props=>props.display};
    flex-direction: column;
    align-items: center;
    text-align: center;
    animation: ${open} 2s ease-in-out;

    p {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: rgba(255, 255, 255, 0.8);
      padding-top: 20px;
      margin: 0;
    
    }
  `;
