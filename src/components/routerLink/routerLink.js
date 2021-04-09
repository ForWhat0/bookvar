import { useRouter } from "next/router";
import { linkTitleLsi } from "../../Lsi/lsi";
import styled from "styled-components";
import Link from "next/link";
import { device } from "../deviceSizes/deviceSizes";

const Global = styled.div`
  margin: 87px 0 40px 10%;
  display: flex;
  letter-spacing: 0.04em;
  font-weight: 500;
  @media screen and ${device.tablet} {
    margin: 23px 0 20px 3.2%;
  }
`;
const Home = styled.span`
  cursor: pointer;
  color: #ffffff;
  display: flex;
  align-items: center;
  line-height: 20px;
  font-size: 16px;
  @media screen and ${device.tablet} {
    font-size: 12px;
    line-height: 15px;
  }
`;
const CurrentLink = styled.span`
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and ${device.tablet} {
    font-size: 13px;
    line-height: 16px;
  }
`;
const NextIcon = styled.div`
  margin: 0 10px 0 10px;
  width: 15px;
  height: 15px;
  background: url(/star.svg) no-repeat center center;
  background-size: contain;

  @media screen and ${device.tablet} {
    margin: 0 10px 0 18px;
    width: 10px;
    height: 10px;
  }
`;

export const RouterLink = ({ routerLinkTitle }) => {
  const router = useRouter();
  const locale = router.locale;
  const pathname = router.pathname;
  const currentLink = pathname.substring(1).split("/").shift();
  const currentLinkTitle = linkTitleLsi[currentLink][locale];

  return (
    <Global>
      <Link href="/">
        <a>
          <Home>
            {linkTitleLsi.home[locale]}
            <NextIcon />
          </Home>
        </a>
      </Link>

      {routerLinkTitle && (
        <Link href={`/${currentLink}`}>
          <a>
            <Home>
              {currentLinkTitle}
              <NextIcon />
            </Home>
          </a>
        </Link>
      )}

      <CurrentLink>
        {routerLinkTitle ? routerLinkTitle : currentLinkTitle}
      </CurrentLink>
    </Global>
  );
};
