import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Layout from "../../src/components/layouts/layout";
import { AdvantageOfVr } from "../../src/components/advantage-of-vr/advantage-of-vr";
import { AppSizeLayout } from "../../src/components/layouts/appSizeLayout";
import { MainText } from "../../src/components/main-text/main-text";
import { GET_VR_PAGE_CONTENT } from "../../src/queries/GetVrPageContent";
import client from "../../src/apollo/client";
import { BlobVideoAndTextContainer } from "../../src/components/blob-video-text/BlobVideoAndTextContainer";
import { DevelopSteps } from "../../src/components/develop-steps/develop-steps";
import { UseExperience } from "../../src/components/use-experience/use-experience";
import { Lines } from "../../src/components/lines/lines";
import { Products } from "../../src/components/products/products";
import { ScrollToElement } from "../../src/redux/actions/actions";
import { StyledButton } from "../../src/components/button/button";
import { Product } from "../../src/Lsi/lsi";
import { ButtonContainer, Space } from "../../src/components/main-approach/mainApproach";
import vrJson from "../../src/components/main-text/json/vr.json";

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

  return (
    <Layout
      showLinks={true}
      siteInfo={data.fragment.mainFields}
      locale={locale}
    >
      <AppSizeLayout>
        <MainText 
        locale={locale} 
        text={data.page.content}
        json={vrJson}
         />
        <AdvantageOfVr
          locale={locale}
          advantage={data.page.VrField.listBenefits}
        />
      </AppSizeLayout>
      <BlobVideoAndTextContainer
        video={data.page.VrField.linkVideo}
        text={data.page.VrField.titleVideo}
        background={data.page.VrField.imgVideo.sourceUrl}
      />
      <DevelopSteps
        vr={true}
        locale={locale}
        steps={data.page.VrField.sliderLessons}
      />
      <Element name="#VrLessons" className="element">
        <UseExperience
          vr={true}
          locale={locale}
          classes={data.classes.nodes}
          video={data.videosVR.nodes[0]}
        />
      </Element>
      <Lines />
      {data.page?.VrField?.productVr && data.page?.VrField?.productVr?.length && (
        <AppSizeLayout>
          <Products
            locale={locale}
            bottom={true}
            products={data.page.VrField.productVr}
          />
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
    locale === "EN" ? "/en/vr-en/" : locale === "RU" ? "/vr/" : "/uk/vr-uk/";
  const fragmentUri =
    locale === "EN" ? "/en/main/" : locale === "RU" ? "/" : "/uk/golovna";

  const { data } = await client.query({
    query: GET_VR_PAGE_CONTENT,
    variables: {
      pageUri,
      language: locale,
      fragmentUri,
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
