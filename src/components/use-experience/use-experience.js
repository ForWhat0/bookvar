import styled from "styled-components";
import { TitleForComponent } from "../titleForComponent/title";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { ButtonHandler } from "./button-handler";
import { SwiperComponent } from "../swiper/swiper";
import { device } from "../deviceSizes/deviceSizes";

const Content = styled.div``;
const FirstBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;

  @media screen and ${device.laptop} {
    flex-direction: column;
  }

  @media screen and ${device.tablet} {
    align-items: center;
    padding-bottom: 20px;
  }
`;
const ArVrContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and ${device.laptop} {
    margin-bottom: 20px;
  }
`;
const KlassContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SecondBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 80px;

  @media screen and ${device.tablet} {
    justify-content: center;
    padding-bottom: 30px;
  }
`;
const ThreeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media screen and ${device.laptop} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const ThemeContainer = styled.div`
  background: rgba(42, 204, 255, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 0 30px;
  height: min-content;
  width: 30%;

  @media screen and ${device.laptop} {
    width: 100%;
    margin-bottom: 40px;
  }

  @media screen and ${device.laptop} {
    padding: 20px 0 0 0;
  }
`;
const ThemeWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 30px;

  @media screen and ${device.laptop} {
    padding-bottom: unset;
    padding: 0 20px 20px 20px;
    width: 90%;
  }
`;
const Theme = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  width: 100%;
  cursor: pointer;
  transition: color 0.3s linear;

  &:hover {
    color: #2accff;
  }

  @media screen and ${device.mobileL} {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: url(${(props) => props.src}) center center no-repeat;
  background-size: contain;
  position: absolute;
  right: -50px;
  top: -8px;

  @media screen and ${device.laptop} {
    right: -25px;
  }
  @media screen and ${device.tablet} {
     right: 0;
     top:0;
     width:35px;
     height:25px;
  }
`;
const Video = styled.div`
  width: 60%;

  @media screen and ${device.laptop} {
    width: 100%;
  }
`;
const arrswper = [
  {
    text:
      "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
    url:
      "https://www.youtube.com/watch?v=H0IKOM5973E&list=RDx1zWCizNoRo&index=20",
    name: "Відое 1",
  },
  {
    text:
      "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
    url:
      "https://www.youtube.com/watch?v=3rkJ3L5Ce80&list=RDx1zWCizNoRo&index=27",
    name: "Відое 2",
  },
  {
    text:
      "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
    url:
      "https://www.youtube.com/watch?v=_ZO6mXmdeD8&list=RDx1zWCizNoRo&index=6",
    name: "Відое 3",
  },
  {
    text:
      "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
    url:
      "https://www.youtube.com/watch?v=_ZO6mXmdeD8&list=RDx1zWCizNoRo&index=6",
    name: "Відое 4",
  },
  {
    text:
      "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
    url:
      "https://www.youtube.com/watch?v=_ZO6mXmdeD8&list=RDx1zWCizNoRo&index=6",
    name: "Відое 5",
  },
  {
    text:
      "Воду взято за температури 15 градусів, охолоджуємо, потім нагріваємо до кипіння.Під час досліду вода перебуває в трьох агрегатних станах: рідина, твердий стан та газоподібний.",
    url:
      "https://www.youtube.com/watch?v=_ZO6mXmdeD8&list=RDx1zWCizNoRo&index=6",
    name: "Відое 6",
  },
];
export const UseExperience = () => {
  return (
    <AppSizeLayout>
      <TitleForComponent>
        Наш опыт применения
        <h1>VR</h1>
        для обучения на уроках
      </TitleForComponent>
      <Content>
        <FirstBlock>
          <ArVrContainer>
            <ButtonHandler type="AR" />
            <ButtonHandler type="VR" />
          </ArVrContainer>
          <KlassContainer>
            <ButtonHandler classNum="8" />
            <ButtonHandler classNum="8" />
            <ButtonHandler classNum="8" />
            <ButtonHandler classNum="8" />
          </KlassContainer>
        </FirstBlock>
        <SecondBlock>
          <ButtonHandler icon="/gmail-icon.svg" less="Физика" />
          <ButtonHandler icon="/gmail-icon.svg" less="Физика" />
          <ButtonHandler icon="/gmail-icon.svg" less="Физика" />
          <ButtonHandler icon="/gmail-icon.svg" less="Физика" />
          <ButtonHandler icon="/gmail-icon.svg" less="Физика" />
        </SecondBlock>
        <ThreeBlock>
          <ThemeContainer>
            <ThemeWrapper>
              <Theme>Механические явления</Theme>
              <Icon src="selected-theme-icon.svg" />
            </ThemeWrapper>
            <ThemeWrapper>
              <Theme>Механические явления</Theme>
              <Icon src="selected-theme-icon.svg" />
            </ThemeWrapper>
            <ThemeWrapper>
              <Theme>Механические явления</Theme>
              <Icon src="selected-theme-icon.svg" />
            </ThemeWrapper>
            <ThemeWrapper>
              <Theme>Механические явления</Theme>
              <Icon src="selected-theme-icon.svg" />
            </ThemeWrapper>
          </ThemeContainer>
          <Video>
            <SwiperComponent cube={true} content={arrswper} />
          </Video>
        </ThreeBlock>
      </Content>
    </AppSizeLayout>
  );
};
