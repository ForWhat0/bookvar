import { useEffect } from "react";
import Layout from "../../src/components/layouts/layout";
import { BlobVideoAndTextContainer } from "../../src/components/blob-video-text/BlobVideoAndTextContainer";
import { UseExperience } from "../../src/components/use-experience/use-experience";
import { DevelopSteps } from "../../src/components/develop-steps/develop-steps";
import { SupportingDevices } from "../../src/components/supporting-devices/supporting-devices";
import { AppSizeLayout } from "../../src/components/layouts/appSizeLayout";
import { MainText } from "../../src/components/main-text/main-text";
import { App } from "../../src/components/app/app";
import client from "../../src/apollo/client";
import { GET_AR_PAGE_CONTENT } from "../../src/queries/pages/GetArPageContent";
import { Lines } from "../../src/components/lines/lines";
import { useDispatch, useSelector } from "react-redux";
import { Element, scroller } from "react-scroll";
import { ScrollToElement } from "../../src/redux/actions/actions";
import arJson from "../../src/components/main-text/json/ar.json";

export default function Home({ data, locale }) {
  const dispatch = useDispatch();
  const { scrollToElement } = useSelector((state) => state.app);

  useEffect(() => {
    if (scrollToElement) {
      scroller.scrollTo(scrollToElement, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      dispatch(ScrollToElement(null));
    }
  }, [scrollToElement]);

  const {
    androidListModel,
    ipadListModel,
    iphoneListModel,
    ipodListModel,
  } = data.page.ArField;

  return (
    <Layout
      showLinks={true}
      siteInfo={data.fragment.mainFields}
      locale={locale}
    >
      <AppSizeLayout>
        <MainText locale={locale} text={data.page.content}  json={arJson} />
      </AppSizeLayout>
      <BlobVideoAndTextContainer
        video={data.page.ArField.linkVideo}
        text={data.page.ArField.titleVideo}
        background={data.page.ArField.imgVideo.sourceUrl}
        right={true}
      />
      <Element name="#ArLessons" className="element">
        <UseExperience
          locale={locale}
          classes={data.classes.nodes}
          video={data.videosAR.nodes[0]}
        />
      </Element>
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
  const pageUri =
    locale === "EN" ? "/en/ar-en/" : locale === "RU" ? "/ar/" : "/uk/ar-uk/";
  const fragmentUri =
    locale === "EN" ? "/en/main/" : locale === "RU" ? "/" : "/uk/golovna";

  const { data } = await client.query({
    query: GET_AR_PAGE_CONTENT,
    variables: {
      pageUri,
      fragmentUri,
      language: locale,
    },
  });

  return {
    props: {
      data: data ? data : [],
      locale,
    },
    revalidate: 60,
  };
}
