import Layout from "../../src/components/layouts/layout";
import { AppSizeLayout } from "../../src/components/layouts/appSizeLayout";
import { MainText } from "../../src/components/main-text/main-text";
import client from "../../src/apollo/client";
import { GET_ALL_LESSONS_CONTENT } from "../../src/queries/get-all-lessons-content";
import { AllLessonsVideos } from "../../src/components/all-lessons/all-lessons";

export default function AllLessons({ data, locale }) {

  return (
    <Layout
      showLinks={true}
      siteInfo={data.fragment.mainFields}
      locale={locale}
    >
      <AppSizeLayout>
        <MainText vrar={true} locale={locale} text={data.page.content} />
      </AppSizeLayout>
      <AllLessonsVideos
        locale={locale}
        classes={data.classes.nodes}
        video={data.videosAR.nodes[0]}
      />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const pageUri =
    locale === "EN"
      ? "/en/vr-ar-en/"
      : locale === "RU"
      ? "/vr-ar/"
      : "/uk/vr-ar-uk/";
  const fragmentUri =
    locale === "EN" ? "/en/main/" : locale === "RU" ? "/" : "/uk/golovna";

  const { data } = await client.query({
    query: GET_ALL_LESSONS_CONTENT,
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
