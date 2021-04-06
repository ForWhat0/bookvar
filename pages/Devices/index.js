import { GET_ALL_DEVICES } from "../../src/queries/get-all-devices";
import client from "../../src/apollo/client";
import Layout from "../../src/components/layouts/layout";
import { AppSizeLayout } from "../../src/components/layouts/appSizeLayout";
import { Products } from "../../src/components/products/products";
import { startEndPagination } from "../../src/components/hooks/hooks";
import { Pagination } from "../../src/components/pagination/pagination";

export default function AllDevices({ locale, devices, currentPageNumber, siteInfo }) {
  const { total, hasMore, hasPrevious } = devices.pageInfo.offsetPagination;
  const totalPages = Math.ceil(total / 6.0);
  const { startPage, endPage } = startEndPagination(
    currentPageNumber,
    totalPages
  );
  return (
    <Layout siteInfo={siteInfo} locale={locale}>
      <AppSizeLayout>
        {devices.nodes && (
          <>
            <Products locale={locale} products={devices.nodes} />
            <Pagination
              locale={locale}
              currentPageNumber={currentPageNumber}
              hasMore={hasMore}
              hasPrevious={hasPrevious}
              startPage={startPage}
              endPage={endPage}
              href="Devices"
            />
          </>
        )}
      </AppSizeLayout>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  const currentPage = params?.currentPage;
  const currentPageNumber = +(currentPage || 0);

  const offset = currentPageNumber === 0 ? 0 : (currentPageNumber - 1) * 6;

  const fragmentUri =
    locale === "EN" ? "/en/main/" : locale === "RU" ? "/" : "/uk/golovna";

  const { data } = await client.query({
    query: GET_ALL_DEVICES,
    variables: {
      size: 6,
      offset: offset,
      language: locale,
      fragmentUri,
    },
  });
  return {
    props: {
      locale,
      currentPageNumber,
      devices: data?.posts?.nodes ? data.posts : [],
      siteInfo: data?.fragment?.mainFields
    },
    revalidate: 60,
  };
}
