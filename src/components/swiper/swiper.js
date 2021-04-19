import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  HashNavigation,
  Navigation,
  EffectCoverflow,
  EffectCube,
  Pagination,
} from "swiper";
import {
  SwiperContainerWrapper,
  SwiperContainer,
  Video,
  SwiperContent,
  Text,
  IconBackground
} from "./swiperStyled";

import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlideToHandler } from "../../redux/actions/actions";

export const SwiperComponent = ({ classOn, cube, content }) => {
  SwiperCore.use([
    HashNavigation,
    Navigation,
    EffectCoverflow,
    EffectCube,
    Pagination,
  ]);
  const [swiper, setSwiper] = useState(null);
  const dispatch = useDispatch();
  const slideTo = (index) => swiper && swiper.slideTo(index);

  const { swiperSlideTo } = useSelector((state) => state.app);

  useEffect(() => {
    if (swiperSlideTo !== "null" && classOn) {
      slideTo(swiperSlideTo);
    }
  }, [swiperSlideTo]);

  swiper &&
    classOn &&
    swiper.once("slideChange", function () {
      dispatch(SlideToHandler(swiper.activeIndex));
    });

  const showPLayer = (isActive, item) => {
    return (
      <ReactPlayer
        controls={false}
        playing={isActive}
        onClickPreview={(e) => e.preventDefault()}
        light
        playIcon={<IconBackground background="play-icon.svg" />}
        width="100%"
        height="100%"
        wrapper={Video(isActive)}
        url={item.url}
      />
    );
  };
  const media = {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };

  return (
    <SwiperContainer overflow={cube ? "unset" : "hidden"}>
      <Swiper
        onSwiper={setSwiper}
        centeredSlides
        slideToClickedSlide
        effect={cube ? "cube" : "coverflow"}
        loop={!cube}
        navigation
        hashNavigation
        pagination={cube ? { clickable: false } : false}
        breakpoints={cube ? false : media}
      >
        {content.map((item, index) => {
          return (
            <SwiperSlide key={index + item.name}>
              {({ isActive }) => (
                <SwiperContent>
                  <SwiperContainerWrapper>
                    {showPLayer(isActive, item)}
                  </SwiperContainerWrapper>
                  <Text maxWidth={cube ? '60%' : 'unset'} display={isActive ? "flex" : "none"}>
                    <span>{item.name}</span>
                    <p>{item.text}</p>
                  </Text>
                </SwiperContent>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperContainer>
  );
};
