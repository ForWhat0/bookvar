import styled, { css, keyframes } from "styled-components";
import { StyledButton } from "../button/button";
import { useState } from "react";
import { device } from "../deviceSizes/deviceSizes";

const growAnimation = keyframes`
from {
transform: scale(1);
    opacity: 1;
}
to {
transform: scale(1.3);
    opacity: 0;
}
`;
const growAnimationHandler = (props) =>
  css`
    ${growAnimation} 0.5s ease-in-out;
  `;
const Container = styled.div`
  display: flex;

  @media screen and ${device.laptop} {
    flex-direction: column;
  }
`;
const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-right: 120px;

  @media screen and (max-width: 1200px) {
    width: 300px;
    margin-right: 80px;
  }

  @media screen and ${device.laptop} {
    margin-right: unset;
    width: 360px;
  }

  @media screen and ${device.tablet} {
    align-self: center;
  }
  @media screen and ${device.mobileL} {
    width: 100%;
  }
`;
const MainProductPhoto = styled.div`
  height: 373px;
  width: 100%;
  background: linear-gradient(251.35deg, #e8f2fd 0%, #c3cee9 100%);
  border-radius: 20px;

  div {
    background: url(${(props) => props.src}) center center no-repeat;
    background-size: 80%;
    height: 100%;
    width: 100%;
    animation: ${(props) => props.animation};
  }
`;
const RestProductPhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const RestProductPhoto = styled.div`
  margin-top: 20px;
  width: 165px;
  height: 163px;
  background: linear-gradient(251.35deg, #e8f2fd 0%, #c3cee9 100%);
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  div {
    background: url(${(props) => props.src}) center center no-repeat;
    background-size: 90%;
    height: 100%;
    width: 100%;
    animation: ${(props) => props.animation};

    @media screen and ${device.mobileL} {
      background-size: 80%;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 140px;
  }

  @media screen and ${device.laptop} {
    width: 165px;
  }

  @media screen and ${device.mobileL} {
    width: 48%;
    height: 128px;
  }
`;
const Content = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  text-align: left;
  
  @media screen and ${device.mobileL} {
    font-size: 16px;
    line-height: 20px;
  }
`;
const Title = styled.h1`
  display: ${(props) => (props.display ? "block" : "none")};
  font-weight: bold;
  font-size: 54px;
  line-height: 66px;
  color: #ffffff;
  margin: 0;
  padding: 0;

  @media screen and ${device.laptop} {
    display: ${(props) => (props.display ? "none" : "block")};
    padding-bottom: 30px;
  }
  @media screen and ${device.tablet} {
    font-size: 32px;
    text-align:center;
  }
  @media screen and ${device.mobileL} {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    padding-bottom: 20px;
  }
`;
const Exist = styled.span`
  margin-top: 40px;
`;
const Id = styled.span`
  margin-top: 20px;
`;
const CountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  
  @media screen and ${device.mobileL} {
        justify-content: space-between;
    margin-top: 20px;
  }
`;
const PriceContainer = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-wrap: wrap;
  margin-top: 60px;
  align-items: baseline;
  color: #ffffff;

  @media screen and ${device.mobileL} {
    display: ${(props) => (props.display ? "none" : "flex")};
    justify-content: center;
    margin-top:40px;
  }
`;
const Discount = styled.span`
  letter-spacing: 0.04em;
  text-decoration-line: line-through;
  margin-right: 20px;
  
  @media screen and ${device.mobileL} {
        font-size: 16px;
    line-height: 20px;
  }
`;
const Price = styled.span`
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.04em;
  
  @media screen and ${device.mobileL} {
    font-size: 20px;
    line-height: 24px;
  }
`;
const ButtonContainer = styled.div`
  width: 255px;
  margin-top: 60px;
  
  
  @media screen and ${device.tablet} {
    display:flex;
    align-self:center;
  }
  @media screen and ${device.mobileL} {
    width: 100%;
  }
`;
const Count = styled.div`
  margin-left: 20px;
  width: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 0.04em;
    color: #ffffff;
  }

  div {
    border-radius: 5px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: #12162a;
    font-weight: bold;
    font-size: 40px;

    &:hover {
      opacity: 0.9;
    }
  }
`;
export const Product = () => {
  const arr = [
    { name: "/testVr.svg" },
    { name: "/gmail-icon.svg" },
    { name: "/facebook-icon.svg" },
  ];
  const [count, setCount] = useState(1);
  const [mainPhoto, setMainPhoto] = useState(arr[0]?.name);
  const [leftPhoto, setLeftPhoto] = useState(arr[1]?.name);
  const [rightPhoto, setRightPhoto] = useState(arr[2]?.name);
  const [leftAnimation, setLeftAnimation] = useState(false);
  const [rightAnimation, setRightAnimation] = useState(false);

  const changePhoto = ({ left }) => {
    if (left) {
      setLeftAnimation(true);
    } else {
      setRightAnimation(true);
    }
  };

  const onAnimationEnd = ({ left, right }) => {
    setLeftAnimation(false);
    setRightAnimation(false);
    if (left) {
      setLeftPhoto(mainPhoto);
      setMainPhoto(leftPhoto);
    }
    if (right) {
      setRightPhoto(mainPhoto);
      setMainPhoto(rightPhoto);
    }
  };

  return (
    <>
      <Container>
        <Title display={false}>OCULUS QUEST</Title>
        <Gallery>
          <MainProductPhoto
            src={mainPhoto}
            animation={
              leftAnimation || rightAnimation ? growAnimationHandler() : "unset"
            }
          >
            <div onAnimationEnd={() => onAnimationEnd} />
          </MainProductPhoto>
          <RestProductPhotoContainer>
            {arr[1] && (
              <RestProductPhoto
                onClick={() => changePhoto({ left: true })}
                animation={leftAnimation ? growAnimationHandler : "unset"}
                src={leftPhoto}
              >
                <div onAnimationEnd={() => onAnimationEnd({ left: true })} />
              </RestProductPhoto>
            )}
            {arr[2] && (
              <RestProductPhoto
                onClick={() => changePhoto({ left: false })}
                animation={rightAnimation ? growAnimationHandler : "unset"}
                src={rightPhoto}
              >
                <div onAnimationEnd={() => onAnimationEnd({ right: true })} />
              </RestProductPhoto>
            )}
          </RestProductPhotoContainer>
        </Gallery>
        <PriceContainer display={false}>
          <Discount>2 990 грн.</Discount>
          <Price>1190 грн.</Price>
        </PriceContainer>
        <Content>
          <Title display={true}>OCULUS QUEST</Title>
          <Exist>Наличие: Есть в наличии.</Exist>
          <Id>Артикул: 1234576890</Id>
          <CountContainer>
            Количество:
            <Count>
              <div onClick={() => count !== 1 && setCount(count - 1)}>-</div>
              <span>{count}</span>
              <div onClick={() => setCount(count + 1)}>+</div>
            </Count>
          </CountContainer>
          <PriceContainer display={true}>
            <Discount>2 990 грн.</Discount>
            <Price>1190 грн.</Price>
          </PriceContainer>
          <ButtonContainer>
            <StyledButton text="Купить" />
          </ButtonContainer>
        </Content>
      </Container>
    </>
  );
};
