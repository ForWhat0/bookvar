import Link from "next/link";
import client from "../src/apollo/client";
import GET_CONTACTS from "../src/queries/get_contacts";
import styled from "styled-components";
import { errorsLsi } from "../src/Lsi/lsi";
import { device } from "../src/components/deviceSizes/deviceSizes";
import Layout from "../src/components/layouts/layout";
import { StyledButton } from "../src/components/button/button";
import { AppSizeLayout } from "../src/components/layouts/appSizeLayout";

const Background = styled.div`
  background: url(/404.svg) no-repeat center center;
  background-size: 40%;
  height: 500px;
  margin-top: 80px;
  @media screen and ${device.tablet} {
    height: 200px;
    background-size: contain;
  }
  @media screen and ${device.tablet} {
    background-size: 80%;
  }
`;
const Global = styled.div`
  width: 100%;
  background: url(/404-background.svg) no-repeat center center;
  background-size: cover;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 0.04em;
    color: #ffffff;

    @media screen and ${device.tablet} {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

const ButtonContainer = styled.div`
  margin: 150px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and ${device.tablet} {
    margin: 60px 0 20px 0;
  }

  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default function PageNotFound({ data, locale }) {
  return (
    <Layout
      showLinks={true}
      siteInfo={data.fragment.mainFields}
      locale={locale}
      hideForm={true}
    >
      <AppSizeLayout>
        <Global>
          <Background />
          <h1>{errorsLsi.text[locale]}</h1>
          <ButtonContainer>
            <Link href="/">
              <a>
                <StyledButton text={errorsLsi.home[locale]} />
              </a>
            </Link>
          </ButtonContainer>
        </Global>
      </AppSizeLayout>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const fragmentUri =
    locale === "EN" ? "/en/main/" : locale === "RU" ? "/" : "/uk/golovna";
  const { data } = await client.query({
    query: GET_CONTACTS,
    variables: {
      fragmentUri,
    },
  });

  return {
    props: {
      locale,
      data,
    },
    revalidate: 60,
  };
}
