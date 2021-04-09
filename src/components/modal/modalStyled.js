import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(29, 29, 27, 0.2);
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 20;
`;
export const Close = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
  background: url(/close-icon.svg) center center no-repeat;
  background-size: contain;
  width: 40px;
  height: 40px;

  @media screen and ${device.tablet} {
    width: 30px;
    height: 30px;
  }
`;
export const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(29, 29, 27, 0.2);
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`;



export const VideoWrapper = styled.div`
  width: 90%;
  height: 80%;
  position: relative;
  background: #12162b;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
`;
export const Video = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => props.display};
`;
export const Error = styled.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.04em;
  color: #ffffff;
`;
export const FormContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  justify-content: center;
  display: flex;
  z-index: 1;
  background: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  background: #12162b;

  @media screen and ${device.mobileL} {
    width: 100%;
    margin: 0;
  }

  form {
    @media screen and ${device.mobileL} {
      padding: 50px 15px;
      width: 93.6%;
    }
    position: relative;
    padding: 40px 80px;
    width: 80%;

    h1 {
      background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 54px;
      line-height: 66px;
      text-align: center;

      @media screen and ${device.tablet} {
        font-size: 24px;
      }

      @media screen and ${device.mobileL} {
        font-size: 20px;
        line-height: 24px;
      }
    }

    h3 {
      font-size: 30px;
      line-height: 37px;
      color: #ffffff;
      margin: 0 0 40px 0;
      text-align: center;

      @media screen and ${device.tablet} {
        font-size: 20px;
      }

      @media screen and ${device.mobileL} {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
`;
export const CloseModalButton = styled.div`
  display: flex;
  margin-top: 60px;
  text-align: center;
  justify-content: center;
`;
