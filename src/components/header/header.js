import styled from "styled-components";
import Burger from "../burgerMenu/burgerMenu";
import { device } from "../deviceSizes/deviceSizes";
import { menu } from "../../Lsi/lsi";
import Link from "next/link";
import { ChangeLanguageSelector } from "../headers/changeLanguageSelector";

export const HeaderWrapper = styled.div`
  width: 80%;
  margin-left: 10%;
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position};
  @media screen and ${device.tablet} {
    width: 93.6%;
    margin-left: 3.2%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;

  @media screen and ${device.laptop} {
    justify-content: space-between;
  }
`;
const Menu = styled.div`
  padding-left: 50px;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
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

  @media screen and ${device.laptop} {
    display: none;
  }

  span {
    padding: 10px;
    cursor: pointer;
    
    &:hover {
      background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
export const Icon = styled.div`
  width: 15px;
  padding: 0 10px 0 5px;
  height: 15px;
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: contain;
  transition: all 0.3s ease-in-out;
  -webkit-transform: rotate(${(props) => props.open});
  -moz-transform: rotate(${(props) => props.open});
  -o-transform: rotate(${(props) => props.open});
  -ms-transform: rotate(${(props) => props.open});
  transform: rotate(${(props) => props.open});
`;
export const Logo = styled.div`
  background: url(${(props) => props.src}) no-repeat left center;
  background-size: contain;
  width: 263px;
  height: 65px;

  @media screen and ${device.tablet} {
    width: 50%;
  }
  @media screen and ${device.mobileL} {
    height: 30px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const { mainPage, signUp, mainPageLink } = menu.headerMenu;

export const Header = ({ logo, locale, menuBurgerIsOpen }) => {
  const zIndex = menuBurgerIsOpen ? "6" : "1";
  const position = menuBurgerIsOpen ? "fixed" : "initial";
  return (
    <HeaderWrapper zIndex={zIndex} position={position}>
      <HeaderContainer>
        <Logo src={logo} />
        <Menu>
          <Link href={mainPageLink}>
            <span>
              <a>{mainPage[locale]}</a>
            </span>
          </Link>
          <ChangeLanguageSelector />
          <Flex>
            <Icon src="/star.svg" open="0" />
            <span>{signUp[locale]}</span>
          </Flex>
        </Menu>
        <Burger />
      </HeaderContainer>
    </HeaderWrapper>
  );
};
