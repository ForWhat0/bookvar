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

export default function Home({ data, locale }) {
  return (
    <Layout headerLogo="/logo.svg" locale={locale}>
      <AppSizeLayout>
        <MainText locale={locale} text={data.page.content} />
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
      <UseExperience
        classes={data.classes.nodes}
        video={data.videosVR.nodes[0]}
      />
      <Lines />
      <AppSizeLayout>
        <Products
          locale={locale}
          bottom={true}
          products={data.page.VrField.productVr}
        />
      </AppSizeLayout>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const pageUri = "/vr/";

  const { data } = await client.query({
    query: GET_VR_PAGE_CONTENT,
    variables: {
      pageUri,
      language: locale,
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
