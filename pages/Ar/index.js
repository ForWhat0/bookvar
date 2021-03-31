import Layout from "../../src/components/layouts/layout";
import { AdvantageOfVr } from "../../src/components/advantage-of-vr/advantage-of-vr";
import { BlobVideoAndTextContainer } from "../../src/components/blob-video-text/BlobVideoAndTextContainer";
import { UseExperience } from "../../src/components/use-experience/use-experience";
import { DevelopSteps } from "../../src/components/develop-steps/develop-steps";
import { SupportingDevices } from "../../src/components/supporting-devices/supporting-devices";
import { AppSizeLayout } from "../../src/components/layouts/appSizeLayout";
import { MainText } from "../../src/components/main-text/main-text";
import { App } from "../../src/components/app/app";
import { Product } from "../../src/components/product/product";
import { GET_VR_PAGE_CONTENT } from "../../src/queries/GetVrPageContent";
import client from "../../src/apollo/client";
import { GET_AR_PAGE_CONTENT } from "../../src/queries/pages/GetArPageContent";
import { Lines } from "../../src/components/lines/lines";

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

export default function Home({ data, locale }) {
  const {
    androidListModel,
    ipadListModel,
    iphoneListModel,
    ipodListModel,
  } = data.page.ArField;

  return (
    <Layout headerLogo="/logo.svg" locale={locale}>
      <AppSizeLayout>
        <MainText text={data.page.content} />
      </AppSizeLayout>
      <BlobVideoAndTextContainer
        video={data.page.ArField.linkVideo}
        text={data.page.ArField.titleVideo}
        background={data.page.ArField.imgVideo.sourceUrl}
        right={true}
      />
      <App
        locale={locale}
        playLink={data.page.ArField.arLinkAndroidApp}
        appLink={data.page.ArField.arLinkIphoneApp}
        title={data.page.ArField.arLogoApp.sourceUrl}
        text={data.page.ArField.arTextApp}
        picture={data.page.ArField.imgLeftApp.sourceUrl}
      />
      <Lines />
      <SupportingDevices
        locale={locale}
        androidListModel={androidListModel}
        ipadListModel={ipadListModel}
        iphoneListModel={iphoneListModel}
        ipodListModel={ipodListModel}
      />
      <DevelopSteps locale={locale} steps={data.page.ArField.sliderLessons} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const pageUri = "/ar/";
  const location =
    locale === "EN"
      ? "HEADER_MENU___EN"
      : locale === "RU"
      ? "HEADER_MENU___RU"
      : "HEADER_MENU";

  const { data } = await client.query({
    query: GET_AR_PAGE_CONTENT,
    variables: {
      pageUri,
    },
  });

  return {
    props: {
      data: data ? data : [],
      locale,
    },
    revalidate: 1,
  };
}
