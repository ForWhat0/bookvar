import styled, { css, keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { device } from "../deviceSizes/deviceSizes";

const icon = keyframes`
  0%   {opacity:1;}
  100% {opacity:0; left:150%;top:-20px; transform:rotate(30deg);}
`;

const PaperIconAnimation = (props) =>
  css`
    ${icon} 1.5s;
  `;
const ButtonContainer = styled.div`
  position: relative;
  height: 43px;
  border-radius: 28px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  min-width: 255px;
  justify-content: center;
  animation: ${(props) => props.animation};
`;
const PaperIcon = styled.div`
  opacity: 0;
  transform: rotate(-10deg);
  left: 80%;
  top: 5px;
  z-index: 1;
  width: 40px;
  height: 40px;
  background: url(/send-icon.svg) center center no-repeat;
  background-size: contain;
  position: absolute;
  animation: ${(props) => props.animation};
`;

const Button = styled.button`
  background: radial-gradient(
    233.93% 3285.08% at 52.55% 50%,
    #0367a9 0%,
    #2af6ff 100%
  );
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
  cursor: pointer;
  width: 100%;

  @media screen and ${device.tablet} {
    font-size: 16px;
  }

  @media screen and ${device.mobileL} {
    padding: 15px 16px;
    font-size: 14px;
    line-height: 17px;
  }
`;
const SuccessText = styled.span`
  display: ${(props) => props.display};
  color: white;
`;
const Text = styled.span`
  display: ${(props) => props.display};
  color: white;
`;

const Global = styled.div`
  width: 100%;
  display: ${(props) => props.padding};
  display: flex;
  position: relative;
  justify-content: center;
`;
export const SendButton = ({ loading, click, sendText, sentText, padding }) => {
  const [animation, setAnimation] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    if (loading) {
      return startAnimation();
    }
  }, [loading]);

  const startAnimation = () => {
    setAnimation(true);
  };

  const onAnimationEnd = () => {
    setAnimationFinished(true);
    setTimeout(() => {
      setAnimation(false);
      setAnimationFinished(false);
    }, 2000);
  };

  return (
    <Global padding={padding ? padding : "unset"}>
      <ButtonContainer onClick={click}>
        <Button disabled={loading}>
          <PaperIcon
            display={animationFinished ? "none" : "block"}
            onAnimationEnd={onAnimationEnd}
            animation={animation ? PaperIconAnimation : ""}
          />
          <SuccessText display={animationFinished ? "block" : "none"}>
            {sentText}
          </SuccessText>
          <Text display={animationFinished ? "none" : "block"}>{sendText}</Text>
        </Button>
      </ButtonContainer>
    </Global>
  );
};
