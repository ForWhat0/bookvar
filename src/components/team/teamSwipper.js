import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import {
  ArrowIconMobile,
  ArrowsMobile,
  EmployerContainer,
  EmployerName,
  EmployerPhoto,
  PhotoContainer,
  SwiperContainer,
  Arrow,
} from "./teamStyledComponents";
import { createRef, useState } from "react";
import "lazysizes";
import ReactPlayer from "react-player/lazy";
import styled, { keyframes } from "styled-components";
import { IconBackground } from "../leftComment/leftCommentStyLedComponents";
import { LinearGradientText } from "../linear-gradient-text/linear-gradient-text";
import {TitleForComponent} from "../titleForComponent/title";
const swiperRef = createRef();

export const previous = () => {
  const swiper = swiperRef?.current?.swiper ? swiperRef.current.swiper : null;
  swiper && swiper.slidePrev();
};
export const next = () => {
  const swiper = swiperRef?.current?.swiper ? swiperRef.current.swiper : null;
  swiper && swiper.slideNext();
};
const effect = {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
};
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
const Video = (isActive) => styled.div`
  overflow: hidden;
  z-index: 2;
  position: absolute;
  box-shadow: 0 10px 10px rgb(0 0 0 / 20%);
  background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%) border-box;
  color: #313149;
  border: 4px solid transparent;
  border-radius: 33px;

  &:after {
    z-index: -1;
    animation: ${isActive && shine} 2s linear 0.3s;
    animation-fill-mode: forwards;
    content: "";
    position: absolute;
    top: -110%;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);

    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const open = keyframes`
0%{
opacity:0;
}
100%{
opacity:1;
}
`;

export const TeamSwiper = ({ employees }) => {
  const [state, setState] = useState();
  SwiperCore.use([EffectCoverflow]);
  const Text = styled.div`
    margin-top: 10px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${open} 2s ease-in-out;

    p {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: rgba(255, 255, 255, 0.8);
      padding-top:20px;
    }
  `;
  return (
      <>
        <TitleForComponent>
          Доступные уроки в
          <h1>VR</h1>
          (виртуальной реальности)
        </TitleForComponent>
        <SwiperContainer>
          <Swiper
              ref={swiperRef}
              direction="horizontal"
              centeredSlides
              effect="coverflow"
              grabCursor
              slidesPerView="auto"
              loop
              coverflowEffect={effect}
          >
            {employees.map((employer, index) => {
              return (
                  <SwiperSlide key={index + employer.name}>
                    {({ isActive }) => (
                        <EmployerContainer>
                          {isActive && setState(employer)}

                          <ReactPlayer
                              controls={false}
                              playing={!!isActive}
                              onClickPreview={(e) => e.preventDefault()}
                              light
                              playIcon={<IconBackground background="play-icon.svg" />}
                              width="100%"
                              height="100%"
                              wrapper={Video(isActive)}
                              url={employer.url}
                          />
                        </EmployerContainer>
                    )}
                  </SwiperSlide>
              );
            })}
            <ArrowsMobile>
              <Arrow left="0" onClick={() => previous()}>
                <ArrowIconMobile arrow="/leftArrow.svg" />
              </Arrow>
              <Text>
                <LinearGradientText text={state?.name} size="45px" />
                <p>{state?.text}</p>
              </Text>
              <Arrow right="0" onClick={() => next()}>
                <ArrowIconMobile arrow="/rightArrow.svg" />
              </Arrow>
            </ArrowsMobile>
          </Swiper>
        </SwiperContainer>
        </>
  );
};
