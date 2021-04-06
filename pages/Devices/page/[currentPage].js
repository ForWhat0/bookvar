import Index, { getStaticProps } from "../index";
import client from "../../../src/apollo/client";
import { GET_DEVICES_COUNT } from "../../../src/queries/get-devices-count";

export default Index;
export { getStaticProps };

export const getStaticPaths = async ({locales}) => {
  const { data } = await client.query({
    query: GET_DEVICES_COUNT,
  });

  const numberOfPages = Math.ceil(
    data.posts.pageInfo.offsetPagination.total / 6.0
  );

  const paths = Array(numberOfPages)
    .fill("")
    .map((_, index) => {
      return { params: { currentPage: (index + 1).toString() } };
    });

  return {
    fallback: "blocking",
    paths: paths,
  };
};
