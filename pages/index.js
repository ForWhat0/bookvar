import { useEffect } from "react";
import animationButton from "../src/components/button/animationButton";
import { Lines } from "../src/components/lines/lines";
import { MainApproach } from "../src/components/main-approach/mainApproach";
import { Products } from "../src/components/products/products";
import Layout from "../src/components/layouts/layout";
import { BlobVideoAndTextContainer } from "../src/components/blob-video-text/BlobVideoAndTextContainer";
import {SwiperComponent} from "../src/components/swiper/swiper";
import {AppSizeLayout} from "../src/components/layouts/appSizeLayout";

export default function Home() {
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
    <Layout headerLogo="/logo.svg" locale={locale}>
      <Lines />
      <MainApproach approach={arr} />
      <BlobVideoAndTextContainer  text="КАК ВЫГЛЯДЯТ УРОКИ ПО ФИЗИКЕ В VR" />
      <AppSizeLayout>
        <SwiperComponent content={arrswper} />
      </AppSizeLayout>
      <BlobVideoAndTextContainer
        text="КАК ВЫГЛЯДЯТ УРОКИ ПО ФИЗИКЕ В AR"
        right={true}
      />
      <AppSizeLayout>
        <SwiperComponent content={arrswper} />
      </AppSizeLayout>
      <Lines />
      <Products products={arrPrice} />
    </Layout>
  );
}
