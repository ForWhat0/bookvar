import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { HashNavigation, Navigation } from "swiper";
import { createRef } from "react";
import {SwiperContainer, IndexContainer, Text, Arrow, ArrowContainer, StepTitle} from "./swiperStyled";

import { Blob } from "../blobBg/blob";
export const SwiperSteps = ({ content }) => {
  SwiperCore.use([HashNavigation, Navigation]);
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
      centeredSlides: true,
      navigation: true,
      hashNavigation: true,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
  };
  const showNavigation = () => {
    return (
      <ArrowContainer>
        <Arrow arrow="/leftArrow.svg" onClick={() => previous()}>
          <div />
        </Arrow>
        <Arrow arrow="/rightArrow.svg" onClick={() => next()}>
          <div />
        </Arrow>
      </ArrowContainer>
    );
  };
  return (
    <SwiperContainer overflow={"hidden"}>
      <Swiper breakpoints={media} ref={swiperRef}>
        {content.map((item, index) => {
          const step = index + 1;
          return (
            <SwiperSlide key={index + item.name}>
              <Text paddingLeft="20%" width="60%" display="flex">
                <IndexContainer>
                  <h1>{index > 8 ? step : `0${step}`}</h1>
                  <Blob different={step % 2 === 0} />
                </IndexContainer>
                <StepTitle>{item.name}</StepTitle>
                <p>{item.text}</p>
              </Text>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {showNavigation()}
    </SwiperContainer>
  );
};
