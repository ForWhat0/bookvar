import { Swiper, SwiperSlide } from "swiper/react";
import { createRef } from "react";
import { SwiperContainer, IndexContainer, Text, Arrow } from "./swiperStyled";

import { LinearGradientText } from "../linear-gradient-text/linear-gradient-text";

import { Blob } from "../blobBg/blob";
export const SwiperSteps = ({ content }) => {
  const swiperRef = createRef();
  const previous = () => {
    const swiper = swiperRef?.current?.swiper ? swiperRef.current.swiper : null;
    swiper && swiper.slidePrev();
  };
  const next = () => {
    const swiper = swiperRef?.current?.swiper ? swiperRef.current.swiper : null;
    swiper && swiper.slideNext();
  };
  const media = {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
  };
  const showNavigation = () => {
    return (
      <>
        <Arrow arrow="/leftArrow.svg" left="0" onClick={() => previous()}>
          <div />
        </Arrow>
        <Arrow arrow="/rightArrow.svg" right="0" onClick={() => next()}>
          <div />
        </Arrow>
      </>
    );
  };
  return (
    <SwiperContainer overflow={"hidden"}>
      {showNavigation()}
      <Swiper loop loopFillGroupWithBlank breakpoints={media} ref={swiperRef}>
        {content.map((item, index) => {
          const step = index + 1;
          return (
            <SwiperSlide key={index + item.name}>
              <Text paddingLeft="20%" width="60%" display="flex">
                <IndexContainer>
                  <h1>{index > 8 ? step : `0${step}`}</h1>
                  <Blob different={step % 2 === 0} />
                </IndexContainer>
                <LinearGradientText text={item.name} size="45px" />
                <p>{item.text}</p>
              </Text>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperContainer>
  );
};
