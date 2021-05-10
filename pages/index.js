import  { useEffect } from "react";
import animationButton from "../src/components/button/animationButton";
import { Lines } from "../src/components/lines/lines";
import {
  ButtonContainer,
  MainApproach,
  Space
} from "../src/components/main-approach/mainApproach";
import { Products } from "../src/components/products/products";
import Layout from "../src/components/layouts/layout";
import { BlobVideoAndTextContainer } from "../src/components/blob-video-text/BlobVideoAndTextContainer";
import { AppSizeLayout } from "../src/components/layouts/appSizeLayout";
import client from "../src/apollo/client";
import { GET_MAIN_PAGE_CONTENT } from "../src/queries/get-main-page";
import { MainText } from "../src/components/main-text/main-text";
import { VrLessonsSwiper } from "../src/components/vr-lessons-swiper/vr-lessons-swiper";
import { ArLessonsSwiper } from "../src/components/ar-lessons-swiper/ar-lessons-swiper";
import Link from "next/link";
import { StyledButton } from "../src/components/button/button";
import { Product } from "../src/Lsi/lsi";
import mainJson from "../src/components/main-text/json/main.json";

export default function Home({ data, locale }) {
  const {
    titleVr,
    textVr,
    titleAr,
    textAr,
    imgLessonVr,
    linkLessonVr,
    titleLessonVr,
    sliderLessonsVr,
    imgLessonAr,
    linkLessonAr,
    titleLessonAr,
    sliderLessonsAr,
    productList,
  } = data.page.mainFields;
  useEffect(() => {
    animationButton();
  }, []);
  return (
    <Layout
      partners={data?.page?.mainFields?.listPartners}
      siteInfo={data.fragment.mainFields}
      locale={locale}
    >
      <AppSizeLayout>
        <MainText
          json={mainJson}
          main={true}
          locale={locale}
          textCenter={true}
          text={data.page.content}
        />
      </AppSizeLayout>
      <Lines />
      <MainApproach
        locale={locale}
        titleVr={titleVr}
        textVr={textVr}
        titleAr={titleAr}
        textAr={textAr}
      />
      <BlobVideoAndTextContainer
        text={titleLessonVr}
        background={imgLessonVr?.sourceUrl}
        video={linkLessonVr}
      />
      {sliderLessonsVr && sliderLessonsVr.length && (
        <VrLessonsSwiper content={sliderLessonsVr} locale={locale} />
      )}
      <BlobVideoAndTextContainer
        right={true}
        text={titleLessonAr}
        background={imgLessonAr?.sourceUrl}
        video={linkLessonAr}
      />
      {sliderLessonsAr && sliderLessonsAr.length && (
        <ArLessonsSwiper content={sliderLessonsAr} locale={locale} />
      )}
      <Lines />
      {productList && productList.length && (
        <AppSizeLayout>
          <Products locale={locale} bottom={true} products={productList} />
          <ButtonContainer margin={true}>
            <Link href="/Devices">
              <a>
                <StyledButton text={Product.buttonText[locale]} />
              </a>
            </Link>
          </ButtonContainer>
          <Space/>
        </AppSizeLayout>
      )}
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const pageUri =
    locale === "EN" ? "/en/main/" : locale === "RU" ? "/" : "/uk/golovna";
  const fragmentUri =
    locale === "EN" ? "/en/main/" : locale === "RU" ? "/" : "/uk/golovna";
  const { data } = await client.query({
    query: GET_MAIN_PAGE_CONTENT,
    variables: {
      pageUri,
      fragmentUri,
    },
  });

  return {
    props: {
      data,
      locale,
    },
    revalidate: 60,
  };
}
