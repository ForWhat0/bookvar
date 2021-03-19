import Layout from "../../src/components/layouts/layout";
import { AdvantageOfVr } from "../../src/components/advantage-of-vr/advantage-of-vr";
import { BlobVideoAndTextContainer } from "../../src/components/blob-video-text/BlobVideoAndTextContainer";
import { UseExperience } from "../../src/components/use-experience/use-experience";
import { DevelopSteps } from "../../src/components/develop-steps/develop-steps";
import { SupportingDevices } from "../../src/components/supporting-devices/supporting-devices";
import { AppSizeLayout } from "../../src/components/layouts/appSizeLayout";
import { MainText } from "../../src/components/main-text/main-text";
import { Product } from "../../src/components/product/product";
import { GET_VR_PAGE_CONTENT } from "../../src/queries/GetVrPageContent";
import client from "../../src/apollo/client";

export default function Home({ data }) {
  console.log(data);
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
  const advantageArr = [
    {
      title: " Погружение в ситуацию",
      icon: "/gmail-icon.svg",
      text:
        "Человеческий мозг быстро забывает, что он находится в приложении и человек начинает вести себя абсолютно естественно. Таким образом мы не только обучаем его, но и видим его поведение на примере различных событий",
    },
    {
      title: " Погружение в ситуацию",
      icon: "/gmail-icon.svg",
      text:
        "Человеческий мозг быстро забывает, что он находится в приложении и человек начинает вести себя абсолютно естественно. Таким образом мы не только обучаем его, но и видим его поведение на примере различных событий",
    },
    {
      title: " Погружение в ситуацию",
      icon: "/gmail-icon.svg",
      text:
        "Человеческий мозг быстро забывает, что он находится в приложении и человек начинает вести себя абсолютно естественно. Таким образом мы не только обучаем его, но и видим его поведение на примере различных событий",
    },
    {
      title: " Погружение в ситуацию",
      icon: "/gmail-icon.svg",
      text:
        "Человеческий мозг быстро забывает, что он находится в приложении и человек начинает вести себя абсолютно естественно. Таким образом мы не только обучаем его, но и видим его поведение на примере различных событий",
    },
    {
      title: " Погружение в ситуацию",
      icon: "/gmail-icon.svg",
      text:
        "Человеческий мозг быстро забывает, что он находится в приложении и человек начинает вести себя абсолютно естественно. Таким образом мы не только обучаем его, но и видим его поведение на примере различных событий",
    },
    {
      title: " Погружение в ситуацию",
      icon: "/gmail-icon.svg",
      text:
        "Человеческий мозг быстро забывает, что он находится в приложении и человек начинает вести себя абсолютно естественно. Таким образом мы не только обучаем его, но и видим его поведение на примере различных событий",
    },
  ];
  const devices = [
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
    {
      name: "iPhone 11 Pro",
    },
  ];
  return (
    <Layout headerLogo="/logo.svg" headerMenu={headerArr}>
      <AppSizeLayout>
        <MainText
          text={data.page.content}
          src={data.page.featuredImage.node.sourceUrl}
        />
        <Product />
      </AppSizeLayout>
      <AdvantageOfVr advantage={data.page.VrField.listBenefits} />
      <BlobVideoAndTextContainer
        video={data.page.VrField.linkVideo}
        text={data.page.VrField.titleVideo}
        background={data.page.VrField.imgVideo.sourceUrl}
      />
      <UseExperience />
      <DevelopSteps steps={data.page.VrField.sliderLessons} />
      <SupportingDevices devices={devices} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const pageUri = "/vr/";
  const location =
    locale === "EN"
      ? "HEADER_MENU___EN"
      : locale === "RU"
      ? "HEADER_MENU___RU"
      : "HEADER_MENU";

  const { data } = await client.query({
    query: GET_VR_PAGE_CONTENT,
    variables: {
      pageUri,
    },
  });

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
