import client from "../src/apollo/client";
import { HomePageLayout } from "../src/components/layouts/homePageLayout";
import LAST_EVENTS_AND_LAST_NEWS_QUERY from "../src/queries/get-all-data-for-home-page";
import LastNews from "../src/components/news/lastNews";
import ProjectsWrapper from "../src/components/projects/projectWrapper";
import Services from "../src/components/services/services";
import Events from "../src/components/events/events";
import EventsMobile from "../src/components/events/eventsMobile";
import { ParcMenu } from "../src/components/hooks/hooks";
import GET_EVENTS_DATE from "../src/queries/get_all_events_dete";
import { useDispatch, useSelector } from "react-redux";
import { NewsLsi } from "../src/Lsi/lsi";
import { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import { ScrollToElement } from "../src/redux/actions/actions";
import styled, { css, keyframes } from "styled-components";
import { PlanetMoveBorder } from "../src/components/planet/planet-move-on-border";
import { LinearGradientText } from "../src/components/linear-gradient-text/linear-gradient-text";
import ReactPlayer from "react-player/lazy";
import { TeamSwiper } from "../src/components/team/teamSwipper";
import Team from "../src/components/team/team";
import { SwiperComponent } from "../src/components/swiper/swiper";
import { IconBackgroundSvg } from "../src/components/icon/icon";
import animationButton from "../src/components/button/animationButton";
import { InputStyled } from "../src/components/input/input";
import { SendButton } from "../src/components/sendButton/sendButton";
import { Header } from "../src/components/header/header";
import { Lines } from "../src/components/lines/lines";
import { PageFooter } from "../src/components/footer/footer";
import { MainApproach } from "../src/components/main-approach/mainApproach";
import { Products } from "../src/components/products/products";
import { Form } from "../src/components/send-form/sendForm";
import { BlobBg } from "../src/components/blobBg/blobBg";
import Layout from "../src/components/layouts/layout";
import { BlobVideoAndTextContainer } from "../src/components/blob-video-text/BlobVideoAndTextContainer";
import { IconBackground } from "../src/components/leftComment/leftCommentStyLedComponents";

export default function Home({
  contacts,
  locale,
  menu,
  news,
  events,
  data,
  services,
  allDates,
}) {
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
  const arrPrice = [
    {
      img: "/testVr.svg",
      title: "Окуляри за 1200",
      price: "1 200 грн.",
      discount: "1 000 грн.",
    },
    {
      img: "/testVr.svg",
      title: "Окуляри за 1200",
      price: "1 200 грн.",
      discount: undefined,
    },
  ];
  const arr = [
    {
      title: "Виртуальный мир",
      text: `Процесс обучения происходит только в специальных очках, которые дарят
          зрителю эффект погружения в определенную искуственно созданную
          реальность.`,
      topPhoto: "testVr.svg",
      bottomPhoto: "key.svg",
    },
    {
      title: "Дополненная реальность",
      text: `В процессе обучения ученики могут взаимодействовать с рабочей средой, через свои мобильные устройства. Эта технология не требует подключения гарнитур, нужна только камера устройства и приложение.`,
      topPhoto: "testVr.svg",
      bottomPhoto: null,
    },
  ];
  useEffect(() => {
    animationButton();
  }, []);
  const headerArr = [
    {
      name: "Уроки в VR",
    },
    {
      name: "Уроки в AR",
    },
    {
      name: "Гарнитура",
    },
    {
      name: "Получить технологию",
    },
  ];
  return (
    <Layout headerLogo="/logo.svg" headerMenu={headerArr}>
      <Lines />
      <MainApproach approach={arr} />
      <BlobVideoAndTextContainer  text="КАК ВЫГЛЯДЯТ УРОКИ ПО ФИЗИКЕ В AR" />
      <TeamSwiper employees={arrswper} />
      <BlobVideoAndTextContainer
        text="КАК ВЫГЛЯДЯТ УРОКИ ПО ФИЗИКЕ В VR"
        right={true}
      />
      <Lines />
      <Products products={arrPrice} />
    </Layout>
  );
}
