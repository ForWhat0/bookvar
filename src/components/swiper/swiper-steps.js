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
} from "./swiperStyled";

import ReactPlayer from "react-player/lazy";
import { IconBackground } from "../leftComment/leftCommentStyLedComponents";
import { LinearGradientText } from "../linear-gradient-text/linear-gradient-text";

export const SwiperSteps = ({ cube, content }) => {
  SwiperCore.use([
    HashNavigation,
    Navigation,
    EffectCoverflow,
    EffectCube,
    Pagination,
  ]);

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
      slidesPerView: 2,
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
        centeredSlides
        slideToClickedSlide
        effect={cube ? "cube" : "coverflow"}
        loop={false}
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
                  {content[index + 1] && (
                    <Text display={isActive ? "flex" : "none"}>
                      <LinearGradientText
                        text={
                          index === 0
                            ? content[index].name
                            : content[index + index]?.name
                        }
                        size="45px"
                      />
                      <p>
                        {index === 0
                          ? content[index].text
                          : content[index + index]?.text}
                      </p>
                    </Text>
                  )}
                  {content[index + 1] ? (
                    <Text display={isActive ? "flex" : "none"}>
                      <LinearGradientText
                        text={
                          index === 0
                            ? content[index + 1].name
                            : content[index + index + 1]?.name
                        }
                        size="45px"
                      />
                      <p>
                        {index === 0
                          ? content[index + 1].text
                          : content[index + index + 1]?.text}
                      </p>
                    </Text>
                  ) : (
                    <Text display={isActive ? "flex" : "none"}>
                      <LinearGradientText text={item.name} size="45px" />
                      <p>{item.text}</p>
                    </Text>
                  )}
                </SwiperContent>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperContainer>
  );
};
