import { AppSizeLayout } from "../layouts/appSizeLayout";
import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";
import { Logo } from "./header";
import { menu } from "../../Lsi/lsi";
import Link from "next/link";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;

  @media screen and (max-width: 2000px) {
    justify-content: space-between;
  }

  @media screen and ${device.laptop} {
    justify-content: unset;
    flex-direction: column;
    align-items: unset;
  }

  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    width: 50%;
    margin: 0;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: #ffffff;
    flex-wrap: wrap;

    @media screen and (max-width: 2000px) {
      width: 100%;
    }

    @media screen and ${device.laptopL} {
      justify-content: space-between;
    }

    @media screen and ${device.laptop} {
      padding-top:10px;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 0;
      margin: 0;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.04em;
    }
  }

  li {
    padding: 10px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media screen and ${device.tablet} {
      padding: 10px 0;
    }
  }
`;
export const FooterMenu = ({ logo, locale }) => {
  return (
    <AppSizeLayout>
      <HeaderContainer>
        <Logo src={logo} />
        <ul>
          {menu.footerMenu.map((item, index) => (
            <Link href={item.link}>
              <li key={item.link + index}>
                <a>{item.name[locale]}</a>
              </li>
            </Link>
          ))}
        </ul>
      </HeaderContainer>
    </AppSizeLayout>
  );
};
