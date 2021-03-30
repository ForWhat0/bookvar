import client from "../../src/apollo/client";
import { GET_ALL_ID_FROM_DEVICES } from "../../src/queries/get-all-devices-id";
import { GET_DEVICE_BY_ID_AND_FIRST_TWO_DEVICE } from "../../src/queries/get-device-by-id-and-first-two-device";
import React from "react";
import { Product } from "../../src/components/product/product";
import Layout from "../../src/components/layouts/layout";
import {AppSizeLayout} from "../../src/components/layouts/appSizeLayout";

export default function DeviceDetails({ locale, devices, device }) {

  return (
    <Layout headerLogo="/logo.svg" locale={locale}>
      <AppSizeLayout>
        <Product locale={locale} device={device} />
      </AppSizeLayout>
    </Layout>
  );
}

export const getStaticProps = async ({ params, locale }) => {
  const id = params.id;

  const { data } = await client.query({
    query: GET_DEVICE_BY_ID_AND_FIRST_TWO_DEVICE,
    variables: {
      id,
      language: locale,
    },
  });

  return {
    props: {
      locale,
      device: data?.post ? data.post : [],
      devices: data?.posts ? data.posts : [],
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async ({ locales }) => {
  let paths = [];
  const { data } = await client.query({
    query: GET_ALL_ID_FROM_DEVICES,
  });

  for (const locale of locales) {
    paths = [
      ...paths,
      ...data.posts.nodes.map((el) => ({
        params: { id: el.databaseId.toString() },
        locale,
      })),
    ];
  }

  return {
    fallback: "blocking",
    paths,
  };
};
